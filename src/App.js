import React from 'react';
import './App.css';
import ProductCard from './components/ProductCard';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieConsent from 'react-cookie-consent';

const App = () => {
  const products = [
    { id: 1, name: 'Smartphone X200', price: '$799', image: '/img/smartphone.jpg' },
    { id: 2, name: '4K Ultra TV', price: '$1499', image: '/img/tv.jpg' },
    { id: 3, name: 'Wireless Headphones', price: '$299', image: '/img/headphones.jpg' },
    { id: 4, name: 'Gaming Laptop Z5', price: '$1899', image: '/img/laptop.jpg' },
    { id: 5, name: 'Smartwatch Elite', price: '$399', image: '/img/smartwatch.jpg' },
    { id: 6, name: 'Bluetooth Speaker Pro', price: '$199', image: '/img/speaker.jpg' },
  ];

  return (
      <div className="app">
        <Header />
        <main className="product-grid">
          {products.map(p => <ProductCard key={p.id} {...p} />)}
        </main>
        <Footer />
        <CookieConsent>This site uses cookies to enhance the user experience.</CookieConsent>
      </div>
  );
};

export default App;