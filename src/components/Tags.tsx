import React, { useContext, useEffect, useRef, useState } from 'react'
import { GlobalContext, ItemsContext, PrintContext } from '../pages/price'



export interface Itag {
  productName:string,
  productId: string,
  discount?:number,
  id:string,
  property?:ItagProperty,
  isSelect?: boolean
}

interface ItagProperty {
  size?: number,
  allSize?:any[],
  type?:string,
  model?:string,
  catigoryCloth?:string,
  settings?:string[]
}


export default function Tags() {
  const {setTag} = useContext(GlobalContext)
  const {tagItems, settagItems} = useContext(ItemsContext)
  const {setPrint} = useContext(PrintContext)
  


  const handlerOnClick = (e:any) => {
    settagItems(prev => (
      [...prev].map((item)=>{
        if (item.id === e.target.id) {
          if (!item.isSelect) {
            return {...item, isSelect:!item.isSelect}
          }
          else {
            return {...item, isSelect:!item.isSelect}
          }
        }
        else {
          if (!item.isSelect) {
            return item
          }
          else {
            return {...item, isSelect:!item.isSelect}
          }
        }
  }))) 
  }

  useEffect(()=>{
    
    const select = tagItems.find(item => {
      if (item.isSelect) 
        return item
    })
    if (select?.isSelect){
      setTag(select)
    }
    else {
      setTag({productId:'', productName: '',  id:''})
    }
    
  }, [tagItems])

  return (
    <>
    <div className='w-100' style={{position: 'relative', height:'67vh', overflowY: 'scroll'}}>
     {tagItems.map((t)=>(
      <div key={t.id} className={`row mb-2 mx-2 ${t.isSelect ? 'bg-info text-white' : 'bg-light'}`} style={{border: '0.5px solid black'}} >
        <div className='col' >
          <div style={{cursor: 'pointer'}} id={t.id} 
          onClick={handlerOnClick}
            >{t.productName}
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
