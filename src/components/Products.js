import SingleProduct from './SingleProduct';

const Products = ({ products, addToCart, deleteFromCart }) => {
  return (
    <div>
      <h2 className="text-red-600 font-bold text-3xl">Latest Products </h2>
      <div className="flex justify-center flex-wrap gap-10">
        {products.map((product) => {
          return (
            <SingleProduct
              key={product.id}
              {...product}
              addToCart={addToCart}
              deleteFromCart={deleteFromCart}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
