import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../pages/price'



export interface Itag {
  productName:string,
  productId: string,
  discount?:number,
  property?:ItagProperty,
  key:number,
  isSelect: boolean
}

interface ItagProperty {
  size?: number,
  allSize?:any[],
  type?:string,
  model?:string,
  catigoryCloth?:string,
  settings?:string[]
}

interface ItagProps {
  items:Itag[]
  clickProd:(nameItem: number)=>void

}

export default function Tags(props: ItagProps) {
  const {items, clickProd} = props
  const [tagsItem, settagItems] = useState<Itag[]>([])
  const context = useContext(GlobalContext)
  

  const handlerOnClick = (value:number) => {
    console.log(context.tag)
    clickProd(value)
  }
  
  useEffect(()=>{
    settagItems(items)
  }, [items])

  return (
    <>
    <div className='w-100' style={{position: 'relative', height:'67vh', overflowY: 'scroll'}}>
     {tagsItem.map((t)=>(
      <div key={t.key} className={`row mb-2 mx-2 ${t.isSelect ? 'bg-info text-white' : 'bg-light'}`} style={{border: '0.5px solid black'}} >
        <div className='col' >
          <div style={{cursor: 'pointer'}}
            onClick={()=>handlerOnClick(t.key)}>{t.productName}
          </div>
        </div>
        
      <div className='row'>
        <div className='col'>
          <select className='mb-2 mx-2'>
            <option>a4 горизонтальный</option>
            <option>подвесной</option>
          </select>
        </div>
        </div>
        <div className='col'>
        
        </div>
      </div>
      ))}
    </div>
    </>
  )
}
