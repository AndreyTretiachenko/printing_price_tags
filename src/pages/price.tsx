import React, { useEffect, useState } from "react"
import { Prev } from "react-bootstrap/esm/PageItem"
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript"
import Products from "../components/Products"
import Tags, { Itag } from "../components/Tags"


export default function Price() {

    const[product, setProduct] = useState([])
    const[tagItems, settagItems] = useState<Itag[]>([])
    
    
    useEffect(()=>{
       fetch('http://service.dvinahome.ru/?count=300',
            {
                method: 'POST',
                headers: {'Authorization':'basic dXNlcjpwYXNz'}
            }
        ).then((res) => {
            return res.json()}).then(result => {
                setProduct(result['data'])    
        })
    },[])

  function FindProduct<Itag>(product: any[], name: string) {
    const result = product.find((e: any[]) => {
        return e[0]===name})
    return {
        productId: result[1],
        productName: result[0],
        key: Date.now(),
        isSelect: false     
   }
  }  

  const handleClickProduct = (nameProduct:string) => {
    console.log(nameProduct)
    settagItems(tagItems.flatMap(item => {
        if (item.productName == nameProduct) {
            
            return {
                ...item,
                isSelect:!item.isSelect
            }
        }
        return item
    }))
} 

  const handleAddProduct = (name:string) => {
    settagItems([...tagItems, FindProduct(product, name)])
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
                <Tags items={tagItems} clickProd={handleClickProduct}/>
            </div>
            <div className="col-6 d-flex justify-content-start my-3">
                <span>шаблон ценника</span>
            </div>
        </div>
    </div>
  )
}
