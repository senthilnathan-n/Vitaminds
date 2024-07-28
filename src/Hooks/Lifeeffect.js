import React, { useEffect, useState } from 'react'

const Lifeeffect = () => {


  const [update,setUpdate]=useState(true);
    useEffect(() => {
        
        setTimeout(()=>{
          setUpdate(!(update))
        },1000)

    });
  return (
    <>
    {!update &&

   
    <h1>hello</h1>
    }
    
    
    </>
  )
}

export default Lifeeffect