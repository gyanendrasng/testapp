import { useContext, useEffect } from 'react';
import {
  addNewProductToCartList,
  deleteCartListProduct,
  updateCartListProduct,
} from '../apis/apis.cart';
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
  const getCartList: any = (id: number) => {
    const cartList = state.cartList;
    return cartList.map((item: any) => ({
      productId: item.id,
      quantity: item.qty,
    }));
  };
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
  // Product add to cart and update qty
  const addToCart: any = (product: any) => {
    const qty = getQtyById(product.id);
    if (!qty || qty === 0) {
      dispatch({
        type: ADD_TO_CART_LIST,
        payload: product,
      });
      // Updated: To add cart product into the Database via api call
      addNewProductToCartList({
        userId: product.id,
        date: Date().toString(),
        products: getCartList(),
      });
    } else {
      increasedQtyById(product.id);
      // Updated: To update cart product into the Database via api call
      updateCartListProduct(product.id, getCartList());
    }
  };
  // Product remove from add to cart and update qty
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
      // Updated: To remove cart product into the Database via api call
      deleteCartListProduct(id);
    } else {
      decreasedQtyById(id);
      // Updated: To update cart product into the Database via api call
      updateCartListProduct(id, getCartList());
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
