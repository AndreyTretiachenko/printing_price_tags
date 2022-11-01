import React, { useEffect, useState } from "react"
import Products from "../components/Products"
import TagPrice from "../components/TagPrice"
import Tags, { Itag } from "../components/Tags"


export default function Price() {

    const[product, setProduct] = useState([])
    const[tagItems, settagItems] = useState<Itag[]>([])
    const[tag, setTag] = useState<Itag>()
    const[print, setPrint] = useState(false)
    
    
    useEffect(()=>{
       fetch('http://service.dvinahome.ru/?count=2000',
            {
                method: 'POST',
                headers: {'Authorization':'basic dXNlcjpwYXNz'}
            }
        ).then((res) => {
            return res.json()}).then(result => {
                setProduct(result['data'])
                setPrint(false)    
        })
    },[])

  function FindProduct<Itag>(product: any[], name: string) {
    const result = product.find((e: any[]) => {
        return e[0]===name})
    return {
        productId: result[1],
        productName: result[0],
        key: Date.now(),
        property:{
            size:result[4],
            type:result[2],
            model:result[3],
            categoryCloth:result[8],
            settings:[result[9], result[10], result[11], result[12],result[13], result[14], result[15], result[16], result[17]]
        },
        isSelect: false     
   }
  }  

  const handleClickProduct = (key:number) => {
    setPrint(false)
    
    settagItems(tagItems.map(item => {
        if (item.key != key) {
            if (item.isSelect) {
                return {
                    ...item,
                    isSelect:!item.isSelect
                }
            }
            return item
        }
        setTag(item)
        return {
            ...item,
            isSelect:!item.isSelect
        }
    }))
} 

  const handleAddProduct = (name:string) => {
    settagItems([...tagItems, FindProduct(product, name)])
  }

  const handleClickPrint = (value:boolean) => {
    setPrint(value)
  }


  return (
    <div className='container'>
        <div className='row'>
            <div className='col-12 my-3'>
                <Products product={product} addProduct={handleAddProduct}/>
            </div>
        </div>
        <div className="row">
            <div className="col-4 d-flex justify-content-start pt-2 mb-2" style={{border: '0.5px solid black'}}>
                <Tags items={tagItems} clickProd={handleClickProduct}/>
            </div>
            <div className="col-8 d-flex justify-content-start my-3">
                
            </div>
        </div>
        <div className="row" style={{marginBottom:'10px'}}>
            <div className="col px-0"> 
                <button onClick={()=>handleClickPrint(true)}>Печать</button>
            </div>
        </div>
        <div className="row" style={{display:'block', padding: '10px', marginBottom: '5px',border: '0.5px solid black'}}>
            <div className="col-12">
                <TagPrice tagPrice={tag} toPrint={print}/>       
            </div>
        </div>
    </div>
  )
}
