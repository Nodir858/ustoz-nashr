import './App.css'
import { BrowserRouter as  Router, Routes, Route } from 'react-router'
import Home from './components/Home'
import AllBooks from './components/AllBooks'
import Navbar from './components/Navbar'
import ProductPage from './components/ProductPage'
import { CartProvider } from './components/cart-context/CartContext'
import Cart from './components/Cart'
import User from './components/User'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <CartProvider>
      <Navbar></Navbar>
      <div className=''>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/allbooks' element={<AllBooks></AllBooks>}></Route>
          <Route path='/product/:id' element={<ProductPage></ProductPage>}></Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
          <Route path='/user' element={<User></User>}></Route>
        </Routes>
      </div>
      <Footer></Footer>
      </CartProvider>
    </Router>
  )
}

export default App
