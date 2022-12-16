import React from 'react'


export default function GeneralPage() {

  return (
    <div className='container'>
      <div className='row'>
        <div className='col' style={{alignContent:'center', padding:'0 0', marginTop:30}}>
          <div>Добро пожаловать на страницу сервисных приложений нашей компании</div>
        </div>
      </div>
      <div className="row">
        <div className="col mt-3 p-0">
          <span><p>Полезные ссылки:</p></span>
          <a href='https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2F3ZCl73qp2C%2BPWGVIRmU6KsoVLJWR4ZVwT9hGDW9vsOZEJqoD38H3IF4K9xe1wf9tq%2FJ6bpmRyOJonT3VoXnDag%3D%3D%3A%2F%D0%A6%D0%B5%D0%BD%D0%BD%D0%B8%D0%BA%D0%B8%20%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F.pdf&name=%D0%A6%D0%B5%D0%BD%D0%BD%D0%B8%D0%BA%D0%B8%20%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F.pdf&nosw=1'
          target={'_blank'}>
            Какой и где использовать формат ценников (инструкция от Аскона). Внимание на страницу 3-4
          </a><br/>
          <a href='инструкция ценник.pdf'
          target={'_blank'}>
            Инструкция к программе "Ценники" (от 16.12.2022)
          </a>
        </div>
      </div>
    </div>
    
  )
}
