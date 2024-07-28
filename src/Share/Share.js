import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios'
const Share = () => {
  const [tododata,setTododata]=useState([]);
  const [input,setInput]=useState();
  const [view,setView]=useState(false);
  useEffect(() => {
    axios.get("https://dummyjson.com/recipes")
      .then(response=>{
        console.log("----->>>>>",response.data.recipes)
        
      })
  }, []);

  const Change = (e) =>
  {
    setInput(e.target.value);
  }
  const Click = () =>
  {
    const userData = {
      value: input,
    
    };
   
   axios.post("https://jsonplaceholder.typicode.com/posts", userData)
      .then(response => {
        console.log("Response:", response);
      
        
      })
      .catch(error => {
        console.error("Error:", error);
      }); 
   
  }
  const Show = () =>
  {
    setView(true)
  }
  const Delete = (id) =>
  {
    console.log("delete============>>>>")
    axios.delete(`https://jsonplaceholder.typicode.com/todos${id}`);
    setTododata(tododata.filter(task => task.id !== id));
console.log("setodo========>>>>>",tododata)
  }
  return (
    <div>
      <center>
        <h1>BasicCrud</h1>
        <input onChange={Change} ></input>
        <button onClick={Click}>ADD</button>
        <br></br>
        <br></br>
        <h1></h1>
        <button onClick={Show}>View</button>
        {

          tododata.map(index => (
            <div>
          <p key={index.id}>{index.title}</p>
          
          
          </div>
        
          ))
        }
        
          
        </center>
    </div>
  )
}

export default Share