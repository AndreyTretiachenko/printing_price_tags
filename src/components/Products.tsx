import React, { useState } from 'react'

interface ProductsProps {
  product: any
  addProduct:()=>void;
}

export default function Products(props: ProductsProps) {
  const {product, addProduct} = props
  const [value, setValue] = useState('')

  return (
    <div className='d-flex justify-content-start my-3'>
      <label>выберите название товара:&nbsp;</label>
      <select style={{'width':'500px'}}
              value = {value}
              onChange = {(e) => setValue(e.target.value)}
      >
      {product.map((tw: any)=>(
        <option key={tw[1]}>{tw[0]}</option>
      ))}  
      </select>
      <button className='btn btn-sm btn-secondary mx-3'
      onClick={addProduct}  
      >добавить</button>
    </div>
  )
}
