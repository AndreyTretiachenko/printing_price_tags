import React, { useContext } from 'react'
import { Itag } from './Tags'

interface IpropsTagPodves {
  tag:Itag
}

export default function TagPodves({tag}:IpropsTagPodves) {
  
    
  return (
    <>
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div>{tag.property?.type}</div>
            <div>{tag.property?.model}</div>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <div>{tag?.property?.settings?.map((item) => { return <div>{item}</div>})}</div>
            <div>logo</div>
          </div>
          <div className='col'>
            <div>{tag.discount}</div>
            <div>старая цена</div>
            <div>новая цена</div>
            <div>дата</div>
            <div>рассрочка</div>  
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
