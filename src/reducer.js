export const reducer = (state, action) => {
  if (action.type === 'SET-LOADING') {
    return {
      ...state,
      loading: true,
    };
  } else if (action.type === 'SUCCESS') {
    return {
      ...state,
      loading: false,
      products: action.payload,
    };
  } else if (action.type === 'ERROR') {
    return {
      ...state,
      error: true,
      loading: false,
    };
  } else if (action.type === 'ADD-TO-CART') {
    const addedProduct = state.products.find(
      (item) => item.id === action.payload
    );
    return {
      ...state,
      cart: [...state.cart, { ...addedProduct, amount: 1 }],
    };
  } else if (action.type === 'UPDATE-CART') {
    const updateProduct = state.products.find(
      (item) => item.id === action.payload
    );
    return {
      ...state,
      cart: state.cart.map((product) =>
        product.id === updateProduct.id
          ? { ...product, amount: product.amount + 1 }
          : product
      ),
    };
  } else {
    throw new Error('No matching action type');
  }
};
