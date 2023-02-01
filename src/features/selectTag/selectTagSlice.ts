import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productId: "",
  productName: "",
  discount: "",
  checked: false,
  id: "",
  fixOldPrice: "",
  fixNewPrice: "",
  property: {
    size: "",
    allSize: [],
    type: "",
    model: "",
    catigoryCloth: "",
    settings: [],
  },
  isSelect: false,
  copies: 1,
  data: [],
};

const selectTagSlice = createSlice({
  name: "selectTag",
  initialState,
  reducers: {
    setSelectTag: (state, action) => {
      return (state = action.payload);
    },
    updateDataSelectTag: (state, action) => {
      return {
        ...state,
        data: action.payload,
      };
    },
    setCheckedSelectTag: (state, action) => {
      return {
        ...state,
        checked: action.payload,
      };
    },
    setDiscountSelectTag: (state, action) => {
      return {
        ...state,
        discount: action.payload,
      };
    },
    setFixOldPriceSelectTag: (state, action) => {
      return {
        ...state,
        fixOldPrice: action.payload,
      };
    },
    setFixNewPriceSelectTag: (state, action) => {
      return {
        ...state,
        fixNewPrice: action.payload,
      };
    },
    setCopiesPriceSelectTag: (state, action) => {
      return {
        ...state,
        copies: action.payload,
      };
    },
  },
});

export const {
  setSelectTag,
  setCopiesPriceSelectTag,
  updateDataSelectTag,
  setCheckedSelectTag,
  setDiscountSelectTag,
  setFixNewPriceSelectTag,
  setFixOldPriceSelectTag,
} = selectTagSlice.actions;
export default selectTagSlice.reducer;
