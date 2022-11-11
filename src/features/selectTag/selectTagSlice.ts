import { createSlice } from '@reduxjs/toolkit'
 

const initialState = {
    productId: '',
      productName: '',
      discount:'',
      checked: false,
      id: '',
      property: {
          size: '',
          allSize: [],
          type: '',
          model: '',
          catigoryCloth:'',
          settings: []
      },
      isSelect: false,
      data:[]
}

const selectTagSlice = createSlice({
    name: 'selectTag',
    initialState,
    reducers:{
        setSelectTag:(state, action) => {
            return action.payload
        },
        updateDataSelectTag: (state, action) => {
            return {
                ...state,
                data: action.payload
            }
        },
        setCheckedSelectTag: (state, action) => {
            return {
                ...state,
                checked: action.payload
            }
        },
        setDiscountSelectTag: (state, action) => {
            return {
                ...state,
                discount: action.payload
            }
        }
    }
})    



export const { setSelectTag, updateDataSelectTag, setCheckedSelectTag, setDiscountSelectTag } = selectTagSlice.actions
export default selectTagSlice.reducer