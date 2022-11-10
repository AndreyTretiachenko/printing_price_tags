import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    products:[],
    productListModel:[]
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        loadProducts: (state, action) => {
            state.products = action.payload
        },
        setProductListModel: (state, action) => {
            state.productListModel = Array.from(new Set(
                action.payload.map(
                    (prod:[]) => {
                        return prod.find((item, index) => {
                            if (index === 3) 
                                return item
                            }
                        )
                    }
                )
            )
        )         
        }

    }
})

export const { loadProducts, setProductListModel } = productSlice.actions
export default productSlice.reducer