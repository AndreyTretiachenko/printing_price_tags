import React, {useEffect, useRef, useState} from 'react'
import { useContext } from 'react';
import { useReactToPrint } from 'react-to-print'
import useFitText from "use-fit-text"
import { GlobalContext } from '../pages/price';
import { inputContex} from './TagSettings/Tagsettings';

interface ItagPriceProps {
  toPrint?:boolean

}

const TagPrice = (props:ItagPriceProps) => {

  const { fontSize, ref } = useFitText({logLevel:'debug', minFontSize:10, maxFontSize:100})
  const tag = useContext(GlobalContext)
  const {toPrint} = props
  const dateTag = new Date()
  const componentRef = useRef<HTMLDivElement>(null)

  
  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  })

  useEffect(()=>{
    if (toPrint)
      handlePrint()
  }, [toPrint])

  return (
  
    <div ref={componentRef}>
      <div className='container' style={{}}>
        <div className='row'>
          <div className='col'>
            <div className="parent">
              <div className="div1" style={{fontSize:'12pt', margin:'0.8rem', fontWeight:'500'}}>
                <div className='d-flex justify-content-center align-items-center'
                style={{marginBottom: '15px', height:'10%', textAlign:'center', backgroundColor:'#f0f0f0'}}>{tag.tag.property?.settings?.[1]}</div>
                <div className='d-flex justify-content-center align-items-center'
                style={{marginBottom: '15px', height:'10%', textAlign:'center', backgroundColor:'#f0f0f0'}}>{tag.tag?.property?.settings?.[2]}</div>
                <div className='d-flex justify-content-center align-items-center'
                style={{marginBottom: '15px', height:'10%', textAlign:'center', backgroundColor:'#f0f0f0'}}>{tag.tag?.property?.settings?.[3]}</div>
                <div className='d-flex justify-content-center align-items-center'
                style={{marginBottom: '15px', height:'10%', textAlign:'center', backgroundColor:'#f0f0f0'}}>{tag.tag?.property?.settings?.[4]}</div>
                <div className='d-flex justify-content-center align-items-center'
                style={{marginBottom: '15px', height:'10%', textAlign:'center', backgroundColor:'#f0f0f0'}}>{tag.tag?.property?.settings?.[5]}</div>
                <div className='d-flex justify-content-center align-items-center'
                style={{marginBottom: '15px', height:'10%', textAlign:'center', backgroundColor:'#f0f0f0'}}>{tag.tag?.property?.settings?.[6]}</div>
                <div className='d-flex justify-content-center align-items-center'
                style={{marginBottom: '65px', height:'10%', textAlign:'center', backgroundColor:'#f0f0f0'}}>{tag.tag?.property?.settings?.[7]}</div>
                <div className='d-flex justify-content-center align-items-center'
                style={{marginBottom: '5px', height:'5%', textAlign:'center'}}>дата:&nbsp;{dateTag.getDate()}-{dateTag.getMonth()+1}-{dateTag.getFullYear()}</div>
              </div>
              <div className="div2" style={{fontSize:'55pt', fontWeight:'550'}}>
                <div style={{fontSize:'30pt'}}><span>{tag.tag?.property?.type}</span></div>
                <div ref={ref} style={{ fontSize, height: 75, width: 520, fontWeight:'1px' }}>
                  <div style={{whiteSpace:'nowrap'}}>
                    {tag.tag?.property?.model}
                  </div>
                </div>
                <div style={{fontSize:'10pt', fontWeight:'400'}}><span>{tag.tag?.property?.settings?.[0]}</span></div>
              </div>
              <div className="div3" style={{display: 'inline-flex', alignItems:'flex-start'}}>
                <div style={{display: 'inline-flex',marginTop:10, marginRight:20, alignItems:'center', justifyContent:'center'}}><img src='askona_2.png' width={270} height={60}/></div>
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
              <div className="div4 d-flex justify-content-center align-items-center" style={{padding:20}}>73%</div>
              <div className="div5 d-flex" style={{height:'350px'}}>
                <div className='w-100'>
                  <table className='w-100' style={{textAlign:'center'}}>
                    <thead style={{fontSize:'24pt'}}>
                      <th style={{fontWeight:'500'}}>РАЗМЕР</th>
                      <th style={{fontWeight:'500'}}>СТАРАЯ ЦЕНА</th>
                      <th style={{fontWeight:'500'}}>НОВАЯ ЦЕНА</th>
                    </thead>
                    <tbody>
                      <tr>
                        {/* <td>{context.length === 0 ? context?.[0].state[0]?.type : ''}</td>
                        <td>{context.length === 0 ? context?.[0].state[0]?.value : ''}</td>
                        <td>{context.length === 0 ? context?.[0].state[1]?.value : ''}</td> */}
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
    
  )
}

export default TagPrice
