import { useState } from 'react';
import AboutUs from './AboutUs.jsx';
import ProductList, { ShopNavigation } from './ProductList.jsx';
import CartItem from './CartItem.jsx';
import './App.css';

export default function App() {
  const [page, setPage] = useState('home');
  function navigate(next) {
    setPage(next);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
  if (page === 'home') {
    return (
      <main className="landing">
        <div className="hero">
          <p className="eyebrow">A little green goes a long way</p>
          <h1>Welcome to Paradise Nursery</h1>
          <p className="tagline">Bring nature home.</p>
          <button onClick={() => navigate('plants')}>Get Started</button>
        </div>
        <AboutUs />
      </main>
    );
  }
  return (
    <>
      <ShopNavigation page={page} navigate={navigate} />
      {page === 'plants' ? <ProductList /> : <CartItem onContinue={() => navigate('plants')} />}
    </>
  );
}
