import React, { useRef, useState } from 'react'
import { Itag } from '../Tags'


interface SettingProps {
  item?:Itag
}

export const TagSettings = (props: SettingProps) => {
  const { item } = props

  return (
    <>
    <div className='container'>
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
          {item?.property?.allSize?.map((size) => (
            <div className='mb-1'>
              <input type={'text'} />
            </div>
          ))}
        </div>
        <div className='col'>
        <span className='d-block mb-2'>Новая цена:</span>
          {item?.property?.allSize?.map((size, index) => (
            <div className='mb-1'>
              <input type={'text'} />
            </div>
          ))}
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <button className='btn btn-primary' >сохранить</button>
        </div>
      </div>
    </div>
    </>
  
  )
}
