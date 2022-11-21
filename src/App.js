import { useRef, useState } from 'react';

const App = () => {
  // const [userInfo, setUserInfo] = useState({
  //   username: '',
  //   password: '',
  //   email: '',
  // });

  const username = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const [users, setUsers] = useState([]);
  // const handleChange = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   setUserInfo((prev) => {
  //     return {
  //       ...prev,
  //       [name]: value,
  //     };
  //   });
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = username.current.value;
    const userEmail = email.current.value;
    const userPassword = password.current.value;

    const user = { username: name, email: userEmail, password: userPassword };
    setUsers((prev) => [...prev, user]);
  };
  return (
    <div>
      <h1>Register new User</h1>
      <form
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="">Username: </label>
        <input type="text" required ref={username} />
        <label htmlFor="">Email: </label>
        <input type="text" required ref={email} />
        <label htmlFor="">Password: </label>
        <input type="text" ref={password} required />
        <button>Submit</button>
      </form>
      <div>
        {users.map((user, index) => {
          return (
            <article key={index}>
              <h1>{user.username}</h1>
              <h3>{user.email}</h3>
              <h3>{user.password}</h3>
            </article>
          );
        })}
      </div>
    </div>
  );
};
export default App;

// const [count, setCount] = useState(0);
// const [userInput, setUserInput] = useState(null);
// const handleSubmit = (e) => {
//   e.preventDefault();
//   const value = +userInput || 0;
//   setCount(count + value);
// };
// return (
//   <div style={{ display: 'grid', gap: '10px', placeItems: 'center' }}>
//     <h2>Welcome to my count app</h2>
//     <h1>{count}</h1>
//     <div style={{ fontSize: '36px', display: 'flex', gap: '10px' }}>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//       <button onDoubleClick={() => setCount(0)}>Reset</button>
//       <button onClick={() => setCount(count - 1)}>Decrease</button>
//     </div>
//     <form onSubmit={handleSubmit}>
//       <label>Enter a number</label>
//       <input
//         type="text"
//         value={userInput}
//         onChange={(e) => setUserInput(e.target.value)}
//       />
//       <button>Submit</button>
//     </form>
//   </div>
// );
