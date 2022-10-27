import React, { useEffect, useState } from "react"
import Products from "../components/Products"
import Tags from "../components/Tags"


export default function Price() {

    const[product, setProduct] = useState([])
    const[tagItems, settagItems] = useState([])
    
    
    useEffect(()=>{
       fetch('http://service.dvinahome.ru/?count=4000',
            {
                method: 'POST',
                headers: {'Authorization':'basic dXNlcjpwYXNz'}
            }
        ).then((res) => {
            return res.json()}).then(result => {
                setProduct(result['data'])    
        })
    },[])

  const handleAddProduct = () => {
    settagItems([...tagItems, [1,2,3]])
  }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-12 my-3'>
                <Products product={product} addProduct={handleAddProduct}/>
            </div>
        </div>
        <div className="row">
            <div className="col-6 d-flex justify-content-start my-3">
                <Tags items={[{isSelect:false, productId:'1', productName:'123'}]}/>
            </div>
            <div className="col-6 d-flex justify-content-start my-3">
                <span>шаблон ценника</span>
            </div>
        </div>
    </div>
  )
}
