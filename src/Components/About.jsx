import React from 'react'
import axios from 'axios'


export default function About() {
    const session = localStorage.getItem('login')
   function onFetch(){
    axios.get('http://localhost:3000/users')
    .then((res)=>console.log(res.data))
   }
  return (
    <div>
        {!session?<h3>please login</h3>:
        <button onClick={onFetch}>check</button>
  }
        </div>
  )
}