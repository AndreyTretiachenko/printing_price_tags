import React, { useEffect, useState } from 'react'
import { setCheckedSelectTag, setDiscountSelectTag } from '../../features/selectTag/selectTagSlice'

import { useAppDispatch} from '../../hooks/hooks'
import {InputOldPrice} from '../InputPrice/inputOldPrice'
import { Itag } from '../Tags'


interface SettingProps {
  item:Itag
}

export const TagSettings = (props: SettingProps) => {
  const { item } = props
  const [variant, setVariant] = useState('')

  const dispatch = useAppDispatch()

  const handleChangeChecked = (e:React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setCheckedSelectTag(e.target.checked))
  }

  const handleChangeDiscount = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setDiscountSelectTag(e.target.value))
  }


  return (
    <>
    <div className='container mb-2'>
      <div className='row'>
        <div className='col-6 mb-2'>
          {item?.productName}
        </div>
        <div className='col-6 mb-2'>
          <label htmlFor='discountInput'>Введите размер скидки:</label>  
          <input name='discountInput' type={'number'} placeholder={'укажите скидку в %'} value={item?.discount ? item?.discount: ''} onChange={handleChangeDiscount}></input>
        </div>
      <div style={{display:'inline'}} className='mb-2 mx-2' defaultChecked={false}>
          <input  defaultChecked={item?.checked} name='multiTag' type={'checkbox'} onChange={handleChangeChecked} />
          <label htmlFor="multiTag" style={{paddingLeft:10}} > добавить на лист</label>
      </div>
      </div>
      <div className='row'>
        <div className='col'>
          <div>
            <input type={'radio'} value='size' name='variant' id='sizeRadio' 
            onChange={() => setVariant('size')}
            />
            <label htmlFor='sizeRadio'>по размерам</label>
            <input type='radio' value='fix' name='variant' id='fixRadio' 
            onChange={() => setVariant('fix')}
            />
            <label htmlFor='fixRadio'>цена выставочного образца</label>
            <input type='radio' value='at' name='variant' id='atRadio' 
            onChange={() => setVariant('at')}
            />
            <label htmlFor='atRadio'>цена ОТ</label>
          </div>
        </div>
      </div>
      <div className='row' hidden={variant !== 'size' ? true : false}style={{padding:10}}>
        <div className='col'>
        <div className='row '  style={{padding:10}}>
                <div className='col-4'>Размер</div>
                <div className='col-4'>Старая цена</div>
                <div className='col-4'>Новая цена</div>
        </div>
        {item?.property?.allSize?.map((size, index) => {
            return ( 
              <> 
              <div className='row' key={size}>
                <div className='col-3' > 
                  <div style={{'display':'inline-flex'}}>{size}</div>  
                </div>
              <div className='col-9'>
                <div style={{'display':'inline-flex'}}><InputOldPrice 
                  defvalue={item.data != undefined ? item?.data[index]: {name:'', valueNew:'', valueOld:''}}
                  key={`Old${size}`} id={index.toString()} name={`Input${index}`} /></div>
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

