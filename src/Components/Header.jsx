import React, { useContext } from 'react'
import { Button, Container, Navbar, Nav,Image } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import LogIn from './LogIn'
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './SignUp';
import Product from './Product';
import About from './About';
import Profile from './Profile';
import Cart from './Cart';
import profile from '../assets/user.png'
import logo from '../assets/cart.png'




import { Context } from './Context';
function Header() {
  const data = useContext(Context)
  const {cooki,setCooki} = data
  return (
    <div>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
   <Container>
  <Navbar.Brand >
            <h2 className="fs-1 p-2 ">FurnyStore</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" > </Nav>
          <Nav className="mainoption">
          <NavLink to="/"> Home</NavLink>
          <NavLink to="/product"> Products</NavLink>
              
              <NavLink to="/signup"> Sign Up</NavLink>
              <NavLink to="/about"> About Us</NavLink>
              <NavLink to="/profile">
                Profile
                <Image src={profile} alt="profile" height={20} width={20} />
              </NavLink>
              <NavLink to="/cart">Cart
              <img src={logo} alt="cart" width={25} height={25} srcset="" />
              </NavLink>
             
              <NavLink>
                <Button  variant='outline-secondary'
                  onClick={()=>{
                    if(localStorage.getItem('login')){
                      localStorage.clear()
                      setCooki('Login')
                      navigate('/')
                    }
                  }}
                  size="sm"
                  className="logout"
                  >
                  <div className='login-btn'>
                  <NavLink to="/login"> {cooki}</NavLink>
                </div>
                </Button>
                </NavLink>
          </Nav>
          </Navbar.Collapse>
          </Container>
          </Navbar>
  
    {/* <Home /> */}
      
    </div>
  )
}

export default Header
