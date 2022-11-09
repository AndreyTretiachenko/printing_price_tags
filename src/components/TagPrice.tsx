import React, {useEffect, useRef, useState} from 'react'
import { useContext } from 'react';
import { useReactToPrint } from 'react-to-print'
import {  GlobalContext, PrintContext } from '../pages/price';
import { TagA4h } from './tagA4h';
import TagPodves from './tagPodves';

interface ItagPriceProps {
  toPrint?:()=>void,
  tagType?:string

}
const TagPrice = (props:ItagPriceProps) => {


  const tag = useContext(GlobalContext)
  const {print} = useContext(PrintContext)
  const {tagType} = props
  const componentRef = useRef<HTMLDivElement>(null)


  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  })


  useEffect(()=>{
    
    if (print) 
      handlePrint()
  }, [print])


  return (
  
    <div ref={componentRef}>
      {tagType === 'a4h' && <TagA4h tag={tag.tag}/>}
      {tagType === 'a4v' && <div> формат ценника в разработке </div>}
      {tagType === 'podves' && <TagPodves />}
      {tagType === 'noset' && <div> необходимо выбрать формат ценника </div>}
    </div>
    
  )
}

export default TagPrice
