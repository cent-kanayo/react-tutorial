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
      products: action.payload,
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
