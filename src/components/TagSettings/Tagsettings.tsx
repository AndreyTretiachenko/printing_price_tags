import React, { Context, createContext, useContext, useEffect, useRef, useState } from 'react'
import { updateContext } from '../../pages/price'
import {InputOldPrice} from '../InputPrice/inputOldPrice'
import { Itag } from '../Tags'


interface SettingProps {
  item?:Itag
}


export const TagSettings = (props: SettingProps) => {
  const { item } = props

  return (
    <>

    <div className='container mb-2'>
      <div className='row'>
        <div className='col-6 mb-2'>
          {item?.productName}
        </div>
        <div className='col-6 mb-2'>
          <span>Введите размер скидки: </span>
          <input type={'number'} placeholder={'укажите скидку в %'}></input>
        </div>

      </div>
      <div className='row'>
        <div className='col'>
          <span className='d-block mb-2'>Размеры:</span>
          
          {item?.property?.allSize?.flatMap((s, index) => (
            <div key={`current${s}${Date.now()}`} className='d-block mb-1' style={{textAlign: 'center', height:30}}>
              {s}
            </div>
          ))}
        </div>
        <div className='col'>
        <span className='d-block mb-2'>Старая цена:</span>
          {item?.property?.allSize?.map((size, index) => (
            <InputOldPrice key={`New${size}`} id={index.toString()} name={`inputNew${index}`}/>
          ))}
        </div>
        <div className='col'>
        <span className='d-block mb-2'>Новая цена:</span>
        {item?.property?.allSize?.map((size, index) => (
            <InputOldPrice key={`Old${size}`} id={index.toString()} name={`inputOld${index}`}/>
          ))}
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <button type='button' className='btn btn-primary'>Применить</button>
        </div>
      </div>
    </div>

    </>
  )
}

// export const useContextAndErrorIfNull = (context: Context<IcontextInput>) => {
//   const contextValue = useContext(context);
//   if (contextValue === null) {
//     throw Error("Context has not been Provided!");
//   }
//   return contextValue;
// }
