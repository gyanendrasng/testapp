/*context.tsx*/

import { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

type ProductType = {
  id: number;
  title: string;
  description: string;
  price: number;
  img: string;
  qty: number;
  category: string;
};

type InitialStateType = {
  products: ProductType[];
  shoppingCart: number;
  isOpenCartDrawer: boolean;
  isOpenMenuDrawer: boolean;
  isProductsFetching: boolean;
  cartList: ProductType[];
  dispatch: any;
  state: any;
};

const initialState = {
  products: [],
  shoppingCart: 0,
  cartList: [],
  isOpenCartDrawer: false,
  isOpenMenuDrawer: false,
  isProductsFetching: false,
  dispatch: {},
  state: {},
};

const AppContext = createContext<InitialStateType>(initialState);

type Props = {
  children: any;
};

const AppProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const value = { state, dispatch };
  return (
    <AppContext.Provider value={value as any}>{children}</AppContext.Provider>
  );
};

export { AppContext, AppProvider };
