import { useEffect, useRef, useState } from 'react';

const App = () => {
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2core] = useState(0);
  const [player1, setPlayer1] = useState(0);
  const [player2, setPlayer2] = useState(0);
  const [round, setRound] = useState(1);

  const handlePlay = () => {
    const player1 = Math.floor(Math.random() * 10) + 1;
    const player2 = Math.floor(Math.random() * 10) + 1;
    setPlayer1(player1);
    setPlayer2(player2);
    setRound(round + 1);
  };
  useEffect(() => {
    const sum = player1 + player2;
    if (sum % 2 === 0) {
      setPlayer1Score(player1Score + 1);
    } else {
      setPlayer2core(player2Score + 1);
    }
  }, []);

  return (
    <div>
      <h1>Round: {round}</h1>
      <h1>Player1 score: {player1Score} </h1>
      <h1>Player2 score: {player2Score} </h1>

      <h3>Player1 guess is: {player1}</h3>
      <h3>Player2 guess is: {player2}</h3>
      <button onClick={handlePlay}>Play </button>
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
// const url = `https://api.github.com/users/${username}`;
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
