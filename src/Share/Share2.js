import React, { useState } from 'react'
import im from '../Images/share2.jpg'
import Nav from '../Components/Nav.js'
import axios from 'axios'
import '../Share/Share2.css'
const Share2 = () => {
  const [data,setData]=useState()
  const click = (e) =>
  {
      setData(e.target.value)
   
   axios.post("https://jsonplaceholder.typicode.com/posts", data)
      .then(response => {
        console.log("Response:", response);
      
        
      })
      .catch(error => {
        console.error("Error:", error);
      }); 
   
  }

  return (
    <>
    <body style={{backgroundImage:`url(${im})`,
    backgroundPosition:"center",
    backgroundSize:"cover",
    backgroundAttachment:"fixed"
  
  
  }}

    >
    <Nav/>
    
    <div>
      <h1 style={{textAlign:"center", color:"brown",marginTop:"40px" ,marginLeft:"400px"}}>Share Your Healthy Recipe!</h1>
    
    </div>
    <div className='por'> 
      <form className='for'>
        <label className='sh'>Your Name:</label>
        <input className='in1'></input>
        <br/>
        <br/>
        <label className='sh'>Your MobileNo:</label>
        <input className='in2' type='number'></input>
        <br/>
        <br/>
        <label className='sh'>Recipe Title:</label>
        <input className='in3'></input>
        <br/>
        <br/>
        <label className='sh'>Ingredients</label>
        
        <textarea className='in4' type='text'></textarea>
        <br/>
        <br/>
        <br/>
        <label className='sh' >Share Your Recipe:</label>
        <textarea className='in5'onChange={click}></textarea>
      </form>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className='send'>

      <button className='by' >SEND</button>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>



    </body>



    </>
  )
}

export default Share2