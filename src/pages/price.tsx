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
    settagItems: React.Dispatch<React.SetStateAction<Itag[]>>
}
    

interface IprintContext {
    print:boolean |  undefined
    setPrint: React.Dispatch<boolean |  undefined>
}


interface IupdateContext {
    update:boolean |  undefined
    setUpdate: React.Dispatch<boolean>
}


export interface TvalueInput {
    name:string
    type:string
    valueNew:string
    valueOld:string
  }


interface IcontextInput {
    state:TvalueInput[],
    setState: React.Dispatch<React.SetStateAction<TvalueInput[]>>
  }

  interface IcontextDiscount {
    state?:string | undefined,
    setState?: React.Dispatch<React.SetStateAction<string>> | undefined
  }
  
  
export const inputContex = createContext<IcontextInput>({} as IcontextInput)
export const DiscountContext = createContext<IcontextDiscount>({})
export const ItemsContext = createContext<tagItemsContext>({} as tagItemsContext)
export const PrintContext = createContext<IprintContext>({} as IprintContext)
export const updateContext = createContext<IupdateContext>({} as IupdateContext)
export const GlobalContext = createContext<GlobalTypeContext>({
    tag:{} as Itag,
    setTag:() => {}
})


export default function Price() {

    const[product, setProduct] = useState([])
    const[productList, setProductList] = useState([])
    const[tagItems, settagItems] = useState<Itag[]>([])
    const[tag, setTag] = useState<Itag>({} as Itag)
    const[print, setPrint] = useState<boolean>(false)
    const[update, setUpdate] = useState(false)
    const[valueInput, setValueInput] = useState<TvalueInput[]>([])
    const[discount, setDiscount] = useState<string>('')
    const[tagType, setTagType] = useState<string>('noset')


    const handleChangeTagType = (e:React.ChangeEvent<HTMLSelectElement>) => {
        setTagType(e.target.value)
    }
    

    useEffect(()=>{
       fetch('http://service.dvinahome.ru/?count=2000',
            {
                method: 'POST',
                headers: {'Authorization':'basic dXNlcjpwYXNz'}
            }
        ).then((res) => {
            return res.json()}).then(result => {
                setProduct(result['data'])
                setProductList(Array.from(new Set(result['data'].map((prod:[]) => {
                    return prod.find((item, index) => {
                        if (index === 3) 
                            return item
                    })
                }))))
            setPrint(false)    
        })
    },[])

  function FindProduct(product: any[], name: string):Itag {
    const result = product.find((e: any[]) => {
        return e[3]===name})    
    const sizes: string[] = []
    product.flatMap((prod) => {
        if (prod[3] === result[3])
        sizes.push(prod[4].toString())
     })
    
    return {
        productId: result[1],
        productName: result[0],
        cheked:false,
        id:result[0],
        property:{
            size:result[4],
            allSize:Array.from(new Set(sizes)).slice(0,6),
            type:result[2],
            model:result[3],
            catigoryCloth:result[6],
            settings:[result[9], result[10], result[11], result[12],result[13], result[14], result[15], result[16], result[17]]
        },
        isSelect: false,
        data:[]     
    }
    }  

  const handleAddProduct = (name:string) => {
    const res = FindProduct(product, name)
    settagItems([...tagItems, res])

  }

  const handleClickPrint = (value:boolean) => {
    setPrint(value)
    setTimeout(()=>{setPrint(!value)}, 500)
  }

  useEffect(()=>{
    setPrint(false)
  },[tagItems])



  return (
    <DiscountContext.Provider value={{state:discount, setState:setDiscount}}>
    <GlobalContext.Provider value={{tag, setTag}}>
    <updateContext.Provider value={{update:update, setUpdate:setUpdate}}>    
    <inputContex.Provider value={{state:valueInput, setState:setValueInput}}>
    <ItemsContext.Provider value={{tagItems:tagItems, settagItems:settagItems}}>  
    <div className='container'>
        <div className='row'>
            <div className='col-12 my-3'>
                <Products 
                product={productList} 
                addProduct={handleAddProduct}/>
            </div>
        </div>
        <div className="row">
            <div className="col-4 d-block justify-content-start pt-2 mb-2" style={{border: '0.5px solid black'}}>
                    <Tags/>
            </div>
            <div className="col-8 d-flex justify-content-start pt-2 mb-2" style={{border: '0.5px solid black'}}>
                <TagSettings item={tag} key={tag?.property?.model}/>
            </div>
        </div>
        <div className="row" style={{marginBottom:'10px'}}>
        <div className="col-4 px-0"> 
                <label htmlFor='TagType'>Формат ценника:&nbsp;</label>
                <select onChange={handleChangeTagType} value={tagType} name={'TagType'}>
                    <option value={'noset'}>
                        не выбран
                    </option>
                    <option value={'a4h'}>
                        a4 горионтальный
                    </option>
                    <option value={'a4v'}>
                        a4 вертикальный
                    </option>
                    <option value={'podves'}>
                        подвесной
                    </option>
                </select>
            </div>
            <div className="col-2 px-0"> 
                <button onClick={()=>handleClickPrint(true)}>Печать</button>
            </div>
        </div>
        <div className="row" style={{display:'block', marginBottom: '30px',border: '0.5px solid black'}}>
            <div className="col-12">
                <PrintContext.Provider value={{print:print, setPrint:() => setPrint}}>
                <TagPrice tagType={tagType}/>     
                </PrintContext.Provider>  
            </div>
        </div>
    </div>
    </ItemsContext.Provider>
    </inputContex.Provider>
    </updateContext.Provider>
    </GlobalContext.Provider>
    </DiscountContext.Provider>
  )
}
