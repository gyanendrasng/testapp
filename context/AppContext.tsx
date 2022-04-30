/*context.tsx*/

import { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

type ProductType = {
  id: number;
  title: string;
  description: string;
  price: number;
  img: string;
};

type InitialStateType = {
  products: ProductType[];
  shoppingCart: number;
  isOpenCartDrawer: boolean;
};

const initialState = {
  products: [],
  shoppingCart: 0,
  isOpenCartDrawer: false,
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
