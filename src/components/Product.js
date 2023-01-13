import { useGlobalContext } from '../context';
import SingleProduct from './SingleProduct';

const Product = () => {
  const { products } = useGlobalContext();

  return (
    <>
      <h1>welcome to Product page</h1>
      <section>
        {products.map((product) => {
          return <SingleProduct product={product} key={product.id} />;
        })}
      </section>
    </>
  );
};

export default Product;
