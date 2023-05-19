import axios from 'axios'
import React, { useEffect, useState } from 'react'


export default function Product() {

  useEffect(()=>{
    axios.get('http://localhost:3000/product')
    .then((res)=>{
      console.log(res.data);
     
    })
  },[])


    const session = localStorage.getItem('login')
 
  return (
    <>
    {!session?
    <div>please login</div>:
    <>
    <div>Product</div>
    <button >jgh</button>
    </>
    }
    </>

  )
}