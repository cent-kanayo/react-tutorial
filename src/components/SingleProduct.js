const SingleProduct = ({
  id,
  image,
  description,
  category,
  rating: { rate, count },
  price,
  title,
  addToCart,
  deleteFromCart,
}) => {
  return (
    <article className="bg-gray-900 p-8">
      <header>
        <h1 className="text-white text-3xl">{title}</h1>
        <img src={image} alt={title} className="w-[400px] h-[500px]" />
      </header>
      <div>
        <h3 className="text-orange-600 text-2xl">{category}</h3>
        <h3 className="text-white text-2xl">{description.slice(0, 100)}...</h3>
        <footer>
          <p className="text-white text-xl">${price}</p>
        </footer>
        <button
          className="bg-orange-600 px-8 py-4 text-gray-900 text-xl rounded-md"
          onClick={() => addToCart(id)}
        >
          Add to cart
        </button>
      </div>
    </article>
  );
};

export default SingleProduct;
