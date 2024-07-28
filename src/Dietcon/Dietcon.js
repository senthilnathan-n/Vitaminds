import React from 'react'
import Nav from '../Components/Nav'
import im1 from '../Images/backg4.jpg'
import im2 from '../Images/wallpaper1.jpg'
import im3 from '../Images/wallpaper5.jpg'

import im from '../Images/light4.jpg'
import im4 from '../Images/ooats.jpeg'
import im5 from '../Images/wheat.jpeg'
import im6 from '../Images/ragi.jpeg'
import im7 from '../Images/vegetables.jpeg'
import im8 from '../Images/potato.jpeg'
import im9 from '../Images/corn.jpeg'
import im10 from '../Images/barley.jpeg'
import im11 from '../Images/bajra.jpeg'

import im12 from '../Images/protein.jpeg'
import im13 from '../Images/fat.jpeg'

import im14 from '../Images/vitamins.jpg'
import im15 from '../Images/water.jpg'
import im16 from '../Images/fat.jpeg'

import b1 from '../Images/chalk.png'
import b2 from '../Images/download2.jpg'
import b3 from '../Images/download3.jpg'
import Swiperr from '../Swiper/Swiperr'

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Stack } from '@mui/material'

import Typewriter from "typewriter-effect";
import Footer from '../Footer/Footer'



