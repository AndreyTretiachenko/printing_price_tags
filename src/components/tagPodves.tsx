import React, { useContext, useEffect } from 'react'
import { useFontSize } from '../hooks/useFontSize'
import { Itag } from './Tags'

interface IpropsTagPodves {
  tag:Itag
}

export default function TagPodves({tag}:IpropsTagPodves) {
  const date = new Date()
  const fsize = useFontSize(tag)

  
  return (
    <>
    <div style={{marginLeft:20, marginTop:5, display:'inline-flex'}}>
      <div style={{width:300, height:390, border: '0.5px dashed black'}}>
        <div className='row'>
          <div className='col'>
            <div style={{width:'100%', fontSize:'16pt'}}>{tag?.property?.type}</div>
            <div style={{width:'100%', fontSize:fsize, height:37, display:'flex', alignItems:'center'}}>{tag?.property?.model}</div>
            <div style={{width:'100%', fontSize:'11pt', display:'inline'}}>Размер {tag?.property?.size}</div>
            <div style={{width:'100%', fontSize:'11pt', display:'inline', paddingLeft:3}}>{tag?.property?.catigoryCloth}</div>
          </div>
        </div>
        <div className='row'>
          <div className='col' >
          <div style={{width:90, height:240}}>
            {tag?.property?.settings &&
            <>
            {tag?.property?.settings?.map((item) => { 
              return <div 
              style={{display:'block', fontSize:'6pt', backgroundColor:'#f0f0f0', marginBottom:3, textAlign:'center'}}>{item?.slice(0,30)}
              </div>})
            }
            </>
            }
            <div style={{display:'block', alignItems:'end'}}><img src='askona_2.png' width={70} height={16} /></div>
            </div>
          </div>
          <div className='col' style={{marginLeft:0}}>
            <div style={{width:'100px', backgroundColor: 'rgb(239,66,111)', color:'white', fontSize:'33pt',marginLeft:'auto', marginRight:'0', textAlign:'center'}}>{tag?.discount}%</div>
            <div style={{width:'150px',fontSize:'7pt', textAlign:'end'}}>старая цена</div>
            <div style={{width:'150px',fontSize:'20pt', textAlign:'end',  textDecoration:'line-through',}}>{tag?.fixOldPrice} руб</div>
            <div style={{width:'150px',fontSize:'7pt', textAlign:'end'}}>новая цена</div>
            <div style={{width:'150px',fontSize:'20pt', textAlign:'end'}}>{tag?.fixNewPrice} руб</div>
            <div style={{width:'150px',fontSize:'7pt', textAlign:'end'}}>{date.getDate()}-{date.getMonth()+1}-{date.getFullYear()}</div>
            <div style={{width:'150px',fontSize:'7pt', textAlign:'end'}}>рассрочка</div>  
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
