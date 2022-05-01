import endPoints from './endPoints';

const {
  getAllCartProductEndPoint,
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
  userId?: number;
  date: string;
  products: Product[];
}

// Please attention! This method has not been used anywhere, it will be used in the future if needed
/**
 * Fetch all carts from API
 * @param {}
 * @return {object} - return all cart list or error
 */
export const getAllCartList = async () => {
  try {
    const res: any = await fetch(getAllCartProductEndPoint);
    const data: any = await res.json();
    return data;
  } catch (err: any) {
    return { status: err.status, message: err.response.message };
  }
};

/**
 * Add product in the cart
 * @param {object} - It will take the new product data for adding to the cart list
 * @return {object} - return added product or error
 */
export const addNewProductToCartList = async (cartProduct: AddNewProduct) => {
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
export const updateCartListProduct = async (
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
export const deleteCartListProduct = async (id: number) => {
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

const methods: any = {
  getAllCartList,
  addNewProductToCartList,
  updateCartListProduct,
};

export default methods;
