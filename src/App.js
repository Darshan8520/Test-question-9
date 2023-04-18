import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [item,setItem]=useState([])
  useEffect(()=>{
   axios.get('https://jsonplaceholder.typicode.com/comments')
    .then((resp)=>{
      console.log(resp.data)
      setItem(resp.data)
    })
  },[])
  return (
    <>
    {
      item.map((testdata)=>{
        console.log(testdata)
        return (
          <div>
            <div>{testdata.id}</div>
            <div>{testdata.name}</div>
            <div>{testdata.email}</div>
            <div>{testdata.body}</div>
          </div>
        )
      })
    }
    </>
  )
}

export default App;
