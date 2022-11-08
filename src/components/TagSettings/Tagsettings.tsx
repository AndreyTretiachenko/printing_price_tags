import React, { Context, createContext, useContext, useEffect, useRef, useState } from 'react'
import { DiscountContext, inputContex, ItemsContext } from '../../pages/price'
import {InputOldPrice} from '../InputPrice/inputOldPrice'
import { Itag } from '../Tags'

interface SettingProps {
  item?:Itag
}

export const TagSettings = (props: SettingProps) => {
  const { item } = props
  const [value, setValue] = useState<string>('')
  const context = useContext(DiscountContext)
  const {tagItems, settagItems} = useContext(ItemsContext)
  const [variant, setVariant] = useState<string>('1')
  const [valueCheck, setvalueCheck] = useState<boolean>()


  const handleChangeChecked = (e:React.ChangeEvent<HTMLInputElement>) => {
    setvalueCheck(e.target.checked)
    if (tagItems !== undefined)
    settagItems(tagItems.map(i => {
      if (i.id === item?.id)
        return {...i, cheked:e.target.checked}
      return i
    }))

  }

  const handleChangeVariant = (e:React.ChangeEvent<HTMLSelectElement>) => {
    setVariant(e.currentTarget.value)
    if (variant === '1')
      setvalueCheck(false)
  }

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
          <label htmlFor='discountInput'>Введите размер скидки:</label>  
          <input name='discountInput' type={'number'} placeholder={'укажите скидку в %'} value={value} onChange={handleChange}></input>
        </div>
        <div style={{display:'inline'}}>
          <label htmlFor='variantSelect'>Введите формат ценника:</label>  
          <select className='mb-2 mx-2' name='variantSelect' value={variant} onChange={handleChangeVariant}>
            <option value='1'>a4 горизонтальный</option>
            <option value='2'>подвесной</option>
          </select>
      </div>
      <div style={{display:'inline'}} className='mb-2 mx-2' hidden={variant === '1' ? true : false} defaultChecked={false}>
          <input name='multiTag' type={'checkbox'} checked={valueCheck} onChange={handleChangeChecked} />
          <label htmlFor="multiTag" style={{paddingLeft:10}}> добавить на лист</label>
      </div>
      </div>
      <div className='row' style={{padding:10}}>
        <div className='col'>
        <div className='row ' style={{padding:10}}>
                <div className='col-4'>Размер</div>
                <div className='col-4'>Старая цена</div>
                <div className='col-4'>Новая цена</div>
        </div>
        {item?.property?.allSize?.map((size, index) => {
            return ( 
              <> 
              <div className='row'>
              <div className='col-3' > 
                <div style={{'display':'inline-flex'}}>{size}</div>  
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
