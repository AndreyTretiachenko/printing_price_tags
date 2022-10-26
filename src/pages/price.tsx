import React, { useEffect, useState } from "react"

export default function Price() {

    const[towar, setTowar] = useState([])

    useEffect(()=>{
        
       fetch('http://127.0.0.1:5000/?count=4000',
            {
                method: 'POST',
                headers: {'Authorization':'basic dXNlcjpwYXNz'}
            }
        ).then((res) => {
            return res.json()}).then(result => {
                setTowar(result['data'])    
            })
    },[])

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-12'>
                <div>
                    <label>выберите название товара:</label>
                    <input type='text' className='' style={{'width':'500px'}} list='data-price' autoComplete="on"/>
                    <datalist id='data-price' aria-autocomplete="list">
                        {towar.map((tw)=>(
                            <option key={tw[1]}>{tw[0]}</option>
                        ))}
                    </datalist>
                </div>
            </div>
            <div className='col-12'>
                <div>
                </div>
            </div>
        </div>
    </div>
  )
}
