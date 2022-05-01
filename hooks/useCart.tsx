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

  // To resnyc cart data from localstorage when page is loaded
  useEffect(() => {
    let cartListsSync = localStorage.getItem('cart-list');
    cartListsSync = cartListsSync ? JSON.parse(cartListsSync) : [];

    dispatch({
      type: SYNC_CART_LIST_FROM_LOCAL_STORAGE,
      payload: cartListsSync,
    });
  }, []);

  // Get individual quantity of product
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
  // Get Total Items
  const getTotalItems = () => {
    let totalItems = 0;
    state.cartList.forEach((cartListItem: any) => {
      totalItems += cartListItem.qty;
    });
    return totalItems;
  };
  // Get total products
  const getTotalProducts = () => {
    return state.cartList.length;
  };
  // Get total product items amount of cost
  const getTotalAmountOfCost = () => {
    let totalCost = 0;
    state.cartList.forEach((cartListItem: any) => {
      totalCost += cartListItem.qty * cartListItem.price;
    });
    return totalCost;
  };
  // Product add to cart
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
  // Product remove from add to cart
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
  // Quanity increase by id
  const increasedQtyById: any = (id: number) => {
    dispatch({
      type: UPDATE_CART_LIST_QTY,
      payload: {
        id,
        isIncreased: true,
      },
    });
  };
  // Quantity descrease by id
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
    getTotalItems,
    getTotalProducts,
    getTotalAmountOfCost,
    addToCart,
    removeToCart,
    increasedQtyById,
    decreasedQtyById,
  };
};

export default useCart;
