import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

const SingleProduct = ({ product }) => {
  const { addToCart, removeFromCart, fetchSingleProduct } = useGlobalContext();
  return (
    <Link to={`/products/${product.id}`}>
      <article className="w-[400px]">
        <h3>{product.category}</h3>
        <img src={product.image} alt="" width="400" />
        <p>{product.category}</p>
      </article>
    </Link>
  );
};

export default SingleProduct;
