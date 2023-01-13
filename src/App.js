import Product from './components/Product';
import { useGlobalContext } from './context';

const App = () => {
  const { loading, error } = useGlobalContext();

  if (loading) return <h1>Loading......</h1>;
  if (error) return <h1>oops... there is an error</h1>;
  return (
    <div>
      <Product />
    </div>
  );
};

export default App;
