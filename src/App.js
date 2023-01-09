import { useReducer } from 'react';
import { useEffect, useState } from 'react';
// import { reducer } from './reducer';

const data = localStorage.getItem('data');
const allProducts = data ? JSON.parse(data) : [];
const initialState = {
  loading: false,
  products: [],
  error: false,
  cart: [],
};

const reducer = (state, action) => {
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
  if (action.type === 'ADD-TO-CART') {
    const getItem = state.products.find((item) => item.id === action.payload);
    if (getItem) {
      return {
        ...state,
        cart: [...state.cart, getItem],
      };
    }
  }
  if (action.type === 'CLEAR-CART') {
    return {
      ...state,
      cart: [],
    };
  }
  throw new Error('No matching action type');
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [user, setUser] = useState({ name: 'david' });
  const url = 'https://fakestoreapi.com/products';
  useEffect(() => {
    const fetchItems = async () => {
      try {
        dispatch({ type: 'SET-LOADING' });
        const response = await fetch(url);
        const allItems = await response.json();
        localStorage.setItem('data', JSON.stringify(allItems));
        dispatch({ type: 'SUCCESS', payload: allItems });
      } catch (error) {
        dispatch({ type: 'SET-ERROR' });
        console.log(error);
      }
    };
    fetchItems();
  }, []);

  const addToCart = (id) => {
    dispatch({ type: 'ADD-TO-CART', payload: id });
  };
  const deleteFromCart = (id) => {
    dispatch({ type: 'DELETE-FROM-CART', payload: id });
  };
  const clearCart = () => {
    dispatch({ type: 'CLEAR-CART' });
  };
  if (state.loading) return <h2>loading...</h2>;
  if (state.error) return <h3>Oops! something went wrong</h3>;
  console.log(state.products);
  return <h1>Happy New Year</h1>;
};

export default App;

//  useEffect(() => {
//    const sum = player1 + player2;
//    if (sum % 2 === 0) {
//      setPlayer1Score(player1Score + 1);
//    } else {
//      setPlayer2core(player2Score + 1);
//    }
//  }, [player1, player2]);
{
  /* <h1>Round: {round}</h1>
      <h1>Player1 score: {player1Score} </h1>
      <h1>Player2 score: {player2Score} </h1>

      <h3>Player1 guess is: {player1}</h3>
      <h3>Player2 guess is: {player2}</h3>
      <button onClick={handlePlay}>Play </button> */
}

// const [user, setUser] = useState({});
// const [username, setUsername] = useState('cent-kanayo');
// const [loading, setLoading] = useState(false);
// const userRef = useRef(null);
// const url = `https://api.github.com/products/${username}`;
// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch(url);
//       const data = await response.json();
//       setUser(data);
//       setLoading(false);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   fetchData();
// }, [username]);
// const handleSubmit = (e) => {
//   e.preventDefault();
//   if (!userRef.current.value) {
//     return;
//   }
//   setUsername(userRef.current.value);
// };
// if (loading) return <h1>Loading...</h1>;
// return (
//   <div>
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         ref={userRef}
//         placeholder="enter your github username"
//       />
//       <button>submit</button>
//     </form>
//     <h1>Github user profile</h1>
//     <h1>{user.name}</h1>
//     <img src={user.avatar_url} alt="" />
//   </div>
// );
