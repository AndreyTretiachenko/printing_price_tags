import React from "react"

export default function Price() {
  return (
    <div className='container px-4'>
        <div className='row g-4'>
            <div className='col'>
                <div>
                    <input type='text' className="g-4" list='data-price'/>
                    <datalist id='data-price'>
                        <option>123</option>
                        <option>321</option>
                        <option>222</option>
                        <option>111</option>
                        <option>333</option>
                    </datalist>
                    <button type='button' className="btn btn-primary btn-py-1 btn-px-1">add</button>
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
