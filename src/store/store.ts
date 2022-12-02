import {configureStore} from '@reduxjs/toolkit'
import printSlice from '../features/print/printSlice'
import productSlice from '../features/products/productSlice'
import profileTagSlice from '../features/profile/profileTagSlice'
import selectTagSlice from '../features/selectTag/selectTagSlice'
import tagsSlice from '../features/tags/tagsSlice'

export const store = configureStore({
 reducer: {
    products: productSlice,
    tags: tagsSlice,
    selectTag: selectTagSlice,
    print: printSlice,
    profile: profileTagSlice,
 }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch