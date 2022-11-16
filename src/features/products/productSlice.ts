import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  productListModel: [],
  categoryList: [],
  defaultProduct: "",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    loadProducts: (state, action) => {
      state.products = action.payload;
    },
    setProductListModel: (state, action) => {
      state.productListModel = action.payload.map((prod: []) => {
        return prod.find((item, index) => {
          if (index === 0) return item;
        });
      });
    },
    setCategoryList: (state, action) => {
      state.categoryList = action.payload;
    },
    setDefaultProduct: (state, action) => {
        state.defaultProduct = action.payload
    },
  },
});

export const {
  loadProducts,
  setProductListModel,
  setCategoryList,
  setDefaultProduct,
} = productSlice.actions;
export default productSlice.reducer;
