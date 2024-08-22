import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Product from './components/Product'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import ProductDetail from './components/ProductDetail'
import SearchItem from './components/SearchItem'
import Cart from './components/Cart'
import OrderDetail from './components/OrderDetail'
import OrderSuccess from './components/OrderSuccess'
import { getProducts } from './service/apiCalls.jsx'

const App = () => {
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState([]);
  const [apiData, setApiData] = getProducts();
  return (
    <>
    <Router>
    <Navbar cart={cart} setApiData={setApiData} />
    <Routes>
      <Route path="/" element={<Product cart={cart} setCart={setCart} items={apiData} />} />
      <Route path="/product/:id" element={<ProductDetail cart={cart} setCart={setCart} items={apiData} />} />
      <Route path="/search/:term" element={<SearchItem cart={cart} setCart={setCart} items={apiData}/>} />
      <Route path="/cart" element={<Cart cart={cart} setCart={setCart} order={order} setOrder={setOrder}/>} />
      <Route path="/order-success" element={<OrderSuccess order={order} />} />
      <Route path="/order-detail" element={<OrderDetail order={order} />} />
    </Routes>
  
    </Router>
    </>
  )
}

export default App