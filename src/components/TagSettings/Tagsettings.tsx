import React, { useEffect, useRef, useState } from 'react'
import InputOldPrice from '../InputPrice/inputOldPrice'
import { Itag } from '../Tags'


type TvalueInput = {
  name:string
  value:string
}

interface SettingProps {
  item?:Itag
}

export const TagSettings = (props: SettingProps) => {
  const { item } = props
  const [valueInput, setValueInput] = useState<TvalueInput[]>([])

  const handleSubmit = (event:any) => {
      event.preventDefault()
      const data = new FormData(event.currentTarget)
      console.log(data)
  }
  
  function findValueInput(name:string, value:string):any {
    if (valueInput.length===0)
      return [{status:false}]
    const result = valueInput.map((input)=> {
      if (input.name === name)
        return {status:true, item:input}
      else  
        return {status:false, item:{name:name, value:value}}
    })

    return result
  }

  const handleInputChange = (e:any) => {
    
    setValueInput(valueInput.map(val => {
      if (val.name === e.target.name)
        // Create a *new* object with changes
        return {...val, value: e.target.value}
      else 
        return val
        }))
    
    }


   useEffect(()=>{
    setValueInput([])
    item?.property?.allSize?.map((i,index)=>{
      setValueInput(Prev=> [...Prev, {name:`inputNew${index}`, value:''}])
    })
   },[item]) 


  return (
    <>
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
            <InputOldPrice id={index.toString()} handleChange={handleInputChange} name={`inputNew${index}`}/>
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
    </>
  )
}
