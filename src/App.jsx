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
import { products } from './data/products';

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

  const updateColor = (itemId, oldColorId, newColorId) => {
    setCartItems(prevItems => {
      // 1. Find the item we want to update
      const itemToUpdate = prevItems.find(item => item.id === itemId && item.selectedColor.id === oldColorId);
      if (!itemToUpdate) return prevItems;

      // 2. Find the new color object from the products data
      // Extract the original model ID (e.g., "model-1" from "model-1-col-1-0")
      // The composite ID format is `${activeProduct.id}-${selectedColor.id}`
      // selectedColor.id is like `col-1-0`.
      // So splitting by the first occurrence of `-${newColorId.split('-').slice(0, 2).join('-')}` might be tricky if IDs vary.
      // Simpler: iterate products to find the one that matches the item name or description, or just parse assuming the format.
      // Let's rely on the fact that item.id (composite) starts with the model ID.
      // Actually, wait. item.id IS the composite ID now.
      // "model-1-col-1-0".
      // We can split by '-col-' to get the model ID part.
      const modelId = itemToUpdate.id.split('-col-')[0];
      const product = products.find(p => p.id === modelId);

      if (!product) return prevItems; // Should not happen

      const newColor = product.colors.find(c => c.id === newColorId);
      if (!newColor) return prevItems;

      // 3. Check if an item with this new color already exists in the cart
      // The new composite ID would be `${modelId}-${newColorId}`
      const newCompositeId = `${modelId}-${newColorId}`;

      const existingItemWithNewColor = prevItems.find(item =>
        item.id === newCompositeId && item.selectedColor.id === newColorId
      );

      if (existingItemWithNewColor) {
        // Merge: remove the old item, update the existing new-color item's quantity
        return prevItems.map(item => {
          if (item.id === newCompositeId && item.selectedColor.id === newColorId) {
            return { ...item, quantity: item.quantity + itemToUpdate.quantity };
          }
          return item;
        }).filter(item => !(item.id === itemId && item.selectedColor.id === oldColorId));
      } else {
        // Just update the color and ID of the current item
        return prevItems.map(item =>
          item.id === itemId && item.selectedColor.id === oldColorId
            ? { ...item, selectedColor: newColor, id: newCompositeId }
            : item
        );
      }
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar
          cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
          onOpenCart={() => setIsCartOpen(true)}
        />

        <main style={{ flex: 1 }}>
          <PageHeader />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductConfigurator onAddToCart={addToCart} />} />
            <Route
              path="/checkout"
              element={
                <Checkout
                  cartItems={cartItems}
                  total={cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}
                  onClearCart={clearCart}
                />
              }
            />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/cart"
              element={
                <Cart
                  cartItems={cartItems}
                  onRemove={removeFromCart}
                  onUpdateQuantity={updateQuantity}
                  onUpdateColor={updateColor}
                  products={products}
                />
              }
            />
          </Routes>
        </main>

        <Footer />

        <CartModal
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          onRemove={removeFromCart}
          onUpdateQuantity={updateQuantity}
          onUpdateColor={updateColor}
          products={products}
        />
      </div>
    </Router>
  );
};

export default App;
