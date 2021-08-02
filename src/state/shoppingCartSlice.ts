import { createSlice, ParametricSelector, PayloadAction, Selector } from '@reduxjs/toolkit';

import { RootState } from './store';
import { Product, ShoppingCartProduct } from 'state/types';

interface ShoppingCartState {
  items: {
    [id: number]: ShoppingCartProduct;
  };
  modalVisble: boolean;
}

const initialState: ShoppingCartState = {
  items: {},
  modalVisble: true,
};

export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    addProduct: (state, { payload }: PayloadAction<Product>) => {
      if (state.items[payload.id]) {
        state.items[payload.id].quantity++;
      } else {
        state.items[payload.id] = { product: payload, quantity: 1 };
      }
    },
    removeProduct: (state, { payload }: PayloadAction<number>) => {
      if (payload in state.items) {
        delete state.items[payload];
      }
    },
    incrementProductQuantity: (state, { payload }: PayloadAction<number>) => {
      if (payload in state.items) {
        state.items[payload].quantity++;
      }
    },
    decrementProductQuantity: (state, { payload }: PayloadAction<number>) => {
      if (payload in state.items) {
        state.items[payload].quantity--;
      }
    },
    toggleModalVisible: state => {
      state.modalVisble = !state.modalVisble;
    },
  },
});

export const {
  addProduct,
  decrementProductQuantity,
  incrementProductQuantity,
  removeProduct,
  toggleModalVisible,
} = shoppingCartSlice.actions;

export const selectShoppingCartProductsCount: Selector<RootState, number> = state =>
  Object.entries(state.shoppingCart.items).length;

export const selectProductAddeToShoppingCart: ParametricSelector<RootState, number, boolean> = (
  state,
  id
) => !!state.shoppingCart.items[id];

export const selectShoppingCartProducst: Selector<RootState, ShoppingCartProduct[]> = state =>
  Object.values(state.shoppingCart.items);

export const selectShoppingCartModalVisible: Selector<RootState, boolean> = state =>
  state.shoppingCart.modalVisble;

export default shoppingCartSlice.reducer;
