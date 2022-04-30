import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
const useCart = () => {
  const [data, setData] = useState([]);
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    const cartList = localStorage.getItem('cart-list')
      ? JSON.parse(localStorage.getItem('cart-list'))
      : [];
    setData((prevState) => cartList);
  }, []);

  // To add the cart item into the cart list
  const addToCartItem = (product: object) => {
    let isExist = false;

    const newCartList = data.map((cartItem) => {
      if (cartItem?.product?.id === product?.id) {
        isExist = true;
        return {
          product,
          qty: cartItem?.qty + 1,
        };
      }
      return cartItem;
    });
    console.log('NewCartList Before', newCartList);

    if (!isExist) {
      newCartList.push({ product, qty: 1 });
    }
    setData((prevState) => newCartList);
    console.log('NewCartList After', newCartList);
    localStorage.setItem('cart-list', JSON.stringify(newCartList));
  };
  // To remove the cart item into the cart list
  const removeToCartItem = (id) => {
    let isEndQty = false;

    let newCartList = data.map((cartListItem) => {
      if (cartListItem?.product.id === id) {
        if (cartListItem.qty === 1) {
          isEndQty = true;
        } else {
          return {
            ...cartListItem,
            qty: cartListItem?.qty - 1,
          };
        }
      }
      return cartListItem;
    });
    if (isEndQty) {
      newCartList = newCartList.filter(
        (cartListItem) => cartListItem.product.id !== id
      );
    }
    setData(newCartList);
    localStorage.setItem('cart-list', JSON.stringify(newCartList));
  };
  // To get total list of cart item
  const getTotalCartListItem = () => {
    let totalCartItems = 0;
    data?.forEach((cartListItem) => {
      totalCartItems += cartListItem.qty;
    });
    return totalCartItems;
  };
  // To get total cost of cart list product
  const getTotalCost: number = () => {
    let totalCost = 0;
    data?.forEach((cartListItem) => {
      totalCost += cartListItem.product.price * cartListItem.qty;
    });
    return totalCost;
  };
  // To get quantity by id
  const getQtyById: number = (id: number) => {
    console.log('Im', id);
    data.forEach((cartListItem) => {
      if (cartListItem.product.id === id) {
        return cartListItem.qty;
      }
    });
    return 0;
  };
  return {
    cartList: data,
    addToCartItem,
    removeToCartItem,
    getTotalCartListItem,
    getTotalCost,
    getQtyById,
  };
};

export default useCart;
