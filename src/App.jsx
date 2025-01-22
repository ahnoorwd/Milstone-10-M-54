
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
  
  const handleadduser =e=>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user ={name,email}
    console.log(user);
// there we from the data we send to the server site from the client site 
    fetch('http://localhost:5000/users',{
    method:'POST',
    headers:{
      'content-type': 'application/json'
    },
    body:JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log('inside post response',data);
    })
  }





  return (
    <>
     
      <h1>Users menagment system </h1>
      <form onSubmit={handleadduser}>

      <input type="text"  name='name' placeholder='name' /><br /><p></p>
      <input type="text"  name='email' placeholder='email' /><br /><p></p>
      <input type="submit"  value="Addsubmit" />

      </form>
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
