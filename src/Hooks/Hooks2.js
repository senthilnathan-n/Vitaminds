import React, { useState } from 'react'

const Hooks2 = (props) => {
    const[result,setResult]=useState()
    const validate=()=>
    {
        if(props.data==2)
        {
                setResult("you reached 2")
        }
    }

  return (
    <div>
        <h1>Hook2</h1>
            {validate}
        <h1>{props.data}</h1>
        <h1>{props.result}</h1>
    </div>
  )
}

export default Hooks2