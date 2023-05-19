import { useState} from 'react'
import { Route,Routes,useNavigate } from 'react-router-dom';
import Home from './Components/Home'
import './App.css'
import LogIn from './Components/LogIn'
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './Components/SignUp';
import Product from './Components/Product';
import About from './Components/About';
import Profile from './Components/Profile';
import Cart from './Components/Cart';
import profile from './assets/user.png'
import logo from './assets/cart.png'

import { Context } from './Components/Context';
import Header from './Components/Header';



function App() {
  
  const [cooki, setCooki] = useState('login')
  const secret = {cooki,setCooki}
 
  const navigate = useNavigate()



return (
  <>
 

  <Context.Provider value={secret}>
  <Header/>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/signup' element={<SignUp />} />
    <Route path='/login' element={<LogIn />} />
    <Route path='/profile' element={<Profile />} />
    <Route path='/home' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/about' element={<Product />} />
  </Routes>
  </Context.Provider>
  
  </>
)
}

export default App



