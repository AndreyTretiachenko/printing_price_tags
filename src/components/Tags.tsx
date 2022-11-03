import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext, ItemsContext } from '../pages/price'



export interface Itag {
  productName:string,
  productId: string,
  discount?:number,
  id:string,
  property?:ItagProperty,
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
  clickProd?:(nameItem: number)=>void

}

export default function Tags(props: ItagProps) {
  const {items, clickProd} = props
  const {tag, setTag} = useContext(GlobalContext)
  const {tagItems, settagItems} = useContext(ItemsContext)
  

  const handlerOnClick = (e:React.MouseEvent) => {
    settagItems(tagItems.map(item => {
      if (item.id === e.currentTarget.id) {
        return {...item,isSelect:!item.isSelect}
      }else{
        return {...item, isSelect:false}
      }
    }))
    console.log(e.currentTarget.id)
    console.log(tag)
    console.log(tagItems)
  }

  return (
    <>
    <div className='w-100' style={{position: 'relative', height:'67vh', overflowY: 'scroll'}}>
     {tagItems.map((t)=>(
      <div id={t.id} className={`row mb-2 mx-2 ${t.isSelect ? 'bg-info text-white' : 'bg-light'}`} style={{border: '0.5px solid black'}} >
        <div className='col' >
          <div style={{cursor: 'pointer'}} id={t.id} 
            >{t.productName}
          </div>
          <button id={t.id} onClick={handlerOnClick}>select</button>
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
