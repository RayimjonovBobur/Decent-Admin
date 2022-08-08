import { createSlice } from "@reduxjs/toolkit";

export const allData = createSlice({
  name: "Admin panel",
  initialState: {
    user: {},
    active: 0,
    currentPage: {},
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
    product: [],
  },
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },
    setActive: (state, { payload }) => {
      state.active = payload;
    },
    setCurrenPage: (state, { payload }) => {
      state.currentPage = payload;
    },
    toggleModal: (state, { payload }) => {
      console.log(payload);
      state.currentPage.isOpenModal = payload;
    },
    setProduct: (state, { payload }) => {
      if (!true) {
        state.product = payload + 1;
      } else {
        state.product = payload;
      }
    },
    getTotals(state, payload) {
      let { total, quantity } = state.cartItems.reduce({
        total: 0,
        quantity: 0,
      });
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
    setDelete: (state, { payload }) => {
      let data = state?.product?.filter((item) => item.id !== payload.id);
      state.product = data;
    },
  },
});

export const {
  setUser,
  setActive,
  setCurrenPage,
  toggleModal,
  getTotals,
  setProduct,
  setDelete,
} = allData.actions;

export default allData.reducer;
