import React from "react"

export default function Price() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col'>
                <div>
                    <input type='text' className="form" list='data-price'/>
                    <datalist id='data-price'>
                        <option>123</option>
                        <option>321</option>
                        <option>222</option>
                        <option>111</option>
                        <option>333</option>
                    </datalist>
                    <button type='button' className="btn btn-primary">add</button>
                </div>
            </div>
            <div className='col'>
                <div>
                    <select></select>
                </div>
            </div>
        </div>
    </div>
  )
}