const Dietcon = () => {
  return (
    <>
    
 
    <body style={{backgroundImage:`url(${im})`,backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition:'center',
    backgroundSize:'cover'}}>
        <Nav/>
        <Swiperr/>
        <br></br>
        <br></br>
        <b style={{textAlign:"center", color:"brown"}}>
        
     <h1>
        DIET & NUTRITIONS
        </h1> 
        </b>
        <br/>
        <br/>
        <br/>
   



        <div style={{backgroundColor:"rgba(192,192,192,0.2)"}}>
            <br></br>
        <div style={{color:"red"}}>
        <h1>


        <Typewriter 
                onInit={(typewriter) => {
                    typewriter
                    
                    .changeDelay(1)
                    
                  
                    .typeString("What is Diet?")
                
                    
                    .start();
                
                   
                    
                }}
                ></Typewriter>

        </h1>

        <br/>
        </div>

        <h2 style={{marginLeft:"30px",color:"rgb(0,50, 12)"}}>

        <Typewriter 
                onInit={(typewriter) => {
                    typewriter
                    
                    .changeDelay(1)
                    
                    .pauseFor(2000)
                    .typeString("A diet is all that we consume in a day. And a balanced diet is a diet that contains an adequate quantity of the nutrients that we require in a day.  A balanced diet includes six main nutrients, i.e. Fats, Protein, Carbohydrates, Fibre, Vitamins, and Minerals.We often hear that it is necessary for us to be healthy. But how do we become healthy? Due to a balanced diet. Now, what is a balanced diet? Why is it so important? And is it the same for everyone?")
                
                    
                    .start();
                
                   
                    
                }}
                ></Typewriter>

        </h2>
        <br></br>
        <br></br>
        </div>
        
        
        
    <div style={{
     backgroundColor:"rgba(192,192,192,0.2)"}}  >
        <br></br>
        <br></br>

        
        <iframe style={{marginLeft:"30px", marginBottom:"0px"}} width="400" height="280" src="https://www.youtube.com/embed/5znuV7Iyrzs?si=3pIRsRDNZyIU5Cdp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe width="400" height="280" style={{marginLeft:"100px"}} src="https://www.youtube.com/embed/7UDx1RF9Oho?si=3SE-8tK7WHLpc4BK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        
        <iframe width="400" height="280" style={{marginLeft:"130px"}} src="https://www.youtube.com/embed/XulBKrrRC3k?si=Sddk5x2to5f_E34h" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
    </div>
    
    <div style={{backgroundColor:""}}>

<br></br>
<br></br>
        <h1 style={{color:"red", marginLeft:"50px"}}>7 Essential Components of A Balanced Diet</h1>
        <br></br>
        <br></br>
        <ul style={{marginLeft:"80px"}}>
            <li>
                <h2 style={{color:"blueviolet"}}>Carbohydrates</h2>
                <dl>
                    <dt></dt>
                    <dd><h3>

                    Carbohydrates provide you with energy, which should constitute 50- 60% of your diet. Though it forms a significant diet component, you should not treat all carbs equally.
Sources of healthy carbs are-

Whole grains like Oats, Quinoa
Whole wheat, Dahlia
Legumes
Millets like ragi, bajra, barley
Vegetables
                    </h3>
                    </dd>
                </dl>
            </li>
<br></br>


    <h2 style={{color:"red", paddingLeft:"600px"}}>Carbohydrate rich Foods</h2>
    <br></br>
    <marquee scrollAmount="10px">
        <img src={im5} style={{paddingLeft:"20px" ,height:"200px" ,width:"190px"}}></img>
        <img src={im6} style={{paddingLeft:"20px" ,height:"200px" ,width:"190px"}}></img>
        <img src={im7} style={{paddingLeft:"20px" ,height:"200px" ,width:"190px"}}></img>
        <img src={im8} style={{paddingLeft:"20px" ,height:"200px" ,width:"190px"}}></img>
        <img src={im9} style={{paddingLeft:"20px" ,height:"200px" ,width:"190px"}}></img>
        <img src={im4} style={{paddingLeft:"100x", height:"200px", width:"190px"}}></img>
        <img src={im10} style={{paddingLeft:"20px"}}></img>,
        <img src={im11} style={{paddingLeft:"20px"}}></img>
        
    </marquee>
        <br></br>
        <li>

            <h2 style={{color:"blueviolet"}}>Protein</h2><br></br>
            <h3 style={{paddingLeft:"40px"}}> Protein helps you build muscles and develops skin and hair. It should constitute 10-12% of your diet.</h3>
           <br/><br/>
           <Stack direction={'row'} spacing={10}>

           <img src={b1} style={{paddingLeft:"80px",height:"700px",width:"600px"}}></img><br></br>
           <img src={b2} style={{paddingLeft:"0px",height:"700px",width:"600px"}}></img><br></br>
            

           </Stack>
        </li>

<br/>
<br/>
<br/>
        <li>

            <h2 style={{color:"blueviolet"}}>FAT</h2>
            <br></br>
            <h3 style={{paddingLeft:"40px"}}> It is a misconception that fats are bad for your health. It would be best if you chose healthy fats as fats help you maintain your body temperature 
            and help absorb fat-soluble vitamins ADE&K.</h3>
           <br></br> 
           <Stack direction={'row'} spacing={10}>

         
           
           <img src={b3} style={{paddingLeft:"400px",height:"800px",width:"600px"}}></img><br></br>
            

           </Stack>
        </li>

        <li>

<h2 style={{color:"blueviolet"}}>VITAMINS</h2><br></br>
<h3 style={{paddingLeft:"40px"}}>Though there are 13 essential vitamins, you should take vitamins A, C, B, and D measures.

Sources of vitamins are -.</h3><br></br>
<img src={im14} style={{paddingLeft:"500px",height:"200px",width:"600px"}}></img>
</li>

<li>

            <h2 style={{color:"blueviolet"}}>MINERALS</h2>
            <br></br>
            <h3 style={{paddingLeft:"40px"}}> Minerals help release energy from the food you take and promote the growth of organs. Some essential minerals are iron, calcium, potassium, iodine, and sodium.</h3>
            <br></br>
            <center>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/34FTvJZCrt4?si=ehDPeTWqz9CXrXOb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </center>

        </li>

        <li>

            <h2 style={{color:"blueviolet"}}>FIBRE</h2>
            <h3 style={{paddingLeft:"40px"}}> Fibre helps in digestion and also helps in lowering your cholesterol levels and controlling sugar levels.</h3>
            <br></br>
            <ul style={{marginLeft:"150px"}}>
                <li>
                   <h3>Oats, dahlia, Quinoa and Brown rice</h3> 
                </li>
                <li>
                <h3>
                Beans
                </h3>
                </li>
                <li>
                    <h3>
                    Whole grains
                    </h3>

                </li>
                <li>
                    <h3>
                    Nuts & seeds
                    </h3>

                </li>
            </ul>
        </li>

        <li>

            <h2 style={{color:"blueviolet"}}>WATER</h2>
            <h3 style={{paddingLeft:"40px"}}> You should take at least eight glasses of water as it hydrates your body and is used in body functions.</h3>
            <br></br>
            <br></br>
            <img src={im15} style={{paddingLeft:"500px",height:"200px",width:"600px"}}></img>
        </li>









        </ul>

        
<br></br>
<br></br>

    </div>



    <br/>
    <br/>
    <br/>
    </body>
    
    
    
    
    <Footer/>
    </>
  )
}
const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: '',
      title: 'Burger',
    },
    {
      img : {b1},
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
    },
  ];
  

export default Dietcon