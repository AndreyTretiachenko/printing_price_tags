import React, {useEffect, useRef, useState} from 'react'
import { useReactToPrint } from 'react-to-print'
import { useAppSelector } from '../hooks/hooks';
import { TagA4h } from './tagA4h';
import TagPodves from './tagPodves';

interface ItagPriceProps {
  tagType?:string

}
const TagPrice = (props:ItagPriceProps) => {



  const {tagType} = props
  const componentRef = useRef<HTMLDivElement>(null)
  const {tagList} = useAppSelector((state) => state.tags)
  const {printStatus} = useAppSelector((state) => state.print)
  const selectTag = useAppSelector((state) => state.selectTag)



  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  })

  useEffect(() => {
    if (printStatus)
      handlePrint()
},[printStatus])




  return (
  
    <div ref={componentRef}>
      <>
      {tagList.map((item:any) =>  {
        if (item.checked === true) 
          return (<TagA4h tag={item} key={item.id}/>)
      })
      }
      </>
      {tagType === 'a4v' && <div> формат ценника в разработке </div>}
      {tagType === 'podves' && <TagPodves tag={selectTag}/>}
      {tagType === 'noset' && <div> необходимо выбрать формат ценника </div>}
    </div>
    
  )
}

export default TagPrice
