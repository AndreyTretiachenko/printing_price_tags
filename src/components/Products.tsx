import React, {  useEffect, useState } from 'react'
import { loadProducts, setProductListModel } from '../features/products/productSlice';
import { addTag } from '../features/tags/tagsSlice';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';


export default function Products() {

  const [value, setValue] = useState('')
  const [category, setCategory] = useState('')
  const {productListModel, products, categoryList} = useAppSelector((state) => state.products)
  const dispatch = useAppDispatch()

  const hadlerGetProduct = (value:string) => {
    fetch(`http://service.dvinahome.ru/?category="${value}"`,
    {
        method: 'POST',
        headers: {'Authorization':'basic dXNlcjpwYXNz'}
    }
        ).then((res) => {
    return res.json()}).then(result => {
        dispatch(loadProducts(result['data']))
        dispatch(setProductListModel(result['data']))
})
  }

  function handlerAddTag(model:string) {
    let result = products.find(item => item[0] === model) || []
    const sizes: string[] = []
    products.map((prod:any) => {
        if (prod[3] === result[3] && prod[4] !== undefined)
        sizes.push(prod[4])
     })
     dispatch(addTag({
      productId: result[1],
      productName: result[0],
      discount:'',
      checked: false,
      id: result[0],
      fixOldPrice:'',
      fixNewPrice:'',
      property: {
          size:result[4],
          allSize: Array.from(new Set(sizes)).slice(0,6),
          type: result[2],
          model: result[3],
          catigoryCloth:result[6],
          settings: [result[9], result[10], result[11], result[12],result[13], result[14], result[15], result[16], result[17]]
      },
      isSelect: false,
      data: Array.from(new Set(sizes)).slice(0,6).map((item) =>{
        return {name:item, valueNew:'', valueOld:''}
      })     
     }))
  }



  return (
    <div className='d-block justify-content-start my-3'>
      <div style={{paddingBottom:10}}>
      <label>выберите категорию товара:&nbsp;</label>
      <div style={{display:'inline'}}>
      <select style={{'width':'200px'}}
              value = {category}
              onChange = {(e) => setCategory(e.target.value)}
      >
      {Array.from(new Set(categoryList)).map((tw: any)=>(
        <option value={tw}>{tw}</option>
      ))}  
      </select>
      <button className='btn btn-sm btn-secondary mx-3'
      onClick={()=>hadlerGetProduct(category)}
      >загрузить</button>
      </div>
      </div>
      <div >
      <label>выберите название товара:&nbsp;</label>
      <div style={{display:'inline'}}>
      <select style={{'width':'500px'}}
              value = {value}
              onChange = {(e) => setValue(e.target.value)}
      >
      {productListModel.map((tw: any)=>(
        <option  value={tw}>{tw}</option>
      ))}  
      </select>
      
      <button className='btn btn-sm btn-secondary mx-3'
      onClick={()=>handlerAddTag(value)}
      >добавить</button>
      </div>
    </div>
    </div>
    
  )
}
function setCategoryList(arg0: any): any {
  throw new Error('Function not implemented.');
}

