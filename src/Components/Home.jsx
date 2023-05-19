import React,{useContext} from "react";

import { Button, Container, Navbar, Nav,Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../assets/cart.png";
import profile from "../assets/user.png";
import cover from '../assets/cover.png'

export default function Home() {

  return (
    <>
      <header className="bg-danger sticky-sm-top">

        <div className="catagories">
          <NavLink>Sofa</NavLink>
          <NavLink>Chair</NavLink>
          <NavLink>Mattresses</NavLink>
          <NavLink>Tables</NavLink>
          <NavLink>Cupbord</NavLink>
        </div>
      </header>
      <section>
        
        <div className="d-flex flex-column align-items-center p-3">
          <Image src={cover} fluid style={{ height: '40vh', width: '180vh' }} />
         
          <h3 className="p-3">Shop By Categories </h3>
        </div>
        </section> 
    </>
  );
}

{
  /* <div className='heading'>
<h2 className='fs-1 p-2 '>Furniture</h2>
<div className='d-flex p-3'>
<NavLink >Cart<img src={logo} alt="cart" width={25} height={25} srcset="" /></NavLink>
<Button onClick={()=>{localStorage.clear(); window.location.reload() }} size='sm' className='logout'>Logout</Button>
</div>
</div> */
}
