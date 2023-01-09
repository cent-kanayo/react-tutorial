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
      loading: false,
      products: action.payload,
    };
  }
  if (action.type === 'SET-ERROR') {
    return {
      ...state,
      loading: false,
      error: true,
    };
  }
  throw new Error('No matching action type');
  //   switch (action.type) {
  //     case 'SET-LOADING':
  //       return {
  //         ...state,
  //         loading: true,
  //       };
  //     case 'SUCCESS':
  //       return {
  //         ...state,
  //         loading: false,
  //       };
  //     case 'SET-ERROR':
  //       return {
  //         ...state,
  //         loading: false,
  //         error: true,
  //       };
  //     default:
  //       throw new Error('No matching action type');
  //   }
};
