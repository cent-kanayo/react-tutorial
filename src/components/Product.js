import { useGlobalContext } from '../context';
import SingleProduct from './SingleProduct';

const Products = () => {
  const { products, categories, fetchByCategory } = useGlobalContext();

  return (
    <>
      <h1>welcome to Product page</h1>
      <div className="bg-orange-200 my-9 py-9 px-4 w-auto">
        {categories?.map((category, index) => (
          <button
            key={index}
            className="m-3 px-8 py-4 bg-white"
            onClick={() => fetchByCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <section className="flex justify-center gap-5 flex-wrap">
        {products?.map((product) => {
          return <SingleProduct product={product} key={product.id} />;
        })}
      </section>
    </>
  );
};

export default Products;
