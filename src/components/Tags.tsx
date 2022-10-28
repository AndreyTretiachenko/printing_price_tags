import React, { useEffect, useState } from 'react'


export interface Itag {
  productName:string,
  productId: string,
  isSelect: boolean
}

interface ItagProps {
  items:Itag[]
  clickProd:(nameItem: string)=>void;
}

export default function Tags(props: ItagProps) {
  const {items, clickProd} = props
  const [tagsItem, settagItems] = useState<Itag[]>([])
  const [selectItem, selectItems] = useState('')

  useEffect(()=>{
    settagItems(items)
  })

  useEffect(()=>{
    clickProd(selectItem)
  },[selectItem])

  return (
    <div className='w-100' style={{position: 'relative', height:'60vh', overflowY: 'scroll'}}>
      {tagsItem.map((tag)=>(
        <div className='mb-2 w-100' style={{border: '0.5px solid black'}} key={tag.productId}
        onClick={()=>selectItems(tag.productName)}
        >
        <div className='mb-2 mx-2'>{tag.productName}</div>
        <select className='mb-2 mx-2'>
          <option>a4 горизонтальный</option>
          <option>подвесной</option>
        </select>
        </div>
      ))}
    </div>
  )
}
