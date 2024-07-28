import React, { useState } from 'react'
import Hooks2 from './Hooks2';


const Hooks = () => {

     const [count,setCount]=useState(0);
     const [input,setInput]=useState();
     const increment=()=>
     {
            setCount(count+1);
     }
     const handle=(e)=>
     {
        setInput(e.target.value)
     }

  return (
    <div><h1>hook1</h1>
    <h1>{count}</h1>
    <button onClick={increment}>+</button>
    <input onChange={handle}></input>
    <Hooks2 data={count} in={input}/>
    
    </div>
  )
}

export default Hooks