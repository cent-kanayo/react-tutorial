import React from 'react';
import { reducer } from './reducer';

const AppContent = React.createContext();

const initialState = {
  products: [],
  loading: false,
  error: false,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const url = 'https://fakestoreapi.com/products';

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: 'SET-LOADING' });
        const response = await fetch(url);
        const data = await response.json();
        dispatch({ type: 'SUCCESS', payload: data });
        console.log(data);
      } catch (error) {
        dispatch({ type: 'SET_ERROR' });
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const addToCart = (id) => {};
  const removeFromCart = (id) => {};

  return (
    <AppContent.Provider value={{ ...state, addToCart, removeFromCart }}>
      {children}
    </AppContent.Provider>
  );
};

export const useGlobalContext = () => {
  return React.useContext(AppContent);
};
export default AppProvider;
