import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login';
import About from "./pages/About";
import  Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import Product from "./pages/Product";
import Products from "./pages/Products";
import Register from "./pages/Register";
// import { all } from '@awesome.me/kit-KIT_CODE/icons'

function App() {
  // library.add(...all)
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = '/' element = {<Home />} >
            <Route path = '/login' element = {<Login />} />
            <Route path = '/register' element = {<Register />} />
            <Route path = '/products' element = {<Products />} />
            <Route path = '/product' element = {<Product />} />
            <Route path = '/about' element = {<About />} />
            <Route path = '/contact' element = {<Contact />} />
            <Route path = '/cart' element = {<Cart />} />
            <Route path = '/checkout' element = {<Checkout />} />
            <Route path = '/*' element = {<PageNotFound />} />
          </Route>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
