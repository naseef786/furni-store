import axios from 'axios'
import React from 'react'
// import { CookiContext } from '../App'

export default function Profile() {
    
    // const {cooki} = useContext(CookiContext)

    const session = localStorage.getItem('login')
        axios.get('http://localhost:3000/users')
        .then((res)=>{
           res.data.map((ele)=>{
            if(ele.id==session){
                console.log(ele);
            }
           })
        })
   
  return (
    <>
    {session?<h2>profile</h2>:
     <h2>please Login</h2>
    }
    </>
  )
}