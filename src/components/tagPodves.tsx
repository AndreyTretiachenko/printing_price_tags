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
            <div style={{width:'100%', fontSize:'11pt', display:'inline', paddingLeft:3}}>{tag?.property?.catigoryCloth?.toString() === '0' ? '' : tag?.property?.catigoryCloth}</div>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
          <div style={{width:90, height:270}}>
            {tag?.property?.settings &&
            <>
            {tag?.property?.settings?.map((item) => { 
              return <div 
              style={{fontSize:'6pt', backgroundColor:'#f0f0f0', marginBottom:3, textAlign:'center'}}>{item?.slice(0,30)}
              </div>})
            }
            </>
            }
            </div>
            <div style={{verticalAlign:'bottom'}}><img src='askona_2.png' width={70} height={16} /></div>
          </div>
          <div className='col' style={{marginLeft:0}}>
            <div style={{width:'100px', backgroundColor: 'rgb(239,66,111)', color:'white', fontSize:'33pt',marginLeft:'auto', marginRight:'0', textAlign:'center'}}>{tag?.discount}%</div>
            <div style={{width:'150px',fontSize:'7pt', textAlign:'end', marginLeft:'auto', marginRight:'0'}}>старая цена</div>
            <div style={{width:'150px',fontSize:'20pt', textAlign:'end', marginLeft:'auto', marginRight:'0',  textDecoration:'line-through',}}>{tag?.fixOldPrice} руб</div>
            <div style={{width:'150px',fontSize:'7pt', textAlign:'end', marginLeft:'auto', marginRight:'0'}}>новая цена</div>
            <div style={{width:'150px',fontSize:'20pt', textAlign:'end', marginLeft:'auto', marginRight:'0'}}>{tag?.fixNewPrice} руб</div>
            <div style={{width:'150px',fontSize:'7pt', textAlign:'end', marginLeft:'auto', marginRight:'0'}}>{date.getDate()}-{date.getMonth()+1}-{date.getFullYear()}</div>
            <div style={{width:'180px', height:'108px',fontSize:'12pt', color:'white', backgroundColor: 'rgb(239,66,111)',border: '0.5px solid black'}}>
              <div style={{fontSize:'12pt', textAlign:'center'}}>рассрочка платежа</div>
              <div>
                <div style={{display:'inline-flex', width:'45px', marginLeft:10}}>0-0-6</div>
                <div style={{display:'inline-flex', width:'45px', marginLeft:5}}>0-0-9</div>
                <div style={{display:'inline-flex', width:'60px', marginLeft:5}}>0-0-10</div>
              </div>
              <div style={{fontSize:'10pt'}}>
                <div style={{display:'inline-flex', width:'45px', marginLeft:10}}>
                  {Math.round(Number(tag?.fixNewPrice?.replaceAll(' ',''))/6)}  руб</div>
                <div style={{display:'inline-flex', width:'45px', marginLeft:5}}>
                  {Math.round(Number(tag?.fixNewPrice?.replaceAll(' ',''))/9)}  руб</div>
                <div style={{display:'inline-flex', width:'45px', marginLeft:10}}>
                  {Math.round(Number(tag?.fixNewPrice?.replaceAll(' ',''))/10)}  руб</div>
              </div>
              </div>    
          </div>
         
        </div>
      </div>
    </div>
    </>
  )
}
