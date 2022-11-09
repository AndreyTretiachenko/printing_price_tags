import React, { ChangeEventHandler, useState } from 'react'
import { useAppSelector } from '../hooks/hooks';

interface ProductsProps {
  product: any
  addProduct:(name:string)=>void;
}

export default function Products(props: ProductsProps) {
  // const {product, addProduct} = props
  const [value, setValue] = useState('')
  const productList = useAppSelector((state) => state.products.product)

  return (
    <div className='d-flex justify-content-start my-3'>
      <label>выберите название товара:&nbsp;</label>
      <select style={{'width':'500px'}}
              value = {value}
              onChange = {(e) => setValue(e.target.value)}
      >
      {productList.map((tw: any)=>(
        <option key={tw} value={tw}>{tw}</option>
      ))}  
      </select>
      {/* <button className='btn btn-sm btn-secondary mx-3'
      onClick={()=>addProduct(value)}
      >добавить</button> */}
    </div>
  )
}
