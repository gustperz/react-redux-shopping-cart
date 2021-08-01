import { createSlice, ParametricSelector, PayloadAction, Selector } from '@reduxjs/toolkit';

import type { RootState } from 'state/store';
import { Product } from 'state/types';

interface ShoppingCartState {
  items: {
    [id: number]: {
      product: Product;
      quantity: number;
    };
  };
}

const initialState: ShoppingCartState = {
  items: {},
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
  },
});

export const { addProduct, decrementProductQuantity, incrementProductQuantity, removeProduct } =
  shoppingCartSlice.actions;

export const selectShoppingCartProductsCount: Selector<RootState, number> = state =>
  Object.entries(state.shoppingCart.items).length;

export const selectProductInShoppingCart: ParametricSelector<RootState, number, boolean> = (
  state,
  id
) => !!state.shoppingCart.items[id];

export default shoppingCartSlice.reducer;
