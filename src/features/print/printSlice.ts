import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    printStatus: false
}

const printSlice = createSlice({
    name: 'print',
    initialState,
    reducers: {
        setStatus: (state, action) => {
            return {
                ...state,
                printStatus: action.payload
            }
        }
    }
})

export const { setStatus } = printSlice.actions
export default printSlice.reducer 