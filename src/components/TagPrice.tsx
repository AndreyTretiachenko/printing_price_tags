import React, {useEffect, useRef, useState} from 'react'
import { useReactToPrint } from 'react-to-print'
import Tags, { Itag } from './Tags'

interface ItagPriceProps {
  tagPrice?: Itag;
  toPrint?:boolean

}

const TagPrice = (props:ItagPriceProps) => {
 
  const {tagPrice, toPrint} = props
  const dateTag = new Date()
  const componentRef = useRef<HTMLDivElement>(null)
  
  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  })

  useEffect(()=>{
    if (toPrint)
      handlePrint()
  },[toPrint])

  return (
    <>
    <div ref={componentRef}>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className="parent">
              <div className="div1" style={{fontSize:'13pt', margin:'0.8rem'}}>
                <div className='d-flex justify-content-center align-items-center'
                style={{marginBottom: '15px', height:'10%', textAlign:'center', backgroundColor:'lightgray'}}>{tagPrice?.property?.settings?.[1]}</div>
                <div className='d-flex justify-content-center align-items-center'
                style={{marginBottom: '15px', height:'10%', textAlign:'center', backgroundColor:'lightgray'}}>{tagPrice?.property?.settings?.[2]}</div>
                <div className='d-flex justify-content-center align-items-center'
                style={{marginBottom: '15px', height:'10%', textAlign:'center', backgroundColor:'lightgray'}}>{tagPrice?.property?.settings?.[3]}</div>
                <div className='d-flex justify-content-center align-items-center'
                style={{marginBottom: '15px', height:'10%', textAlign:'center', backgroundColor:'lightgray'}}>{tagPrice?.property?.settings?.[4]}</div>
                <div className='d-flex justify-content-center align-items-center'
                style={{marginBottom: '15px', height:'10%', textAlign:'center', backgroundColor:'lightgray'}}>{tagPrice?.property?.settings?.[5]}</div>
                <div className='d-flex justify-content-center align-items-center'
                style={{marginBottom: '15px', height:'10%', textAlign:'center', backgroundColor:'lightgray'}}>{tagPrice?.property?.settings?.[6]}</div>
                <div className='d-flex justify-content-center align-items-center'
                style={{marginBottom: '65px', height:'10%', textAlign:'center', backgroundColor:'lightgray'}}>{tagPrice?.property?.settings?.[7]}</div>
                <div className='d-flex justify-content-center align-items-center'
                style={{marginBottom: '5px', height:'5%', textAlign:'center', backgroundColor:'lightgray'}}>дата:&nbsp;{dateTag.getDate()}-{dateTag.getMonth()+1}-{dateTag.getFullYear()}</div>
              </div>
              <div className="div2">
                <div><span style={{fontSize:'30pt'}}>{tagPrice?.property?.type}</span></div>
                <div><span style={{fontSize:'40pt'}}>{tagPrice?.property?.model}</span></div>
                <div><span>{tagPrice?.property?.settings?.[0]}</span></div>
              </div>
              <div className="div3" style={{display: 'flex', alignItems:'flex-start'}}>
                <div style={{display: 'inline-flex', marginRight:'20px'}}><img src='askona_2.png' width={270} height={60}/></div>
                <div style={{display: 'inline-flex', backgroundColor:'rgb(239,66,111)', width:'100%', color:'white'}}>
                  <div
                    className='d-flex align-items-center' style={{display: 'inline-flex', fontSize:'18pt', margin: '5px', width:'25%', textAlign:'center'}}>РАССРОЧКА ПЛАТЕЖА</div>
                  <div className='align-items-center' style={{display: 'flex', width:'25%'}}>
                    <div style={{margin:'5px'}}>
                      0-0-12
                    </div>
                    <div style={{margin:'5px'}}>
                      от ХХХХХ руб
                    </div>
                  </div>
                  <div className='d-flex align-items-center' style={{display: 'flex', width:'25%'}}>
                    <div style={{margin:'5px'}}>
                      0-0-12
                    </div>
                    <div style={{margin:'5px'}}>
                      от ХХХХХ руб
                    </div>
                  </div>
                  <div className='d-flex align-items-center' style={{display: 'inline-flex', width:'25%'}}>
                    <div style={{margin:'5px'}}>
                      0-0-12
                    </div>
                    <div style={{margin:'5px'}}>
                      от ХХХХХ руб
                    </div>
                  </div>
                </div>
              </div>
              <div className="div4 d-flex justify-content-center align-items-center">50%</div>
              <div className="div5">
                <div className='w-100'>
                  <table className='w-100'>
                    <thead style={{fontSize:'24pt', textTransform:'uppercase'}}>
                      <th>размер</th>
                      <th>старая цена</th>
                      <th>новая цена</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td>200*160</td>
                        <td>1000000</td>
                        <td>599999</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default TagPrice
