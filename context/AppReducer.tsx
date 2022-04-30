/*reducers.ts*/
import {
  ADD_TO_CART_LIST,
  PRODUCTS_FETCH_SUCCESS,
  REMOVE_TO_CART_LIST,
  START_PRODUCTS_FETCH_LOADING,
  STOP_PRODUCTS_FETCH_LOADING,
  SYNC_CART_LIST_FROM_LOCAL_STORAGE,
  TOGGLE_CART_DRAWER,
  TOGGLE_MENU_DRAWER,
  UPDATE_CART_LIST_QTY,
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
    // Add to cart item
    case ADD_TO_CART_LIST:
      state = {
        ...state,
        cartList: [
          ...state.cartList,
          {
            ...action.payload,
            qty: 1,
          },
        ],
      };
      return state;
    case REMOVE_TO_CART_LIST: {
      const updatedCartList = state.cartList.filter(
        (cartListItem: any) => cartListItem.id !== action.payload.id
      );
      state = {
        ...state,
        cartList: updatedCartList,
      };
      return state;
    }
    // Increase and decrease cart list quanitity
    case UPDATE_CART_LIST_QTY:
      let updatedCartList = state.cartList.map((cartListItem: any) => {
        if (cartListItem.id === action.payload.id) {
          if (!action.payload.isIncreased) {
            return {
              ...cartListItem,
              qty: cartListItem.qty === 0 ? 0 : cartListItem.qty - 1,
            };
          }
          return {
            ...cartListItem,
            qty: cartListItem.qty + 1,
          };
        }
        return cartListItem;
      });

      state = {
        ...state,
        cartList: updatedCartList,
      };
      return state;
    case SYNC_CART_LIST_FROM_LOCAL_STORAGE:
      state = {
        ...state,
        cartList: action.payload || [],
      };
      return state;
    default:
      return state;
  }
};
export default cartReducer;
