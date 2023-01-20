import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../context';

const SingleProduct = () => {
  const { fetchSingleProduct, singleProduct } = useGlobalContext();
  const { id } = useParams();

  useEffect(() => {
    fetchSingleProduct(id);
  }, [id]);

  return (
    <div>
      <img src={singleProduct?.image} alt="" width="400" />
      <p>{singleProduct?.title}</p>
    </div>
  );
};

export default SingleProduct;
