import endPoints from './endPoints';

const {
  addCartProductEndPoint,
  updateCartProductEndPoint,
  deleteCartProductEndPoint,
} = endPoints;

// Product interface
interface Product {
  productId: number;
  quantity: number;
}
// Add new product interface
interface AddNewProduct {
  userId: number;
  date: string;
  products: Product[];
}
/**
 * Add product in the cart
 * @param {object} - It will take the new product data for adding to the cart list
 * @return {object} - return added product or error
 */
export const addNewProductToCart = async (cartProduct: AddNewProduct) => {
  try {
    const res: any = await fetch(addCartProductEndPoint, {
      method: 'POST',
      body: JSON.stringify(cartProduct),
    });
    const data: any = await res.json();

    return data;
  } catch (err: any) {
    return { status: err.status, message: err.response.message };
  }
};
/**
 * Update existing product in the cart list
 * @param {number object} - It will take cart product ID as the first parameter, and as the second parameter product data
 * @return {object} - return updated data or error
 */
export const updateCartProduct = async (
  id: number,
  cartProduct: AddNewProduct
) => {
  try {
    const res: any = await fetch(`${updateCartProductEndPoint}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(cartProduct),
    });
    const data: any = await res.json();

    return data;
  } catch (err: any) {
    return { status: err.status, message: err.response.message };
  }
};

/**
 * Delete existing product from the cart list
 * @param {number} - It will take cart product ID as the first parameter
 * @return {object} - return deleted data or error
 */
export const deleteCartProduct = async (id: number) => {
  try {
    const res: any = await fetch(`${deleteCartProductEndPoint}/${id}`, {
      method: 'DELETE',
    });
    const data: any = await res.json();

    return data;
  } catch (err: any) {
    return { status: err.status, message: err.response.message };
  }
};
