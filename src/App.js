import React, { useEffect, useState } from 'react';

const App = () => {
  const userLi = localStorage.getItem('user');
  const userList = userLi ? JSON.parse(userLi) : [];
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [users, setUsers] = useState(userList);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      username: username,
      password: password,
      email: email,
      id: new Date().getTime(),
    };
    setUsers((prev) => [...prev, newUser]);
  };
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(users));
  }, [users]);
  const handleClick = (id) => {
    setUsers(users.filter((user) => user.id === id));
  };
  return (
    <div>
      <h1>Controlled form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Username: </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="">Email: </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="">Password: </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        {users.map((user) => (
          <article key={user.id}>
            <h3>{user.username}</h3>
            <h3>{user.email}</h3>
            <h3>{user.password}</h3>
            <button type="button" onClick={() => handleClick(user.id)}>
              delete
            </button>
          </article>
        ))}
      </div>
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
