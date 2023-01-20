import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import SingleProduct from './pages/SingleProduct';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="products/:id" element={<SingleProduct />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
