import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store/store'



const initialState = {
    product:[]
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        loadProducts: (state, action) => {
            state.product = action.payload
        }
    }
})

export const { loadProducts } = productSlice.actions
export default productSlice.reducer