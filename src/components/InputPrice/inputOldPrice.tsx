import React, { useState } from 'react'

interface inputProps  {
    name:string
    id:string
    handleChange:(e:any)=>void
}


export default function InputOldPrice({ id, handleChange, name}:inputProps) {
    const [value, setValue] = useState<string>()

  return (
    <>
    <div className='mb-1'>
        <input 
            type="text" 
            key={Date.now()}
            value={value}
            name={name}
            onChange={(e)=>{handleChange(e); setValue(e.target.value)}} 
            id={id}/>
    </div>
    </>
  )
}
