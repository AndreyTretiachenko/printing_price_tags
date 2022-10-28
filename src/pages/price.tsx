import React, { useEffect, useState } from "react"
import { Prev } from "react-bootstrap/esm/PageItem"
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript"
import Products from "../components/Products"
import Tags, { Itag } from "../components/Tags"


export default function Price() {

    const[product, setProduct] = useState([])
    const[tagItems, settagItems] = useState<Itag[]>([])
    
    
    useEffect(()=>{
       fetch('http://service.dvinahome.ru/?count=1000',
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
        property:[{
            size:result[4],
            name1:result[2],
            name2:result[3],
            categoryCloth:result[8],
            settings:[result[13], result[14], result[15], result[16],result[17], result[18], result[19]]
        }],
        isSelect: false     
   }
  }  

  const handleClickProduct = (key:number) => {
    console.log(key)
    settagItems(tagItems.map(item => {
        if (item.key != key) {
            return item
        
        }
        return {
            ...item,
            isSelect:!item.isSelect
        }
        
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
