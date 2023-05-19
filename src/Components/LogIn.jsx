import axios from "axios";
import React,{ useContext }  from "react";
import { Button, Form } from "react-bootstrap";
import { Context } from "./Context"; 
import {useNavigate} from 'react-router-dom';
import { useState } from "react";
import {auth} from '../database/firebase'
import { signInWithEmailAndPassword } from "firebase/auth";

export default function LogIn() {
 

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      signInWithEmailAndPassword(auth,email,password).then((userCredentials) => {console.log(userCredentials);}).catch((error) => {console.log(error)})
      console.log('Login successful');
      // Redirect or perform other actions upon successful login
    } catch (error) {
      console.error('Error signing in:', error);
      setError('Invalid email or password');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );


}








 // const {cooki,setCooki} = useContext(Context)
  // const navigate = useNavigate()
  //   function formSubmit(){
  //       event.preventDefault()
  //   const jsonform = new FormData(event.target)
  //   const formdata = Object.fromEntries(jsonform.entries())
  //   console.log(formdata);
  //   axios.get('http://localhost:3000/users')
  //   .then((res)=>{
  //     res.data.map((elem)=>{
  //       if(elem.name==formdata.name&&elem.password==formdata.password){
  //         console.log(elem.name);
  //         localStorage.setItem('login',elem.id)
  //         setCooki('Logout')
  //          navigate('/')
  //         // elem.login=true
  //         // console.log(elem);
  //         // axios.put(`http://localhost:3000/users/${elem.id}`,elem)
  //       }
  //     })
  //   })
    
  //   }

  // return (
  //   <div className="loginmain">
        
  //     <Form className="loginform" onSubmit={formSubmit}>
  //     <Form.Control  type="text" placeholder="Username"  name="name" required  className="input"/>
  //     <Form.Control type="password" placeholder="password"  name="password" required />
  //     <Button variant="secondary" type="submit">Login</Button>
  //     </Form>
      
  //   </div>
  // );