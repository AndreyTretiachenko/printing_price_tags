import React, { useContext, useEffect, useRef, useState } from 'react'
import { setSelectTag, updateDataSelectTag } from '../../features/selectTag/selectTagSlice'
import { updateDataValue } from '../../features/tags/tagsSlice'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { Itag } from '../Tags'



interface inputProps  {
    name:string
    id:string
}


export const InputOldPrice = ({name}:inputProps) => {
 
      const [valueNew, setValueNew] = useState<string>()
      const [valueOld, setValueOld] = useState<string>()
      const {data, id, cheked, discount} = useAppSelector((state) => state.selectTag)
      const {tagList} = useAppSelector((state) => state.tags) 
      const dispatch = useAppDispatch()


      const handleSetNew = (e:React.ChangeEvent<HTMLInputElement>) => {
        setValueNew(e.target.value)
        dispatch(updateDataSelectTag([...data].map((item:any, index) =>{
          if ('NewInput'+`${index}`+item?.name === e.target.name+item?.name) {
            return {...item, valueNew: e.target.value}
          } 
          else {
            return item
          }  
    })))
      }

      const handleSetOld = (y:React.ChangeEvent<HTMLInputElement>) => {
        setValueOld(y.target.value)
        
        dispatch(updateDataSelectTag([...data].map((item:any, index) =>{
              if ('OldInput'+`${index}`+item?.name === y.target.name+item?.name) {
                return {...item, valueOld: y.target.value}
              } 
              else {
                return item
              }  
        })))
      }

      useEffect(() => {

        dispatch(updateDataValue([...tagList].map((item:any) => {
          if (id === item.id) 
            return {
              ...item, 
              data: data,
              cheked: cheked,
              discount: discount
            } 
          return item
        })))

      }, [data, cheked, discount])

      return (
        <>
        <div style={{'display':'inline', 'paddingRight':80, paddingLeft:30}}>
          <input className='mb-1' onChange={(y)=> {handleSetOld(y)}} 
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

