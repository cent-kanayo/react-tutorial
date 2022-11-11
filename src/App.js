import { useState } from 'react';
const products = [
  {
    id: 1,
    desc: 'The best crocs in town',
    image:
      'https://images-na.ssl-images-amazon.com/images/I/81WnMBnbWSL._AC_UL450_SR450,320_.jpg',
    title: 'Crocs, unisex',
    rating: 'Rating: 12,000',
    price: 'Starting from $10',
  },
  {
    id: 2,
    desc: 'Hoodies are so fun to wear',
    image:
      'https://images-na.ssl-images-amazon.com/images/I/61n+vIfzOKL._AC_UL450_SR450,320_.jpg',
    title: 'Hoodie',
    rating: 'Rating: 12,000',
    price: 'Starting from $10',
  },
  {
    id: 3,
    desc: 'Can never go wrong with socks',
    image:
      'https://images-na.ssl-images-amazon.com/images/I/817EpDqsL-L._AC_UL450_SR450,320_.jpg',
    title: 'Socks',
    rating: 'Rating: 12,000',
    price: 'Starting from $10',
  },
  {
    id: 4,
    desc: 'Can never go wrong with socks',
    image:
      'https://images-na.ssl-images-amazon.com/images/I/817EpDqsL-L._AC_UL450_SR450,320_.jpg',
    title: 'Cooking',
    rating: 'Rating: 12,000',
    price: 'Starting from $10',
  },
];

const App = () => {
  const [name, setName] = useState('Precious');
  return (
    <>
      <h1>My name is {name}</h1>
      <button onClick={() => setName('Blessing')}>Change name</button>
      <h1>Best Sellers in Clothing, Shoes & Jewelry</h1>
      <div className="item">
        {products.map((product) => {
          const { id, title, image, desc, rating, price } = product;
          return (
            <article className="single-product">
              <Product
                key={id}
                title={title}
                image={image}
                rating={rating}
                price={price}

                // {...product}
              />
            </article>
          );
        })}
      </div>
    </>
  );
};

const Product = ({ desc, image, title, rating, price }) => {
  return (
    <>
      <img src={image} alt="product avartar" width="300" />
      <p>{desc}</p>
      <h4>{title}</h4>
      <p>{rating}</p>
      <p>{price}</p>
    </>
  );
};

// const Product1 = () => {
//   return (
//     <>
//       <img
//         src="https://images-na.ssl-images-amazon.com/images/I/61n+vIfzOKL._AC_UL450_SR450,320_.jpg"
//         alt="product avartar"
//         width="300"
//       />
//       <h4>Hoodie</h4>
//       <p>Rating: 14,000</p>
//       <p>Starting from $10</p>
//     </>
//   );
// };

// const Product2 = () => {
//   return (
//     <>
//       <img
//         src="https://images-na.ssl-images-amazon.com/images/I/817EpDqsL-L._AC_UL450_SR450,320_.jpg"
//         alt="product avartar"
//         width="300"
//       />
//       <h4>Socks</h4>
//       <p>Rating: 8,000</p>
//       <p>Starting from $5</p>
//     </>
//   );
// };

// const Image = () => {
//   return (
//     <img
//       src="https://images-na.ssl-images-amazon.com/images/I/81WnMBnbWSL._AC_UL450_SR450,320_.jpg"
//       alt="product avartar"
//       width="300"
//     />
//   );
// };

// const Title = () => {
//   return <h4>Crocs, unisex</h4>;
// };

// const Rating = () => {
//   return <p>Rating: 12,000</p>;
// };

// function Price() {
//   return <p>Starting from $10</p>;

// }

// <Product
//   desc="The best crocs in town"
//   image="https://images-na.ssl-images-amazon.com/images/I/81WnMBnbWSL._AC_UL450_SR450,320_.jpg"
//   title="Crocs, unisex"
//   rating="Rating: 12,000"
//   price="Starting from $10"
// />
// <Product
//   desc="Hoodies are so fun to wear"
//   image="https://images-na.ssl-images-amazon.com/images/I/61n+vIfzOKL._AC_UL450_SR450,320_.jpg"
//   title="Hoodie"
//   rating="Rating: 12,000"
//   price="Starting from $10"
// />
// <Product
//   desc="Can never go wrong with socks"
//   image="https://images-na.ssl-images-amazon.com/images/I/817EpDqsL-L._AC_UL450_SR450,320_.jpg"
//   title="Socks"
//   rating="Rating: 12,000"
//   price="Starting from $10"
// />
export default App;
