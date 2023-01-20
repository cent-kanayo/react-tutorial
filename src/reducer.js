export const reducer = (state, action) => {
  if (action.type === 'SET-LOADING') {
    return {
      ...state,
      loading: true,
    };
  }
  if (action.type === 'SUCCESS') {
    return {
      ...state,
      products: action.payload.products,
      categories: action.payload.categories,
      loading: false,
    };
  }
  if (action.type === 'CATEGORY-PRODUCTS') {
    return {
      ...state,
      products: action.payload,
      loading: false,
    };
  }
  if (action.type === 'SINGLE-PRODUCT') {
    return {
      ...state,
      singleProduct: action.payload,
      loading: false,
    };
  }
  if (action.type === 'SET-ERROR') {
    return {
      ...state,
      error: true,
      loading: false,
    };
  }
  throw new Error('No matching Data');
};
