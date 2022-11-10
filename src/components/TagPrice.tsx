import React, {useEffect, useRef, useState} from 'react'
import { useContext } from 'react';
import { useReactToPrint } from 'react-to-print'
import { useAppSelector } from '../hooks/hooks';
import { TagA4h } from './tagA4h';
import TagPodves from './tagPodves';

interface ItagPriceProps {
  toPrint?:()=>void,
  tagType?:string

}
const TagPrice = (props:ItagPriceProps) => {



  const {tagType} = props
  const componentRef = useRef<HTMLDivElement>(null)
  const {tagList} = useAppSelector((state) => state.tags)

  const getSelectTag:any = () => {
    if (tagList) {
        const selectTag = tagList.find((item:any)=> item.isSelect)
        return selectTag
    }
  }


  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  })




  return (
  
    <div ref={componentRef}>
      {tagType === 'a4h' && <TagA4h tag={getSelectTag()}/>}
      {tagType === 'a4v' && <div> формат ценника в разработке </div>}
      {tagType === 'podves' && <TagPodves />}
      {tagType === 'noset' && <div> необходимо выбрать формат ценника </div>}
    </div>
    
  )
}

export default TagPrice
