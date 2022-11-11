import React, {  useState } from 'react'
import { addTag } from '../features/tags/tagsSlice';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';


export default function Products() {

  const [value, setValue] = useState('')
  const {productListModel, products} = useAppSelector((state) => state.products)
  const dispatch = useAppDispatch()

  function handlerAddTag(model:string) {
    let result = products.find(item => item[3] === model) || []
    const sizes: string[] = []
    products.map((prod:any) => {
        if (prod[3] === result[3])
        sizes.push(prod[4].toString())
     })
     dispatch(addTag({
      productId: result[1],
      productName: result[0],
      checked: false,
      id: result[0],
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
    <div className='d-flex justify-content-start my-3'>
      <label>выберите название товара:&nbsp;</label>
      <select style={{'width':'500px'}}
              value = {value}
              onChange = {(e) => setValue(e.target.value)}
      >
      {productListModel.map((tw: any)=>(
        <option key={tw} value={tw}>{tw}</option>
      ))}  
      </select>
      <button className='btn btn-sm btn-secondary mx-3'
      onClick={()=>handlerAddTag(value)}
      >добавить</button>
    </div>
  )
}
