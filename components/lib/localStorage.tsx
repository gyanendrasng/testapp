export const updateLocalStorage = (cartList: Array<Object>) => {
  localStorage.setItem('cart-list', JSON.stringify(cartList));
};
