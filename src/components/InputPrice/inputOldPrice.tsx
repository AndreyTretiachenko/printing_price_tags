import React, { useContext, useEffect, useRef, useState } from 'react'
import { updateDataValue } from '../../features/tags/tagsSlice'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'



interface inputProps  {
    name:string
    id:string
}


export const InputOldPrice = ({name}:inputProps) => {
 
      const [valueNew, setValueNew] = useState<string>()
      const [valueOld, setValueOld] = useState<string>()
      const {data, id} = useAppSelector((state) => state.selectTag)
      const {tagList} = useAppSelector((state) => state.tags) 
      const dispatch = useAppDispatch()
      const oldPef = useRef<HTMLInputElement>(null)


      const handleSetNew = (e:React.ChangeEvent<HTMLInputElement>) => {
        setValueNew(e.target.value)
        const newDataNew = data?.map((item:any, index) =>{
          if ('NewInput'+`${index}`+item?.name === e.target.name+item?.name) {
            console.log('NewInput'+`${index}`+ item?.name === e.target.name+item?.name)
            return {...item, valueNew: e.target.value}
          } 
          else {
            return item
          } 
        })
        dispatch(updateDataValue(tagList.map((item:any) => {
          if (id === item.id) 
            return {...item, data: newDataNew}
          return item
        })))
      }

      const handleSetOld = (y:React.ChangeEvent<HTMLInputElement>) => {
        setValueOld(y.target.value)
        const newDataOld = data?.map((item:any, index) =>{
          if ('OldInput'+`${index}`+item?.name === y.target.name+item?.name) {
            console.log('OldInput'+`${index}`+ item?.name === y.target.name+item?.name)
            return {...item, valueOld: y.target.value}
          } 
          else {
            return item
          }  
        })
        dispatch(updateDataValue(tagList.map((item:any) => {
          if (id === item.id) 
            return {...item, data: newDataOld}
          return item
        })))
      }

      return (
        <>
        <div style={{'display':'inline', 'paddingRight':80, paddingLeft:30}}>
          <input ref={oldPef} className='mb-1' onChange={(y)=> {handleSetOld(y)}} 
          value={valueOld} 
          name={`Old${name}`} 
          defaultValue='0'/>
        </div>
        <div style={{'display':'inline', 'paddingRight':40}}>
          <input className='mb-1' onChange={(e)=> { handleSetNew(e)}} value={valueNew} name={`New${name}`}/>
        </div>
        </>
      )  
    }

