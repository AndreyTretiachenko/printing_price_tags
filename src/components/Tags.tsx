import React, { useEffect, useState } from 'react'


export interface Itag {
  productName:string,
  productId: string,
  discount?:number,
  key:number,
  isSelect: boolean
}

interface ItagProps {
  items:Itag[]
  clickProd:(nameItem: string)=>void
}

export default function Tags(props: ItagProps) {
  const {items, clickProd} = props
  const [tagsItem, settagItems] = useState<Itag[]>([])
  const [selectItem, selectItems] = useState<string>()
  const [bgColor, setbgColor] = useState('bg-light')

  useEffect(()=>{
    settagItems(items)
  })

  useEffect(()=>{
    if (selectItem) clickProd(selectItem)
  },[selectItem])

  return (
    <>
    <div className='w-100' 
    style={{position: 'relative', height:'67vh', overflowY: 'scroll'}}
    >
      {tagsItem.map((tag)=>(
        
        <div className={`mb-2 w-100 ${tag.isSelect ? 'bg-success text-white' : 'bg-light'}`} style={{border: '0.5px solid black', cursor: 'pointer'}} key={tag.productId}
        onMouseDown={()=>selectItems(tag.productName)}
        >
          <div className='mb-2 mx-2'>{tag.productName}</div>
          <select className='mb-2 mx-2'>
            <option>a4 горизонтальный</option>
            <option>подвесной</option>
          </select>
        </div>
      ))}
    </div>
    </>
  )
}
