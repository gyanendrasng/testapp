/*reducers.ts*/
import { TOGGLE_CART_DRAWER } from './types';
const cartReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_CART_DRAWER:
      state = {
        ...state,
        isOpenCartDrawer: !state.isOpenCartDrawer,
      };
      return state;
    default:
      return state;
  }
};
export default cartReducer;
