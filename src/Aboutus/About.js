import React from 'react'
import Nav from '../Components/Nav'

import im from '../Images/light6.jpg'
import im2 from '../Images/Vita.png'
import Typewriter from "typewriter-effect";
import Footer from '../Footer/Footer';


const About = () => {
  return (
    <>
   
    <body style={{backgroundImage:`url(${im})`,
    backgroundSize:"cover"}}
    b>
      <Nav/>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <center style={{backgroundColor:"white"}}>

        <img src={im2}></img>
        </center>
        <br></br>
        <br></br>
        <br></br>
        <div>
       <center>
        <h1 style={{color:"red"}}>About Us</h1>
        </center> 
       
        <h3 style={{color:"", lineHeight:"2",padding:"80px"}} ><p>
          
          <Typewriter 
                onInit={(typewriter) => {
                    typewriter
                    
                    .changeDelay(1)
                    
                  .typeString("Welcome to VitaMinds, your ultimate destination for all things related to diet, nutrition, and healthy living. At VitaMinds, we believe that proper nutrition is the cornerstone of a vibrant and fulfilling life. Our mission is to empower individuals to make informed choices about their health and well-being through educational content, personalized guidance, and community support. Our team of nutrition experts, dietitians, and fitness enthusiasts are dedicated to providing you with accurate, science-backed information to help you achieve your health goals. Whether you're looking to lose weight, improve your energy levels, or simply adopt a healthier lifestyle, we're here to support you every step of the way.Through our comprehensive articles, meal plans, recipes, and interactive tools, we strive to make healthy eating enjoyable, accessible, and sustainable for everyone. Join us on this journey to optimal health and vitality")
                
                    
                    .start();
                
                   
                    
                }}
                ></Typewriter>
          
          
          
          
          
          
          
          
          </p></h3>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        </div>



<Footer/>

    </body>




    </>
    
  )
}

export default About