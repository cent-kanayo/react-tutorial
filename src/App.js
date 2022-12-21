import React, { useEffect, useState } from 'react';
import { useReducer } from 'react';
import Products from './components/Products';

import { reducer } from './reducer';

const App = () => {
  const initialState = {
    products: [],
    cart: [],
    loading: false,
    error: false,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state.cart);
  const addToCart = (id) => {
    const productInCart = state.cart.find((item) => item.id === id);
    if (productInCart) {
      dispatch({ type: 'UPDATE-CART', payload: id });
    } else {
      dispatch({ type: 'ADD-TO-CART', payload: id });
    }
  };
  const amount = state.cart.reduce((acc, product) => {
    return (acc += product.amount);
  }, 0);
  const deleteFromCart = () => {};

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: 'SET-LOADING' });
        const resp = await fetch('https://fakestoreapi.com/products');
        const data = await resp.json();
        dispatch({ type: 'SUCCESS', payload: data });
        console.log(data);
      } catch (error) {
        dispatch({ type: 'ERROR' });
        console.log(error);
      }
    };
    fetchData();
  }, []);
  if (state.loading) return <h1>Loading...</h1>;
  if (state.error) return <h1>Oops! something went wrong</h1>;
  return (
    <div>
      <span className="fixed right-10 top-2 bg-gray-900 text-white p-2 text-2xl">
        {amount}
      </span>
      <h1>useReducer & useContext</h1>
      <Products
        products={state.products}
        addToCart={addToCart}
        deleteFromCart={deleteFromCart}
      />
    </div>
  );
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
