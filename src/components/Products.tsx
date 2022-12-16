import React, { useEffect, useState } from "react";
import {
  loadProducts,
  setDefaultProduct,
  setProductListModel,
} from "../features/products/productSlice";
import { addTag } from "../features/tags/tagsSlice";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { Itag } from "./Tags";
import  uuid  from 'react-uuid'

export default function Products() {
  const [newProduct, setNewProduct] = useState({} as Itag);
  const [category, setCategory] = useState("");
  const [findroduct, setFindProduct] = useState("");
  const { productListModel, products, categoryList, defaultProduct } = useAppSelector(
    (state) => state.products
  );
  const { tagList } = useAppSelector(
    (state) => state.tags
  );
  const [value, setValue] = useState<string>("");
  const dispatch = useAppDispatch();

  const handlerAddNewProduct = () => {
    dispatch(addTag({...newProduct,
      productName:newProduct.property?.type+' '+newProduct.property?.model+' '+newProduct.property?.size,
      id: uuid()
    }))
  }

  const handlerFindProduct = (findText:string) => {
    fetch(`http://service.dvinahome.ru/findproduct?text="${findText}"`, {
      method: "GET",
      headers: { Authorization: "basic dXNlcjpwYXNz" },
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        dispatch(loadProducts(result["data"]));
        dispatch(setProductListModel(result["data"]));
        dispatch(setDefaultProduct(result["data"][0][0]));
      }).catch(()=>{
        alert('не найдено совпадений в наименованиях')
    })
  }

  const hadlerGetProduct = (value: string) => {
    fetch(`http://service.dvinahome.ru/?category="${value}"`, {
      method: "POST",
      headers: { Authorization: "basic dXNlcjpwYXNz" },
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        dispatch(loadProducts(result["data"]));
        dispatch(setProductListModel(result["data"]));
        dispatch(setDefaultProduct(result["data"][0][0]));
      })
      
  };

  function handlerAddTag(model: string) {
    if (tagList.find((item:any) => item.id === model) != undefined) 
      return alert('Такой товар уже есть в списке')
    let result = products.find((item) => item[0] === model) || [];
    const sizes: string[] = [];
    products.map((prod: any) => {
      if (prod[3] === result[3] && prod[4] !== undefined) sizes.push(prod[4]);
    });
    dispatch(
      addTag({
        productId: result[1],
        productName: result[0],
        discount: "",
        checked: false,
        id: result[0],
        fixOldPrice: "",
        fixNewPrice: "",
        property: {
          size: result[4],
          allSize: Array.from(new Set(sizes)).slice(0, 6),
          type: result[2],
          model: result[3],
          catigoryCloth: result[6],
          settings: [
            result[9],
            result[10],
            result[11],
            result[12],
            result[13],
            result[14],
            result[15],
            result[16],
            result[17],
          ],
        },
        isSelect: false,
        data: Array.from(new Set(sizes))
          .slice(0, 6)
          .map((item) => {
            return { name: item, valueNew: "", valueOld: "" };
          }),
      })
    );
  }

  return (
    <>
    <div>
      <div style={{marginBottom:15, fontSize:'16px'}}>
      <div style={{ display:'inline' }}>
        <label>выберите категорию товара:&nbsp;</label>
        <div style={{ display: "inline-flex" }}>
          <select
            style={{ width: "200px", borderRadius: 5, border: '0.5px solid black'}}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {Array.from(new Set(categoryList)).map((tw: any) => (
              <option key={tw} value={tw}>{tw}</option>
            ))}
          </select>
          <button
            className="btn btn-sm btn-primary mx-3"
            onClick={() => hadlerGetProduct(category)}
          >
            загрузить
          </button>
        </div>
      </div>
      <div style={{display:'inline'}}>
        <label>поиск по названию товара:&nbsp;</label>
        <div style={{ display: "inline-flex"}}>
        <input type={'text'} 
          style={{borderRadius: 5, border: '0.5px solid black'}}
          placeholder='введите фразу для поиска'
          value={findroduct}
          onChange={(e) => setFindProduct(e.target.value)}
        />
        <button
            className="btn btn-sm btn-primary mx-3"
            onClick={() => {handlerFindProduct(findroduct)}}
        >
            поиск
        </button>
        </div>
      </div>
      </div>
      <div>
        <label>выберите название товара:&nbsp;</label>
        <div style={{ display: "inline-flex" }}>
          <select
            style={{ width: "500px", borderRadius: 5, border: '0.5px solid black'}}
            value = {defaultProduct}
            onChange={(e) => dispatch(setDefaultProduct(e.target.value))}
          >
            {productListModel.map((tw: any, index) => {
                if (index === 0)
                  return <option selected value={tw}>{tw}</option>
                return <option key={tw} value={tw}>{tw}</option>
            })}
          </select>
          <button
            className="btn btn-sm btn-success mx-3"
            onClick={() => handlerAddTag(defaultProduct)}
          >
            добавить в очередь
          </button>
          <button
            className="btn btn-sm btn-warning "
            data-toggle="modal" data-target="#addProductModal"
          >
            создать товар
          </button>
        </div>
      </div>
    </div>

    <div className="modal fade" id="addProductModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content">
        <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Создание нового товара</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <span className="m-3 text-danger">Необходимо создавать новый товар только если у вас нет в списке нужного товара. Не создавайте новые товары просто так!</span>
        <div className="modal-body">
            <label>Категория товара:</label>
            <input 
            required
            type={'text'} 
            style={{width:400}}
            value={newProduct.property?.type}
            onChange={(e) => setNewProduct({...newProduct, 
            productName: e.target.value,
            property: {...newProduct.property, 
              type:e.target.value
            }
            })}
            />
            <label>Наименование модели:</label>
            <input 
            required
            type={'text'} 
            style={{width:400}}
            value={newProduct.property?.model}
            onChange={(e) => setNewProduct({...newProduct, 
            productName: e.target.value,
            property: {...newProduct.property, 
              model:e.target.value
            }
            })}
            />
            <label>Размер модели (если есть):</label>
            <input 
            type={'text'} 
            style={{width:400}}
            value={newProduct.property?.size}
            onChange={(e) => setNewProduct({...newProduct, 
            property: {...newProduct.property, 
              size:e.target.value
            }
            })}
            />
            <label>Категория ткани (если есть):</label>
            <input 
            type={'text'} 
            style={{width:400}}
            value={newProduct.property?.catigoryCloth}
            onChange={(e) => setNewProduct({...newProduct, 
            property: {...newProduct.property, 
              catigoryCloth:e.target.value
            }
            })}
            />

        </div>
        <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Закрыть</button>
            <button 
            onClick={handlerAddNewProduct}
            type="button" className="btn btn-primary" data-dismiss="modal">Создать товар</button>
        </div>
        </div>
    </div>
    </div>
    </>
  );
}
function setCategoryList(arg0: any): any {
  throw new Error("Function not implemented.");
}
