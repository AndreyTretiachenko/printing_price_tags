import React, { Context, createContext, useContext, useEffect, useState } from "react"
import Products from "../components/Products"
import TagPrice from "../components/TagPrice"
import Tags, { Itag } from "../components/Tags"
import { TagSettings } from "../components/TagSettings/Tagsettings"

interface GlobalTypeContext {
    tag:Itag
    setTag:React.Dispatch<Itag>
}

interface tagItemsContext {
    tagItems: Itag[]
    settagItems: React.Dispatch<Itag[]>
}
    

export const GlobalContext = createContext<GlobalTypeContext>({
    tag:{} as Itag,
    setTag:() => {}
})


export const ItemsContext = createContext<tagItemsContext>({
    tagItems:{} as Itag[],
    settagItems:()=>{}

})


export default function Price() {

    const[product, setProduct] = useState([])
    const[tagItems, settagItems] = useState<Itag[]>([])
    const[tag, setTag] = useState<Itag>({} as Itag)
    const[print, setPrint] = useState<boolean>()
    
    
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

  function FindProduct(product: any[], name: string):Itag {
    const result = product.find((e: any[]) => {
        return e[0]===name})    
    const sizes:any[] = []
    product.map((prod)=>{
        if (prod[3] === result[3])
        sizes.push(prod[4])
     })

    return {
        productId: result[1],
        productName: result[0],
        id:result[0],
        property:{
            size:result[4],
            allSize:sizes,
            type:result[2],
            model:result[3],
            catigoryCloth:result[6],
            settings:[result[9], result[10], result[11], result[12],result[13], result[14], result[15], result[16], result[17]]
        },
        isSelect: false     
    }
    }  

  const handleClickProduct = (key:number) => {
    setPrint(false)
} 

  const handleAddProduct = (name:string) => {
    const res = FindProduct(product, name)
    setTag(res)
    settagItems([...tagItems, res])
  }

  const handleClickPrint = (value:boolean) => {
    setPrint(value)
  }


  return (
    <GlobalContext.Provider value={{tag, setTag}}>
    <div className='container'>
        <div className='row'>
            <div className='col-12 my-3'>
                <Products product={product} addProduct={handleAddProduct}/>
            </div>
        </div>
        <div className="row">
            <div className="col-4 d-flex justify-content-start pt-2 mb-2" style={{border: '0.5px solid black'}}>
                <ItemsContext.Provider value={{tagItems:tagItems, settagItems:settagItems}}>
                    <Tags items={tagItems}/>
                </ItemsContext.Provider>
            </div>
            <div className="col-8 d-flex justify-content-start pt-2 mb-2" style={{border: '0.5px solid black'}}>
                <TagSettings item={tag} key={tag?.property?.model}/>
            </div>
        </div>
        <div className="row" style={{marginBottom:'10px'}}>
            <div className="col px-0"> 
                <button onClick={()=>handleClickPrint(true)}>Печать</button>
            </div>
        </div>
        <div className="row" style={{display:'block', padding: '10px', marginBottom: '5px',border: '0.5px solid black'}}>
            <div className="col-12">
                <TagPrice toPrint={print}/>       
            </div>
        </div>
    </div>
    </GlobalContext.Provider>
  )
}
