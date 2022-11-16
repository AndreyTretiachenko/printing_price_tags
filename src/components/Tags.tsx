import React, { useState } from 'react'
import { setSelectTag, updateDataSelectTag } from '../features/selectTag/selectTagSlice'
import { deleteTag, selectTag } from '../features/tags/tagsSlice'

import { useAppDispatch, useAppSelector } from '../hooks/hooks'


export interface Itag {
  productName:string,
  productId: string,
  discount?:string,
  checked?:boolean,
  id:string,
  property?:ItagProperty,
  isSelect?: boolean,
  data?:TvalueInput[],
  fixOldPrice?:string,
  fixNewPrice?:string
}

export interface TvalueInput {
  name:string
  type:string
  valueNew:string
  valueOld:string
}


interface ItagProperty {
  size?: string,
  allSize?:any[],
  type?:string,
  model?:string,
  catigoryCloth?:string,
  settings?:string[]
}


export default function Tags() {

  const {tagList} = useAppSelector((state) => state.tags)
  const [colorOverTag, setColorOverTag] = useState('#F8F9FA')
  const dispatch = useAppDispatch()

  const handleOverTag = (e: React.MouseEvent<HTMLDivElement>) => {
    setColorOverTag('white')
  }

  const handleLeaveTag = () => {
    setColorOverTag('#F8F9FA')
  }


  const handleSelectTag = (id:string) => {
    dispatch(selectTag(id))
    dispatch(setSelectTag(tagList.find((item:any)=> id === item.id)))
  }


  const handleDeleteDivTag = (e:string) => {
    dispatch(deleteTag(e))
    dispatch(setSelectTag({}))
  }
  
  return (
    <>
    <div className='w-100' style={{position: 'relative', height:'67vh', overflowY: 'scroll', display:'block'}}>
     {tagList?.map((t:any)=>(
      <div key={t.id} className={`row mb-2 mx-2 ${t.isSelect ? 'bg-info text-white' : 'bg-light'}`} style={{ border: '0.5px solid black'}} >
        <div className='col' style={{display:'inline'}}>
          <div 
          style={{cursor: 'pointer'}}
          onMouseOver = {(e) => handleOverTag(e)}
          onMouseLeave = {(e) => handleLeaveTag}
          onClick={()=>handleSelectTag(t.id)}
            >{t?.productName}
          </div>
        </div>
      <div className='row'>
        <div className='col'>

          <div style={{display:'inline-flex', cursor:'pointer'}}>
          <button className='btn bi bi-x-circle' onClick={()=>handleDeleteDivTag(t.id)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
          </svg>
          </button>
          </div>
        </div>
        <div className='col' style={{position:'relative'}}>
          {t.checked && (
          <>
          <div className={t.isSelect ? 'text-white' : 'text-success' } style={{fontSize:'10pt', position:'absolute', bottom:0}}>добавлен на лист</div>
          </>)}
        </div>
        </div>
      </div>
      ))}
    </div>
    </>
  )
}
