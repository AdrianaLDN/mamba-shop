import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from '../src/Components/Home/Home';
import Navbar from './Components/NavBar/Navbar';
import Footer from './Components/Footer/Footer';
import Skirts from './Components/pages/Skirts';
import Trousers from './Components/pages/Trousers';
import TShirts from './Components/pages/TShirts';
import Jumpers from './Components/pages/Jumpers';
import Socks from './Components/pages/Socks';
import Cart from './Components/cart/Cart';
import Checkout from './Components/checkout/Checkout';
import Submit from './Components/submit/Submit';
import { ShopContextProv } from './context/shop-context';

function App () {
    return (
        <ShopContextProv>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/skirts" element={<Skirts />} />
                <Route path="/trousers" element={<Trousers />} />
                <Route path="/tShirts" element={<TShirts />} />
                <Route path="/jumpers" element={<Jumpers />} />
                <Route path="/socks" element={<Socks />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path='/submit' element={<Submit />} />
            </Routes>
            <Footer />
        </Router>
        </ShopContextProv>
    )
}

export default App;