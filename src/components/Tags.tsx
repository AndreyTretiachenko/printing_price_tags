import React, { useEffect, useState } from 'react'

interface Itag {
  productName:string,
  productId: string,
  isSelect: boolean
}

interface ItagProps {
  items:Itag[]
}

export default function Tags(props: ItagProps) {
  const {items} = props
  const [tagsItem, settagItems] = useState<Itag[]>([...items,{
    isSelect:false, 
    productId:'2', 
    productName:'321'}])

  useEffect(()=>{

  })

  return (
    <div>
      {tagsItem.map((tag)=>(<p>{tag.productName}</p>))}
    </div>
  )
}
