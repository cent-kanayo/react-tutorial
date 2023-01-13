import { useGlobalContext } from '../context';

const SingleProduct = ({ product }) => {
  const { addToCart, removeFromCart } = useGlobalContext();
  return (
    <article>
      <h3>{product.category}</h3>
      <img src={product.image} alt="" width="400" />
    </article>
  );
};

export default SingleProduct;
