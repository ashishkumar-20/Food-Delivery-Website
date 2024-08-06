import { Routes,Route } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import './index.css';
import Home from './Components/Pages/Home/Home';
import Cart from './Components/Pages/Cart/Cart';
import PlaceOrder from './Components/Pages/PlaceOrder/PlaceOrder';
import Footer from './Components/Footer/Footer';
import { useState } from 'react';
import Login from './Components/Login/Login';
const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <Login setShowLogin={setShowLogin} />:<></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Cart' element={<Cart />} />
            <Route path='/PlaceOrder' element={<PlaceOrder/>} /> 
          </Routes>
      </div>
      <Footer />
    </>
  )
}
export default App;