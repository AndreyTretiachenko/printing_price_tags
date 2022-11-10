import { createSlice } from '@reduxjs/toolkit'
 

const initialState = {
    tagList:[],
}

const tagsSlice = createSlice({
    name: 'tags',
    initialState,
    reducers:{
        addTag: (state:any, action) => {
            state = state.tagList.push(action.payload)
        },
        selectTag: (state:any, action) => {
            const select = state.tagList.map((item:any) => {
                if (item.id === action.payload) {
                  if (!item.isSelect) {
                    return {...item, isSelect:!item.isSelect}
                  }
                  else {
                    return {...item, isSelect:!item.isSelect}
                  }
                }
                else {
                  if (!item.isSelect) {
                    return item
                  }
                  else {
                    return {...item, isSelect:!item.isSelect}
                  }
                }
            }
         )
         return {...state, tagList: select}
      },
      deleteTag: (state:any, action) => {
        const newTagList = state.tagList.filter((item:any) => item.id !== action.payload)
        return {
            ...state,
            tagList: newTagList
        }
      },
      updateDataValue: (state, action) => {
        return {
          ...state,
          tagList: action.payload
        }

      }
      
    }
})

export const { addTag, selectTag, deleteTag, updateDataValue } = tagsSlice.actions
export default tagsSlice.reducer