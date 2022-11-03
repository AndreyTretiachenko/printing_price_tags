import React, { useContext, useEffect, useState } from 'react'
import { inputContex, useContextAndErrorIfNull } from '../TagSettings/Tagsettings'

interface inputProps  {
    name:string
    id:string
    // handleChange:(e:any)=>void
}




export const InputOldPrice = ({ id, name}:inputProps) => {
    const [value, setValue] = useState<string>()

    const context = useContextAndErrorIfNull(inputContex)

  
    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.name, e.target.value)
      console.log(context)
      context?.setState(context?.state.map(val => {
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
        <input key={name} onChange={handleChange} value={value} name={name}/>
      )  
    }

    
  return (
    <>
    {inputText()}
    </>
  )
}
