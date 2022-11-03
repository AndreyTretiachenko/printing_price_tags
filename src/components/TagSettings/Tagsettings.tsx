import React, { Context, createContext, useContext, useEffect, useRef, useState } from 'react'
import {InputOldPrice} from '../InputPrice/inputOldPrice'
import { Itag } from '../Tags'


type TvalueInput = {
  name:string
  value:string
}

interface SettingProps {
  item?:Itag
}

interface IcontextInput {
  state:TvalueInput[]
  setState: React.Dispatch<React.SetStateAction<TvalueInput[]>>
}

export const inputContex = createContext({} as IcontextInput)

export const TagSettings = (props: SettingProps) => {
  const { item } = props
  const [valueInput, setValueInput] = useState<TvalueInput[]>([])

  const handleSubmit = (event:any) => {
      event.preventDefault()
      const data = new FormData(event.currentTarget)
      console.log(data)
  }

  useEffect(()=>{
    setValueInput([])
    item?.property?.allSize?.map((i,index)=>{
      setValueInput(Prev=> [...Prev, {name:`inputNew${index}`, value:''}])
    })
   },[item]) 


  return (
    
    <inputContex.Provider value={{state:valueInput, setState:setValueInput}}>
    <div className='container mb-2'>
    <form onSubmit={(event)=>handleSubmit(event)}>
      <div className='row'>
        <div className='col-12 mb-2'>
          {item?.productName}
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <span className='d-block mb-2'>Размеры:</span>
          {item?.property?.allSize?.map((size) => (
            <div className=''>
              <span className='d-block mb-1' style={{textAlign: 'center', height:30}}>{size}</span>
            </div>
          ))}
        </div>
        <div className='col'>
        <span className='d-block mb-2'>Старая цена:</span>
          {item?.property?.allSize?.map((size, index) => (
            <InputOldPrice id={index.toString()} name={`inputNew${index}`}/>
          ))}
        </div>
        <div className='col'>
        <span className='d-block mb-2'>Новая цена:</span>

        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <button type='submit' className='btn btn-primary' >сохранить</button>
        </div>
      </div>
      </form>
    </div>
    </inputContex.Provider>
    
  )
}

export const useContextAndErrorIfNull = (context: Context<IcontextInput>) => {
  const contextValue = useContext(context);
  if (contextValue === null) {
    throw Error("Context has not been Provided!");
  }
  return contextValue;
}
