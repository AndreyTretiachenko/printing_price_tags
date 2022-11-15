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
            <div className='col-12 my-3'>
                <Products />
            </div>
        </div>
        <div className="row">
            <div className="col-4 d-block justify-content-start pt-2 mb-2" style={{border: '0.5px solid black'}}>
                <Tags/>
            </div>
            <div className="col-8 d-flex justify-content-start pt-2 mb-2" style={{border: '0.5px solid black'}}>
                <TagSettings item={selectTag} key={selectTag.id}/>
            </div>
        </div>
        <div className="row" style={{marginBottom:'10px'}}>
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
                </select>
            </div>
            <div className="col-2 px-0"> 
                <button onClick={handleClickPrint}>Печать</button>
            </div>
        </div>
        <div className="row" style={{display:'block', marginBottom: '30px',border: '0.5px solid black'}}>
            <div className="col-12">
                <TagPrice tagType={tagType}/>
            </div>
        </div>
    </div>
  )
}
