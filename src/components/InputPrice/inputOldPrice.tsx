import React, { useContext, useEffect, useState } from 'react'
import { inputContex, useContextAndErrorIfNull } from '../TagSettings/Tagsettings'

interface inputProps  {
    name:string
    id:string
}


export const InputOldPrice = ({name}:inputProps) => {
    const [value, setValue] = useState<string>()
    const context = useContext(inputContex)

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {

      context?.[0].setState(context?.[0].state.map(val => {
        if (val.name === e.target.name)
          // Create a *new* object with changes
          return {...val, value: e.target.value}
        else 
          return val
          }))

      context?.[1].setState(context?.[1].state.map(val => {
        if (val.name === e.target.name)
          // Create a *new* object with changes
          return {...val, value: e.target.value}
        else 
          return val
          }))
      }
    
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value)
      handleInputChange(e)
    }  

    const inputText = () => {
      return (
        <input className='mb-1' key={name} onChange={handleChange} value={value} name={name}/>
      )  
    }

  return (
    <>
    {inputText()}
    </>
  )
}
