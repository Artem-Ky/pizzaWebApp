import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartState, ICartProduct } from "../../../types";

const initialState: ICartState = (() => {
  const cartState = localStorage.getItem("cart");
  if (cartState) {
    return JSON.parse(cartState);
  } else {
    return {
      amount: 0,
      totalPrice: 0,
      cartList: [],
    };
  }
})();

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICartProduct>) => {
      const product = action.payload;
      state.amount += 1;
      state.totalPrice += product.cost;
      const findItem = state.cartList.find((obj) => obj.id === product.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.cartList.push(product);
      }
      const cartState = JSON.stringify(state);
      localStorage.setItem("cart", cartState);
    },
    removeFromCart: (state, action: PayloadAction<ICartProduct>) => {
      const product = action.payload;
      state.amount -= 1;
      state.totalPrice -= product.cost;
      const findItem = state.cartList.find((obj) => obj.id === product.id);
      if (findItem) {
        if (findItem.count === 1) {
          state.cartList = state.cartList.filter(
            (obj) => obj.id !== product.id
          );
        } else {
          findItem.count--;
        }
        const cartState = JSON.stringify(state);
        localStorage.setItem("cart", cartState);
      } else {
        console.error(
          "Продукт не найден (временно чтобы не жаловался на undefine)"
        );
      }
    },
    clearFromCart: (state, action: PayloadAction<number>) => {
      const findItem = state.cartList.find((obj) => obj.id === action.payload);
      if (findItem) {
        state.amount -= findItem.count;
        state.totalPrice -= findItem.cost * findItem.count;
        state.cartList = state.cartList.filter((obj) => obj.id !== findItem.id);
      }
      const cartState = JSON.stringify(state);
      localStorage.setItem("cart", cartState);
    },
    orderCreated: (state) => {
      state.amount = 0;
      state.totalPrice = 0;
      state.cartList = [];
      const cartState = JSON.stringify(state);
      localStorage.setItem("cart", cartState);
    },
  },
});

export const { addToCart, removeFromCart, clearFromCart, orderCreated } =
  cartSlice.actions;

export default cartSlice.reducer;
