import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    profileList:[]
}


const profileTagSlice = createSlice({
    name: 'profile',
    initialState,
    reducers:{
        addProfile:(state:any, action) => {
            state.profileList.push(action.payload)
        },
        updateProfile: (state, action) => {
            return {
                ...state,
                profileList: action.payload
            }
        }
    }
})

export const { addProfile, updateProfile } = profileTagSlice.actions
export default profileTagSlice.reducer