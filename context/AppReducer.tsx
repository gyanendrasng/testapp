/*reducers.ts*/
import {
  PRODUCTS_FETCH_SUCCESS,
  START_PRODUCTS_FETCH_LOADING,
  STOP_PRODUCTS_FETCH_LOADING,
  TOGGLE_CART_DRAWER,
  TOGGLE_MENU_DRAWER,
} from './types';

const cartReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_CART_DRAWER:
      state = {
        ...state,
        isOpenCartDrawer: !state.isOpenCartDrawer,
      };
      return state;
    case TOGGLE_MENU_DRAWER:
      state = {
        ...state,
        isOpenMenuDrawer: !state.isOpenMenuDrawer,
      };
      return state;
    case START_PRODUCTS_FETCH_LOADING:
      state = {
        ...state,
        isProductsFetching: true,
      };
      return state;
    case STOP_PRODUCTS_FETCH_LOADING:
      state = {
        ...state,
        isProductsFetching: false,
      };
      return state;
    case PRODUCTS_FETCH_SUCCESS:
      state = {
        ...state,
        products: [...action.payload],
        isProductsFetching: false,
      };
      return state;
    default:
      return state;
  }
};
export default cartReducer;
