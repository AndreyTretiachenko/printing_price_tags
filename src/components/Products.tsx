import React, { useEffect, useState } from "react";
import {
  loadProducts,
  setDefaultProduct,
  setProductListModel,
} from "../features/products/productSlice";
import { addTag } from "../features/tags/tagsSlice";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";

export default function Products() {
  const [category, setCategory] = useState("");
  const [findroduct, setFindProduct] = useState("")
  const { productListModel, products, categoryList, defaultProduct } = useAppSelector(
    (state) => state.products
  );
  const { tagList } = useAppSelector(
    (state) => state.tags
  );
  const [value, setValue] = useState<string>("");
  const dispatch = useAppDispatch();

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
    <div>
      <div style={{marginBottom:10}}>
      <div style={{ paddingBottom: 10, display:'inline' }}>
        <label>выберите категорию товара:&nbsp;</label>
        <div style={{ display: "inline" }}>
          <select
            style={{ width: "200px" }}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {Array.from(new Set(categoryList)).map((tw: any) => (
              <option value={tw}>{tw}</option>
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
        <input list='list' type={'text'} 
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
      <div>
        <label>выберите название товара:&nbsp;</label>
        <div style={{ display: "inline" }}>
          <select
            style={{ width: "500px" }}
            value = {defaultProduct}
            onChange={(e) => dispatch(setDefaultProduct(e.target.value))}
          >
            {productListModel.map((tw: any, index) => {
                if (index === 0)
                  return <option selected value={tw}>{tw}</option>
                return <option value={tw}>{tw}</option>
            })}
          </select>
          <button
            className="btn btn-sm btn-success mx-3"
            onClick={() => handlerAddTag(defaultProduct)}
          >
            добавить
          </button>
        </div>
      </div>
    </div>
  );
}
function setCategoryList(arg0: any): any {
  throw new Error("Function not implemented.");
}
