import React, { useState } from 'react'
import im from '../Images/jjj.jpg'
import Nav from '../Components/Nav'
import { Stack } from '@mui/material';
import Typewriter from "typewriter-effect";
import '../Calorie/Calorie.css'
import imm from '../Images/kff.jpg'
import Alert from '@mui/material/Alert';
import vita from '../Images/Vita.png'
import { Card, CardContent, Typography } from '@mui/material';
import html2canvas from 'html2canvas';
import Footer from '../Footer/Footer';
import  { useRef } from 'react';

const Calorie = () => {
    const servicesRef = useRef(null);
    const downloadPage = () => {
        const element = document.getElementById('page-content');
        
        html2canvas(element)
          .then((canvas) => {
              const imgData = canvas.toDataURL('image/png');
            const link =     document.createElement('a');
            link.download = 'report.png';
            link.href = imgData;
            link.click();
        });
    };
   
        const [weight,setWeight]=useState();
        const [height,setHeight]=useState();
        const [age,setAge]=useState()
        const [calorie,setCalorie]=useState(0);
        const [name,setName]=useState();
        const[error1,seterror1]=useState(false);
        const[op,setOp]=useState(false);

        const [rep1,setRep1]=useState(0);
        const [rep2,setRep2]=useState(0);
        const [rep3,setRep3]=useState(0);
        const [rep4,setRep4]=useState(0);

        const handlename=(e)=>
        {
            setName(e.target.value)
        }
const handleweight=(e)=>

{
    setWeight(e.target.value);
    
}
const handleheight=(f)=>
{
    setHeight(f.target.value);
}
const handleage=(g)=>
{
    setAge(g.target.value);
}
const handlemale=()=>
{
    if(weight>5 || age>5||height>55)
    {


        setOp(true);
        setCalorie((10*weight+6.25*height-5*age+5)*1.2)
        setRep1((10*weight+6.25*height-5*age+5)*1.375)
        setRep2((10*weight+6.25*height-5*age+5)*1.55)
        setRep3((10*weight+6.25*height-5*age+5)*1.725)
        setRep4((10*weight+6.25*height-5*age+5)*1.9)
    }
    else{
            seterror1(true)
    }

}
const handlefemale=()=>
{
    if(weight>5 || age>5||height>55)
    {

    setOp(true);
    setCalorie((9.247*weight+3.098*height-4.330*age+447.593)*1.2)
    setRep1(((9.247*weight+3.098*height-4.330*age+447.593))*1.375)
    setRep2(((9.247*weight+3.098*height-4.330*age+447.593))*1.55)
    setRep3(((9.247*weight+3.098*height-4.330*age+447.593))*1.725)
    setRep4(((9.247*weight+3.098*height-4.330*age+447.593))*1.9)
    }
    else{
        seterror1(true)
    }

}
  return (
    <>

    
    <body style={{backgroundImage:`url(${im})`
    ,backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition:'center',
    backgroundSize:'cover' }}>
        <Nav/>
        <div style={{backgroundColor:"rgba(123,227,110,.6)"}}>

        </div>
    
    
   
    <br/>
    

{ error1 &&

<Alert style={{marginLeft:"800px", marginTop:"70px"}} severity="error">Age,Weight must Greater than 5 and minimum height is 55 cm</Alert>

}
    
    

    

   
        <div style={{
            backgroundColor:"rgb(192,192,192,0.1)"
    }}>
            <br></br>
            <br></br>
           <center
       style={{ border:"solid brown",borderRadius:"20px",width:"500px",height:"500px",marginLeft:"800px",backgroundColor:"rgba(0,94,255,.2)"
    }}>
        
        <br/>
        <br/>
        <br/>
        <br/>
        
        <h1 style={{color:"green"}}>Calorie Calculator</h1>
  <form style={{marginTop:"80px"}}>
    

  <label className='p'><b>Name: </b></label>
        <input className='l1' onChange={handlename}></input>
        <br/>
        <br/>
  <label className='pp'><b>Body Weight (in kilograms): </b></label>
        <input className='l2' onChange={handleweight}></input>
        <br></br>
        <br></br>
        <label className='pp'><b>Body Height (in cm): </b></label>
        <input className='l3' onChange={handleheight}></input>
        <br></br>
        <br></br>
        <label className='pp'><b>Age (in years):</b> </label>
        <input className='l4' onChange={handleage}></input>

  </form>
  <br/>
  <br/>
  <br/>
<button className='bi'style={{marginLeft:"0px", padding:"10px", width:"80px"}}onClick={handlemale}>Male</button>
<button className='bi' style={{marginLeft:"20px", padding:"10px", width:"80px"}} onClick={handlefemale}>Female</button>
    
           </center>

<br/>
<br/>
<br/>
<br/>

<div style={{backgroundColor:"rgb(218,165,32,0.6)"}} id='page-content'>
    <img src={vita} style={{height:"100px",marginLeft:"600px"}}></img>
    <hr></hr>
    <br/>
    <br/>
    <br/>
    <br/>
  

{ op &&
<div>
<br></br>


<h1 style={{textAlign:"center", color:""}}> <b style={{color:"green"}}>Hey {name}!</b> </h1><br/>
<h2 style={{textIndent:"40px"}}>Based on your inputs, your recommended daily calorie intake is <b style={{color:"red"}}>{calorie}</b> calories. Remember, this is just a starting point and may vary based on your activity level, metabolism, and specific goals. It's essential to listen to your body and adjust as needed.
</h2><br/>
    <br/>
   
</div>
}
<br/>
<br/>
<br/>
<br/>
<h1 style={{color:"brown",textAlign:"center"}}>Based on Activity Factor</h1>
    <br/>
    <br/>
    <br/>
<div style={{display:"flex"}}>
<Card variant="outlined" style={{width:"250px",marginLeft:"60px"}}>
      <CardContent>
        <Typography variant="h5" component="h2" style={{color:""}}>
         Sedentary
        </Typography>
        <Typography color="textSecondary">
        little to no exercise        </Typography>
        <Typography variant="body2" component="p">
            <br/>
            <br/>
          <b style={{color:"green"}}>CALORIES:</b><b style={{color:"orangered", fontSize:"23px"}}>{calorie}</b>
        </Typography>
      </CardContent>
    </Card>
<Card variant="outlined" style={{width:"250px",marginLeft:"30px"}}>
      <CardContent>
        <Typography variant="h5" component="h2">
        Lightly active 
        </Typography>
        <Typography color="textSecondary">
        light exercise/sports 1-3 days a week
        </Typography>
        <Typography variant="body2" component="p">
        <br/>
          <b style={{color:"green"}}>CALORIES:</b><b style={{color:"orangered", fontSize:"23px"}}>{rep1}</b>
        </Typography>
      </CardContent>
    </Card>
<Card variant="outlined" style={{width:"250px",marginLeft:"30px"}}>
      <CardContent>
        <Typography variant="h5" component="h2">
        Moderately active
        </Typography>
        <Typography color="textSecondary">
        moderate exercise/sports 3-5 days a week
        </Typography>
        <Typography variant="body2" component="p">
        <br/>
          <b style={{color:"green"}}>CALORIES:</b><b style={{color:"orangered", fontSize:"23px"}}>{rep2}</b>
        </Typography>
      </CardContent>
    </Card>
<Card variant="outlined" style={{width:"250px",marginLeft:"30px"}}>
      <CardContent>
        <Typography variant="h5" component="h2">
        Very active
        </Typography>
        <Typography color="textSecondary">
        hard exercise/sports 6-7 days a week
        </Typography>
        <Typography variant="body2" component="p">
    
        <br/>
          <b style={{color:"green"}}>CALORIES:</b><b style={{color:"orangered", fontSize:"23px"}}>{rep3}</b>
        </Typography>
      </CardContent>
    </Card>
<Card variant="outlined" style={{width:"250px",marginLeft:"30px"}}>
      <CardContent>
        <Typography variant="h5" component="h2">
        Extra active
        </Typography>
        <Typography color="textSecondary">
        very hard exercise/sports and physical job
        </Typography>
        <Typography variant="body2" component="p">
        <br/>
          <b style={{color:"green"}}>CALORIES:</b> <b style={{color:"orangered", fontSize:"23px"}}>{rep4}</b>
        </Typography>
      </CardContent>
    </Card>
    </div>
    <br/>
    <br/>
    <br/>
<h1 style={{textAlign:"center", color:"green"}}>
    Stay healthy and keep up the good work!
    </h1>
    <br/>
    <br/>
<br/>
<br/>
</div>
<br/>
<br/>
    <h2 style={{textAlign:"center",color:"red"}}>Download your Report here!</h2><br/>
    <button style={{marginLeft:"700px",backgroundColor:"green",padding:"5px"}} onClick={downloadPage}>Download
    </button>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        <div style={{backgroundColor:"rgba(192,192,192,0.5", paddingTop:"10px", paddingBottom:"20px"} }>
<br/>
        <h1 style={{color:"rgb(159,48,52", paddingLeft:"30px"}}>How it is Calculated?</h1>
        <br/><h2 style={{paddingLeft:"30px",lineHeight:"32px", color:"",textIndent:"40px"} }><p>
            The results show a number of daily calorie estimates that can be used as a guideline for how many calories to
             consume each day to maintain. This Calorie Calculator is based on several equations, and the results of the calculator are based on an estimated average. The Harris-Benedict Equation
              was one of the earliest equations used to calculate basal metabolic rate (BMR), which is the amount of energy expended per day at rest. It was revised in 1984 to be more accurate 
              and was used up until 1990, when the
              Mifflin-St Jeor Equation was introduced. The Mifflin-St Jeor Equation also calculates BMR, and has been shown to be more accurate than the revised Harris-Benedict Equation. 
            </p>
            </h2>
            </div>
<br></br>
<br></br>



        <br></br>
        <br></br>
        <br></br>
        
        <center>

        </center>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        </div>
    </body>
    <Footer/>
    </>
   
   )
}

export default Calorie