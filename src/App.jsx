
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {
  
   const [users,setusers] = useState([]);
   useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then(res=>res.json())
    .then(data=>setusers(data))
   },[])

  return (
    <>
     
      <h1>Users menagment system </h1>
      <h3>Total users are there : {users.length}</h3>
      
      <div>
        {
          users.map(user=> <p key={user.id}>{user.id}: {user.name} : {user.email}</p>)
        }
      </div>
      
    </>
  )
}

export default App
