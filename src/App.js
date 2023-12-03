import Header from "./components/Header"
import {Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import Employees from "./components/Employees"
import Products from "./components/Products"
import SingleProduct from "./components/SingleProduct"
import Cart from "./components/Cart"
import NotFound from "./components/NotFound"
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/employees" element={<Employees/>}/>
        <Route path="/products" element={<Products/>}/>
          <Route path="/products/:id" element={<SingleProduct/>}>
        </Route>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
