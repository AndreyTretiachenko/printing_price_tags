import { createSlice } from '@reduxjs/toolkit'
 

const initialState = {
    productId: '',
      productName: '',
      discount:'',
      cheked: false,
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
            state = action.payload 
        }
    }
})    



export const { setSelectTag } = selectTagSlice.actions
export default selectTagSlice.reducer