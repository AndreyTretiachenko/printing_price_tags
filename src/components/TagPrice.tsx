import React, {useRef} from 'react'
import { useReactToPrint } from 'react-to-print'
import Tags, { Itag } from './Tags'

interface ItagPriceProps {
  tagPrice?: Itag;
}

const TagPrice = (props:ItagPriceProps) => {

  const {tagPrice} = props

  const componentRef = useRef<HTMLDivElement>(null)
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    onAfterPrint: () => alert('Succses')
  })
  
  return (
    <>
    <div ref={componentRef} style={{width: window.innerWidth, height: window.innerHeight}}>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className="parent"> 
              {tagPrice?.property?.settings?.map((set, index)=> (
              <div className={`div${index+1}`}>{set}</div>
              ))}
              <div className="div8">50%</div> 
              <div className="div9"> </div> 
              <div className="div10">{tagPrice?.productName}</div> 
              <div className="div11"> {tagPrice?.property?.size}</div> 
              <div className="div12">размер</div> 
              <div className="div13">цена до</div> 
              <div className="div14">цена после</div> 
              <div className="div15"> </div> 
              <div className="div16"> </div> 
              <div className="div17"> </div> 
              <div className="div18"> </div> 
              <div className="div19"> </div> 
              <div className="div20"> </div> 
              <div className="div21"> </div> 
              <div className="div22"> </div> 
              <div className="div23"> </div> 
              <div className="div24"> </div> 
              <div className="div25"> </div> 
              <div className="div26"> </div> 
              <div className="div27"> </div> 
              <div className="div28"> </div> 
              <div className="div29"> </div> 
              <div className="div30"> </div> 
              <div className="div31"> </div> 
              <div className="div32"> </div> 
              <div className="div33"> </div> 
              <div className="div34"> </div> 
              <div className="div35"> </div> 
              <div className="div36"> </div> 
              </div>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <button onClick={handlePrint}>print</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default TagPrice
