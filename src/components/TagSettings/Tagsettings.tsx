import React, { Context, createContext, useContext, useEffect, useRef, useState } from 'react'
import { DiscountContext } from '../../pages/price'
import {InputOldPrice} from '../InputPrice/inputOldPrice'
import { Itag } from '../Tags'


interface SettingProps {
  item?:Itag
}


export const TagSettings = (props: SettingProps) => {
  const { item } = props
  const [value, setValue] = useState<string>('')
  const context = useContext(DiscountContext)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  useEffect(()=>{
    if (context.setState != undefined)
      context.setState(value)
  }, [value])

  return (
    <>

    <div className='container mb-2'>
      <div className='row'>
        <div className='col-6 mb-2'>
          {item?.productName}
        </div>
        <div className='col-6 mb-2'>
          <span>Введите размер скидки: </span>
          <input type={'number'} placeholder={'укажите скидку в %'} value={value} onChange={handleChange}></input>
        </div>

      </div>
      <div className='row'>
        <div className='col'>
        
        {item?.property?.allSize?.map((size, index) => {
            return ( 
              <> 
              <div className='row'>
              <div className='col-3'> 
                <div style={{'display':'inline'}}>{size}</div>  
              </div>
              <div className='col-9'>
              <div style={{'display':'inline-flex'}}><InputOldPrice key={`Old${size}`} id={index.toString()} name={`inputOld${index}`}/></div>
              </div> 
              </div>
              </>
            )
        })}
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
