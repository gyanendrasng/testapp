const apiPrefix: string = 'https://fakestoreapi.com';

/**
 * To make api full url
 * @param {string} - It will take endPoint name as the first parameter
 * @return {object} - Return the full url as a string
 */
const getURL = (endPointName: string): string => {
  const url: string = `${apiPrefix}/${endPointName}`;
  return url;
};

const endPoints: any = {
  getAllCartProductEndPoint: getURL('carts'),
  addCartProductEndPoint: getURL('carts'),
  updateCartProductEndPoint: getURL('carts'),
  deleteCartProductEndPoint: getURL('carts'),
};

export default endPoints;
