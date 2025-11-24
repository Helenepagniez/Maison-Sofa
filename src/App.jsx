import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductConfigurator from './components/ProductConfigurator';
import CartModal from './components/CartModal';
import Checkout from './pages/Checkout';
import Confirmation from './pages/Confirmation';
import Home from './pages/Home';
import Footer from './components/Footer';
import Legal from './pages/Legal';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';

import PageHeader from './components/PageHeader';

const App = () => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    const parsedCart = savedCart ? JSON.parse(savedCart) : [];
    // Filter out invalid items (e.g. missing selectedColor) to prevent crashes
    return parsedCart.filter(item => item.selectedColor && item.selectedColor.id);
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item =>
        item.id === product.id && item.selectedColor.id === product.selectedColor.id
      );
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id && item.selectedColor.id === product.selectedColor.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (itemId, colorId) => {
    setCartItems(prevItems => prevItems.filter(item => !(item.id === itemId && item.selectedColor.id === colorId)));
  };

  const updateQuantity = (itemId, colorId, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(prevItems => prevItems.map(item =>
      item.id === itemId && item.selectedColor.id === colorId
        ? { ...item, quantity: newQuantity }
        : item
    ));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <Router>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)} onOpenCart={() => setIsCartOpen(true)} />
        <main style={{ flex: 1 }}>
          <PageHeader />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductConfigurator onAddToCart={addToCart} />} />
            <Route path="/checkout" element={<Checkout cartItems={cartItems} total={cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)} onClearCart={clearCart} />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart cartItems={cartItems} onRemove={removeFromCart} onUpdateQuantity={updateQuantity} />} />
          </Routes>
        </main>
        <Footer />
        <CartModal
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          onRemove={removeFromCart}
          onUpdateQuantity={updateQuantity}
        />
      </div>
    </Router>
  );
};

export default App;
