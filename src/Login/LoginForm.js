import React, { useState } from 'react';
import './LoginForm.css';
//import { NavLink } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import im from '../Images/Vita.png'
import im1 from '../Images/backg4.jpg'
import im2 from '../Images/fff.jpg'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Alert from '@mui/material/Alert';
const LoginForm = (props) => {
    const [data,setData]=useState(false)
    const [data1,setData1]=useState(false)
    const [input,setInput]=useState(0);
    const [al,setAl]=useState(true);
    const [ag,setAg]=useState(true);

    const [pass,setPass]=useState();
    const [user,setUser]=useState();

    const[passapi ,setPassapi]=useState();
    const[userapi,setUserapi]=useState();

    const [error,setError]=useState();
    const [print,setPrint]=useState(true);
    const [user1,setUser1]=useState(false);

    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response =>{
       
        console.log("--------->>",response)
        const userdata=response.data;
        const use=userdata.find(use=>use.email === user && use.username===pass)
        if(use)
        {
            setUser1(true);
        }
        else{
            setUser1(false)
        }
        console.log("----->>",user1)
          
        
            
        })
        .catch(error=>{
           setError(error.message)
           setPrint(false);
        });


const handleuser=(e)=>
{
    setUser(e.target.value)
   
    
}

const handlepass=(e)=>
{
    setPass(e.target.value)
   
}

const handlecheck=()=>
{
    setData1(true);
}


    

     const navigate=useNavigate();
     const handlelogin = ()=>{
        if(user1)
        {
           
            if(data1===true)
            {
                
                
                    navigate('/home')
             
            }
            else{
              setAg(false)
            }
        }
        else{
           setAl(false)
        }

        
        
        
        
        
        
        
    }
     const handlesign = ()=>{
        navigate('/sign')
     }
   

     
     return (
         <>
         { !print &&
            <h1 style={{marginLeft:"550px", marginTop:"100px", color:"red"}}>{error}</h1>
         }
         { print &&

             
             
             <body style={{backgroundImage:`url(${im2})`,
             backgroundSize:"cover",
    }}><br/>
    
<div style={{backgroundColor:"rgba(0,128,0,0.3)"}}>
    <br/>
        <h1 style={{color:"whitesmoke", fontFamily:"cursive",textAlign:"center",marginTop:"20px",fontSize:"60px"}}><b>"EAT HEALTHY"</b></h1>
<br/>
    </div>

    <div className='body1'>
    <div className='wrapper'> 
    <img src={im} style={{height:"80px", marginLeft:"70px"}}></img>
    
    <form >
        { !al &&

        <h1>
            
            <Alert severity="error">Invalid Username or Password</Alert>
        </h1>    
        }
        
        { !ag &&
            <Alert severity="warning">Agree terms and Conditions</Alert>
        }
        <div className="input-box">
            <input type="text" placeholder='username' required onChange={handleuser}  />
            <FaUser className='icon'/>
        </div>
        <div className="input-box">
            <input type="password" onChange={handlepass} placeholder='password' required  />
            <FaLock className='icon'/>
        </div>
        <div className="remember-forgot">
            <label ><input style={{color:"blue"}} type="checkbox" onChange={handlecheck}/>Agree Terms & Conditions</label>

            <a href='#'>Forgot Password?</a>
    
        </div>
        
        <button onClick={handlelogin} type="submit" >Login</button>
        

        <div className="register-link">
            <p>Don't have an account? <a onClick={handlesign} >Sign Up</a></p>
        </div>
    </form>
     </div>
     </div>
   </body>
}
    </>
  );
};

export default LoginForm;