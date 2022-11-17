import React, { useEffect, useState } from "react"
import Products from "../components/Products"
import TagPrice from "../components/TagPrice"
import Tags from "../components/Tags"
import { TagSettings } from "../components/TagSettings/Tagsettings"
import { setStatus } from "../features/print/printSlice"
import { setCategoryList } from "../features/products/productSlice"
import { useAppDispatch, useAppSelector } from "../hooks/hooks"



export default function Price() {

    const dispatch = useAppDispatch()
    const {selectTag} = useAppSelector((state)=> state)
    const [tagType, setTagType] = useState('')

    const handleClickPrint = () => {
        dispatch(setStatus(true))
        setTimeout(()=>{
            dispatch(setStatus(false))
        }, 500)

    }


    useEffect(()=>{
        fetch('http://service.dvinahome.ru/getCategory',
        {
            method: 'POST',
            headers: {'Authorization':'basic dXNlcjpwYXNz'}
        }
            ).then((res) => {
        return res.json()}).then(result => {
            dispatch(setCategoryList(result['data']))
    })
    },[])
 


  return (

    <div className='container'>
        <div className='row'>
            <div className='col-12 my-3' style={{padding:'0 0'}}>
                <Products />
            </div>
        </div>
        <div className="row">
            <div className="col" style={{padding:'0 0px', border: '0.5px solid black'}}>
                <div style={{marginBottom:5,borderBottom: '0.5px solid black', textAlign:'center'}}>Очередь на печать</div>
                <Tags/>
            </div>
            <div className="col-8" 
                style={{
                    padding:'0 0px', 
                    borderRight: '0.5px solid black',
                    borderTop: '0.5px solid black',
                    borderBottom: '0.5px solid black'
                    }}>
            <div style={{marginBottom:5,borderBottom: '0.5px solid black', textAlign:'center'}}>Настройки ценника для печати</div>
                <TagSettings item={selectTag} key={selectTag.id}/>
            </div>
        </div>
        <div className="row" style={{marginBottom:'10px', marginTop:10}}>
        <div className="col-4 px-0"> 
                <label htmlFor='TagType'>Формат ценника:&nbsp;</label>
                <select  name={'TagType'}
                onChange={(e) => setTagType(e.currentTarget.value)}
                
                >
                    <option value={'noset'}>
                        не выбран
                    </option>
                    <option value={'a4h'}>
                        a4 гориpзонтальный
                    </option>
                    <option  value={'a4v'}>
                        a4 вертикальный
                    </option>
                    <option value={'podves'}>
                        подвесной
                    </option>
                    <option value={'podvesOT'}>
                        подвесной ОТ
                    </option>
                </select>
            </div>
            <div className="col-2 px-0"> 
                <button onClick={handleClickPrint}>Печать</button>
            </div>
        </div>
        <div className="row" style={{display:'block', marginBottom: '30px',border: '0.5px solid black'}}>
            <div className="col-12" style={{padding:'0 0'}}>
                <TagPrice tagType={tagType}/>
            </div>
        </div>
    </div>
  )
}
