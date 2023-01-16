import Header from '../components/Header';
import Products from '../components/Product';
import { useGlobalContext } from '../context';

const HomePage = () => {
  const { loading, error } = useGlobalContext();

  if (loading) return <h1>Loading......</h1>;
  if (error) return <h1>oops... there is an error</h1>;
  return (
    <>
      <Header />
      <Products />;
    </>
  );
};

export default HomePage;
