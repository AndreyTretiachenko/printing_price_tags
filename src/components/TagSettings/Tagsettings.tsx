import React, { useEffect, useState } from 'react'
import { setCheckedSelectTag, setDiscountSelectTag, setFixNewPriceSelectTag, setFixOldPriceSelectTag } from '../../features/selectTag/selectTagSlice'
import { updateDataValue } from '../../features/tags/tagsSlice'
import { useAppDispatch, useAppSelector} from '../../hooks/hooks'
import {InputOldPrice} from '../InputPrice/inputOldPrice'
import { Itag } from '../Tags'


interface SettingProps {
  item:Itag
}

export const TagSettings = (props: SettingProps) => {
  const { item } = props
  const [variant, setVariant] = useState('size')
  const {fixNewPrice,fixOldPrice} = useAppSelector((state) => state.selectTag)
  const {tagList} = useAppSelector((state) => state.tags) 

  const dispatch = useAppDispatch()

  const handleChangeChecked = (e:React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setCheckedSelectTag(e.target.checked))
  }

  const handleChangeDiscount = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setDiscountSelectTag(e.target.value))
  }

  useEffect(()=>{
    dispatch(updateDataValue([...tagList].map((i:any) => {
      if (item.id === i.id) 
        return {
          ...i, 
          fixNewPrice: fixNewPrice,
          fixOldPrice: fixOldPrice
        } 
      return i
    }
    )
  ))

  },[fixNewPrice,fixOldPrice])


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
      <div style={{display:'inline', marginBottom:20}}  defaultChecked={false}>
          <input  defaultChecked={item?.checked} name='multiTag' type={'checkbox'} onChange={handleChangeChecked} />
          <label htmlFor="multiTag" style={{paddingLeft:5}} > добавить на лист</label>
      </div>
      </div>
      <div className='row'>
        <div className='col'>
          <div style={{display:'inline'}}>
            <div style={{display:'inherit', paddingRight:30}}>
            <input defaultChecked type={'radio'} value='size' name='variant' id='sizeRadio' 
            onChange={() => setVariant('size')}
            />
            <label htmlFor='sizeRadio' style={{paddingLeft:5}}>по размерам</label>
            </div>
            <div style={{display:'inherit', paddingRight:30}}>
            <input type='radio' value='fix' name='variant' id='fixRadio' 
            onChange={() => setVariant('fix')}
            />
            <label htmlFor='fixRadio' style={{paddingLeft:5}}>цена выставочного образца</label>
            </div>
            <div style={{display:'inherit'}}>
            <input disabled type='radio' value='at' name='variant' id='atRadio' 
            onChange={() => setVariant('at')}
            />
            <label htmlFor='atRadio' style={{paddingLeft:5}}>цена ОТ</label>
            </div>
          </div>
        </div>
      </div>
      {variant === 'size' && 
      <div className='row' style={{paddingTop:10}}>
        
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
                <div style={{'display':'inline-flex'}}>
                  <InputOldPrice 
                  defvalue={item.data != undefined ? item?.data[index]: {name:'', valueNew:'', valueOld:''}}
                  key={`Old${size}`} id={index.toString()} name={`Input${index}`} /></div>
                </div> 
              </div>
              </>
            )
        })}
        </div>
      </div>
      }
      {variant === 'fix' &&
      <div className='row' style={{paddingTop:10}}>
        <div className='col'>
          <label htmlFor='oldFixPrice'>старая цена выставочного образца</label>
          <input name={'oldFixPrice'} onChange={(e) => dispatch(setFixOldPriceSelectTag(e.target.value))} />
        </div>
        <div className='col'>
          <label htmlFor='NewFixPrice'>новая цена выставочного образца</label>
          <input name={'NewFixPrice'} onChange={(e) => dispatch(setFixNewPriceSelectTag(e.target.value))} />
          
        </div>
      </div>
       }
      {variant === 'at' &&
      <div className='row' style={{paddingTop:10}}>
        <div className='col'>
          <label htmlFor='oldAtPrice'>старая цена ОТ</label>
          <input name={'oldAtPrice'}  />
        </div>
        <div className='col'>
          <label htmlFor='NewAtPrice'>новая цена ОТ</label>
          <input name={'NewAtPrice'}  />
        </div>
      </div>
      }
    </div>
    </>
  )
}

