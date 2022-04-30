import { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import {
  ADD_TO_CART_LIST,
  REMOVE_TO_CART_LIST,
  SYNC_CART_LIST_FROM_LOCAL_STORAGE,
  UPDATE_CART_LIST_QTY,
} from '../context/types';

const useCart = () => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    let cartListsSync = localStorage.getItem('cart-list');
    cartListsSync = cartListsSync ? JSON.parse(cartListsSync) : [];

    dispatch({
      type: SYNC_CART_LIST_FROM_LOCAL_STORAGE,
      payload: cartListsSync,
    });
  }, []);

  const getQtyById: any = (id: number) => {
    const cartItem = state.cartList.find(
      (cartListItem: any) => cartListItem.id === id
    );
    if (cartItem) {
      if (!cartItem.qty) {
        return 0;
      }
      if (cartItem.qty >= 1) {
        return cartItem.qty;
      }
    }
    return 0;
  };

  const addToCart: any = (product: any) => {
    const qty = getQtyById(product.id);
    if (!qty || qty === 0) {
      dispatch({
        type: ADD_TO_CART_LIST,
        payload: product,
      });
    } else {
      increasedQtyById(product.id);
    }
  };
  const removeToCart: any = (id: number) => {
    const qty = getQtyById(id);
    if (!qty) {
      return false;
    }
    if (qty && qty === 1) {
      dispatch({
        type: REMOVE_TO_CART_LIST,
        payload: {
          id,
        },
      });
    } else {
      decreasedQtyById(id);
    }
  };
  const increasedQtyById: any = (id: number) => {
    dispatch({
      type: UPDATE_CART_LIST_QTY,
      payload: {
        id,
        isIncreased: true,
      },
    });
  };
  const decreasedQtyById: any = (id: number) => {
    dispatch({
      type: UPDATE_CART_LIST_QTY,
      payload: {
        id,
        isIncreased: false,
      },
    });
  };
  return {
    cartList: state.cartList,
    getQtyById,
    addToCart,
    removeToCart,
    increasedQtyById,
    decreasedQtyById,
  };
};

export default useCart;
