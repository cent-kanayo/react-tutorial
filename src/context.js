import axios from 'axios';
import React from 'react';
import { customFetch } from './axios/util';
import { reducer } from './reducer';

const AppContent = React.createContext();

const initialState = {
  products: [],
  categories: [],
  loading: false,
  error: false,
  singleProduct: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  // const url = 'https://fakestoreapi.com/products';
  // const categoriesUrl = 'https://fakestoreapi.com/products/categories';
  // const categoryUrl = 'https://fakestoreapi.com/products/category';

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: 'SET-LOADING' });
        const response = await customFetch();
        const { data } = await customFetch('/categories');
        dispatch({
          type: 'SUCCESS',
          payload: { products: response.data, categories: data },
        });
      } catch (error) {
        dispatch({ type: 'SET_ERROR' });
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const addToCart = (id) => {};
  const removeFromCart = (id) => {};

  const fetchByCategory = async (category) => {
    try {
      dispatch({ type: 'SET-LOADING' });
      const { data } = await customFetch(`/category/${category}`);
      dispatch({ type: 'CATEGORY-PRODUCTS', payload: data });
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchSingleProduct = async (id) => {
    try {
      dispatch({ type: 'SET-LOADING' });
      const { data } = await customFetch(`/${id}`);
      dispatch({ type: 'SINGLE-PRODUCT', payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <AppContent.Provider
      value={{
        ...state,
        addToCart,
        removeFromCart,
        fetchByCategory,
        fetchSingleProduct,
      }}
    >
      {children}
    </AppContent.Provider>
  );
};

export const useGlobalContext = () => {
  return React.useContext(AppContent);
};
export default AppProvider;
