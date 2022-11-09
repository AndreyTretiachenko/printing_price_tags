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
  const [valueCheck, setvalueCheck] = useState<boolean>()
  const contextInput = useContext(inputContex)

  const handlerAddDataTag = () => {
    settagItems(prev => prev.map(i => {
      if (i === item)
        return {...i, cheked:valueCheck, data:[...contextInput.state]}
      return i
    }))
  }


  const handleChangeChecked = (e:React.ChangeEvent<HTMLInputElement>) => {
    setvalueCheck(e.target.checked)
  }

  const handleChangeDiscount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  useEffect(()=>{
    if (context.setState != undefined)
      context.setState(value)
  }, [value])

  useEffect(()=>{
    if (item?.data?.length === 0) {
      if (contextInput?.setState) {
        contextInput?.setState([])
        item?.property?.allSize?.map((i,index)=>{
          contextInput.setState(prev => [...prev, {name:`inputOld${index}`, valueNew:'', valueOld:'', type:i}])
      })}
    }
    else {
      if (item?.data != undefined)
      contextInput.setState(item?.data)
    }  
  },[])

  return (
    <>
    <div className='container mb-2'>
      <div className='row'>
        <div className='col-6 mb-2'>
          {item?.productName}
        </div>
        <div className='col-6 mb-2'>
          <label htmlFor='discountInput'>Введите размер скидки:</label>  
          <input name='discountInput' type={'number'} placeholder={'укажите скидку в %'} value={value} onChange={handleChangeDiscount}></input>
        </div>
      <div style={{display:'inline'}} className='mb-2 mx-2' defaultChecked={false}>
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
      <div className='row'>
        <div className='col'>
          <button className='btn btn-primary' onClick={handlerAddDataTag}>применить</button>
        </div>
      </div>
    </div>
    </>
  )
}

