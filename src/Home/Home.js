import React from 'react'
import Nav from '../Components/Nav.js'
import im from '../Images/wallpaper1.jpg'
import im1 from '../Images/backh5.jpg'
import im2 from '../Images/gradient1.jpg'
import CircularProgress from '@mui/material/CircularProgress';

import Topics from '../Topics/Topics.js'
import Diet from '../DietTopics/Diet.js'
import { Container } from '@mui/material'
import Stack from '@mui/material/Stack';
import Food from '../Food/Food.js';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import cal from "../Images/calorie.jpeg"
import Food1 from '../FoodReceipe/Food1.js'
import Food2 from '../FoodReceipe/Food2.js'
import Food3 from '../FoodReceipe/Food3.js'
import Food4 from '../FoodReceipe/Food4.js'

import back from '../Images/light4.jpg';
import im3 from '../Images/avocado.jpeg'
import im4 from '../Images/Brussels.jpeg'
import im5 from '../Images/smoothie.jpeg'
import im6 from '../Images/Bean.jpeg'
import Swiperr from '../Swiper/Swiperr.js'
import Typewriter from "typewriter-effect";

import bb from '../Images/chalk.png'
import bbb from '../Images/fff.jpg'
import { useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer.js'

import  { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faTelegramPlane, faTelegram } from '@fortawesome/free-brands-svg-icons';

import '../Footer/Footer.css';




const Home = () => {
        const nav=useNavigate();
        const isMobile = useMediaQuery({ maxWidth: 767 });

        const servicesRef = useRef(null);
    const handleshare=()=>
    {
        nav('/share')
    }
    const handleScrollToServices = () => {
        servicesRef.current.scrollIntoView({ behavior: 'smooth' });
      };
  return (
    <>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

    <body style={{backgroundImage: `url(${im1})`
,backgroundRepeat: 'no-repeat',

backgroundSize:"cover"
}}>
       <Nav/>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
    <b className='juu' style={{fontSize:"20px"}}>
        <h1 style={{color:"DARKBLUE", marginLeft:"380px", fontFamily:"serif",marginTop:"20px"}}>"There is no magic bullet. you gotta eat healthily 
        <br></br>and live healthy to be healthy and look healthy"
        
        </h1>
        <br/>
       
        </b>
        
        <br></br>
        <br></br>
       
   

<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
        <br></br>
       
   

<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
   

<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
   

<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
    </body>
        <div style={{backgroundImage: `url(${back})`,
    backgroundPosition:"center",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat",
    backgroundAttachment:"fixed"
    
    }}>
        <div ref={servicesRef}>
        <br></br>
        <br></br>

    
        <br></br>
        <br></br>
       

        <h1 style={{color:"green",textAlign:"center"}}>Our Services</h1>
        <br></br>
        <br></br>








        <Stack direction="row" spacing={17} style={{paddingLeft:"100px"}} >
 
<Topics/>
<Diet/>
<Food/>
</Stack>
        </div>
<br/>
<br/>
<br/>
<br/>
<br/>


<div style={{backgroundColor:"rgba(144,238,144,0.5)"}}>
<br/>
<br/>
<br/>
<br/>
<br/>
<h1 style={{color:"red", marginLeft:"10px"}}>
<Typewriter 
                onInit={(typewriter) => {
                    typewriter
                    
                    .changeDelay(1)
                    
                    .pauseFor(2000)
                    .typeString("What is Nutrition?\n")
                
                    .pauseFor(28000)
                   
                    .deleteAll(0.1)
                    
                    .typeString("Why We Need Diet and Nutrition?")
                    
                    .start();
                
                   
                    
                }}
                ></Typewriter>
                </h1>
                <br/>
                <p style={{marginLeft:"30px", fontSize:"20px",paddingL:"10px", fontFamily:"-moz-initial",color:"black"}}>
                <Typewriter 
                onInit={(typewriter) => {
                    typewriter
                    
                    .changeDelay(1)
                    
                    .pauseFor(5000)
                    .start();
                    typewriter
                    
                    .typeString("\nNutrition is the science that studies the interaction of nutrients and other substances in food with the body, including the processes of ingestion, digestion, absorption, metabolism, and excretion. It encompasses the study of nutrients, their functions in the body, their sources in food, and their relationship to health and disease.Nutrients provide nourishment. Proteins, carbohydrates, fat, vitamins, minerals, fiber, and water are all nutrients. If people do not have the right balance of nutrients in their diet, their risk of developing certain health conditions increases.")
                    .pauseFor(8000)
                    .deleteAll(0.01)
                    .start()
                    .typeString("A healthy diet is essential for good health and nutrition. It protects you against many chronic noncommunicable diseases, such as heart disease, diabetes and cancer. Eating a variety of foods and consuming less salt, sugars and saturated and industrially-produced trans-fats, are essential for healthy diet.Providing energy for daily activities and bodily functions.\n Preventing chronic diseases like heart disease, diabetes, and obesity.Maintaining a healthy weight and supporting growth and development. Ensuring proper nutrient absorption and supporting cognitive function. Enhancing mood, mental health, and overall well-being.")
                    
                }}
                ></Typewriter>

                </p>
                <br/>
<br/>
<br/>
<br/>
<br/>
                </div>
    <br></br>
    <br></br>
    <br></br>
<br></br>
<br></br>
<br></br>
   
       
    <div  style={{marginLeft:"200px"}}> <iframe style={{paddingLeft:"20px"}}width="500" height="300" marginLeft="20px" src="https://www.youtube.com/embed/XMcab1MFaLc?si=dFc2MFNfQVgV1rRC" title="YouTube video player" 
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 
    <iframe style={{paddingLeft:"70px"}} radius="20px" width="500" height="300" src="https://www.youtube.com/embed/inEPlZZ_SfA?si=3gsh9SBaZEwdxWZu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
    clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
        <br></br>
        <br></br>

<br></br>
<br></br>


    <br></br>
    <br></br>

<div style={{backgroundColor:''}}>


<br></br>

</div>


<h1 style={{color:"red",textAlign:"center" }}>    FOOD RECEIPES</h1>
<br></br>
<br></br>

<div style={{backgroundColor:"rgba(218,165,32,0.6)"}}>

<br></br>
<br></br>
<Stack direction="row" spacing={10} 
style={{
paddingLeft:"0px"}}
>
    <br/>
    <br/>
<Food1/>
<Food2/>
<Food3/>
    </Stack>
<Food4/>
    <br></br>
    <br></br>
</div>
<br/>
<br/>
<br/>
<br/>
<br/>

  


    </div><footer className="footer">
            <ul className="social-icons">
              <li>
                <a href="https://www.facebook.com/" style={{marginLeft:"10px"}}><FontAwesomeIcon icon={faFacebook} style={{height:"50px"}}/></a>
            <a href="https://www.instagram.com/" style={{marginLeft:"10px"}}><FontAwesomeIcon icon={faInstagram} style={{height:"50px",marginLeft:"50px"}} /></a>
                <a href="https://www.linkedin.com/in/senthilnathan-n-24669b258/" style={{marginLeft:"10px"}}><FontAwesomeIcon icon={faLinkedin} style={{height:"50px",marginLeft:"50px"}}/></a>
              <a href="https://telegram.org/" style={{marginLeft:"10px"}}><FontAwesomeIcon icon={faTelegram} style={{height:"50px",marginLeft:"50px"}} /></a>
            </li>
            </ul>
            <br/>
            <br/>
            <br/>
            <br/>
      <div className="container">
        <div className="row">
<Stack direction={'row'}>

          <div className="col-md-1">
            <h3 style={{color:"brown"}}>About Us</h3>
            <p style={{color:"white"}}>Welcome to VitaMinds, your trusted source for all things diet and nutrition!<br/> At VitaMinds, we're passionate about empowering you to make informed<br/> choices about your health and well-being. Whether you're looking to<br/> boost your energy, manage your weight, or simply adopt a healthier lifestyle,<br/> we're here to support you every step of the way.</p>
          </div>
          <br/>

          <div className="col-md-4">
            <h3 style={{color:"brown"}}>Contact Us</h3>
            <ul className="contact-info">
              <li><FontAwesomeIcon icon={faMapMarkerAlt} /> 07,Nutri Street, Coimbatore, India</li>
              <li><FontAwesomeIcon icon={faEnvelope} /> mindsvita@gmail.com</li>
              <li><FontAwesomeIcon icon={faPhone} /> +6380882908</li>
            </ul>
          </div>
          <br/>
          <div className="col-md-2">
            <h3 style={{color:"brown"}}>Quick Links</h3>
            <ul className="quick-links">
              <li><a href="/home">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a style={{cursor:"pointer"}} onClick={handleScrollToServices}>Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          </Stack>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Home