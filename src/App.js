import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/itemListConteiner/itemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import Cart from './components/Cart/Cart';
import { CartContextProvider } from './context/CartContext';
import Checkout from './components/Checkout/Checkout';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        <CartContextProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} /> 
            <Route path="*" element={<h1>404 not found</h1>} />
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
