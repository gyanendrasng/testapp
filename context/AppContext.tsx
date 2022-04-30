/*context.tsx*/

import { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

type ProductType = {
  id: number;
  name: string;
  price: number;
};

type InitialStateType = {
  products: ProductType[];
  shoppingCart: number;
};

const initialState = {
  products: [],
  shoppingCart: 0,
};

const AppContext = createContext<InitialStateType>(initialState);

type Props = {
  children: any;
};

const AppProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const value = { state, dispatch };
  return (
    <AppContext.Provider value={value as InitialStateType}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
