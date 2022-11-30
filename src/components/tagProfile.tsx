import React from 'react'

export default function TagProfile() {
    const storage = localStorage.getItem('profile')
  return (
    <>
    <div style={{display:'inline-flex', marginRight:10}}>
        <button className='btn btn-primary btn-sm'>
            создать
        </button>
    </div>
    <div style={{display:'inline-flex'}}>
        <button className='btn btn-primary btn-sm disabled'>
            выбрать
        </button>
    </div>
    <div style={{display:'inline-flex'}}>
        <span>{JSON.parse(storage || '')}</span>
    </div>
    </>
  )
}
