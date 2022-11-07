import React, { useContext, useEffect, useState } from 'react'
import { inputContex } from '../../pages/price'


interface inputProps  {
    name:string
    id:string
}


export const InputOldPrice = ({name}:inputProps) => {

    const context = useContext(inputContex)

    const handleInputChangeOld = (e:React.ChangeEvent<HTMLInputElement>) => {
      if (context?.setState != undefined && context?.state != undefined)
        context?.setState(context.state?.map(val => {
          if (val.name === e.target.name)
            // Create a *new* object with changes
            return {...val, value: e.target.value}
          else 
            return val
            }))

      }

      const handleInputChangeNew = (e:React.ChangeEvent<HTMLInputElement>) => {
        if (context?.setState != undefined && context?.state != undefined)
          context?.setState(context.state?.map(val => {
            if (val.name === e.target.name)
              // Create a *new* object with changes
              return {...val, value: e.target.value}
            else 
              return val
              }))
  
        }
    
    const handleChangeOld = (e:React.ChangeEvent<HTMLInputElement>) => {
      handleInputChangeOld(e)
  
    }  

    const handleChangeNew = (y:React.ChangeEvent<HTMLInputElement>) => {
      handleInputChangeNew(y)
  
    }  

    const InputText = () => {

      const [valueNew, setValueNew] = useState<string>()
      const [valueOld, setValueOld] = useState<string>()

      const handleSetNew = (e:React.ChangeEvent<HTMLInputElement>) => {
        setValueNew(e.target.value)
      }

      const handleSetOld = (y:React.ChangeEvent<HTMLInputElement>) => {
        setValueOld(y.target.value)
      }

      return (
        <>
        <input className='mb-1' onChange={(e)=> {handleChangeNew(e); handleSetNew(e)}} value={valueNew} name={`New${name}`} defaultValue='0'/>
        <input className='mb-1' onChange={(y)=> {handleChangeOld(y); handleSetOld(y)}} value={valueOld} name={`Old${name}`} defaultValue='0'/>
        </>
      )  
    }

  return (
    <>
    {InputText()}
    </>
  )
}
