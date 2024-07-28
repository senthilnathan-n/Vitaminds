import React from 'react'
import im1 from '../Images/wallpapers.jpg'
import im2 from '../Images/wallpapers1.jpg'
import im3 from '../Images/foodsaf.png'

import im from '../Images/light4.jpg'
import im4 from '../Images/saf.jpg'
import im5 from '../Images/kkk.jpg'
import im6 from '../Images/huu.jpg';

import Nav from '../Components/Nav'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Food1 from '../FoodReceipe/Food1'
import Food2 from '../FoodReceipe/Food2'
import Food3 from '../FoodReceipe/Food3'
import Food4 from '../FoodReceipe/Food4'
import { Button, Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer'

const Foodsaf = () => {
    const nav=useNavigate();
    const handleshare=()=>
    {
        nav('/share')
    }
  return (
   <>
   
   <body style={{backgroundImage: `url(${im})`
,backgroundRepeat: 'no-repeat',
backgroundAttachment: 'fixed',
backgroundPosition:'center',
backgroundSize:'cover'}}>
    <Nav/>
    
    <div style={{backgroundImage: `url(${im4})`
,backgroundRepeat: 'no-repeat',
backgroundAttachment: 'fixed',
backgroundPosition:'center',
backgroundSize:'cover'}}>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
    <center>

    <h1 style={{color:"red", marginTop:"30px", fontFamily:"-moz-initial", fontSize:"40px"}}>"Prepare Food for Health and Safety"</h1>
    <br></br>
<br/>
<br/>
    <br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
    </center>
    </div>
    <img src=''></img>
<h1 style={{paddingLeft:"15px", color:"rgb(159,48,52"}}><b>Healthy cooking</b></h1>
<br></br>
<h2 style={{paddingLeft:"30px", color:""}}><p><b>When preparing food, aim to preserve the nutrient value of the food and utilize healthy fats, reasonable portions, and whole foods. Here are a few tips:</b></p></h2>
<br></br>
<br></br>
<div style={{ paddingLeft:"50px", lineHeight:"1.4",fontSize:"medium"}}>


<ol>
    <li >
        <h3><p><b>Use healthy cooking methods such as steaming, broiling, grilling and roasting. Frying requires adding fat to achieve the desired results and deep-fried foods add considerable fat to the American diet.
            </b></p></h3>
    </li>
    <li >
        <h3><p><b>Cook foods in as little water and for as short a period of time as possible to preserve all water soluble vitamins (Bs and C).
            </b></p></h3>
    </li>
    <li >
        <h3><p><b>Use a variety of herbs and spices for additional flavor rather than relying on salt alone.
            </b></p></h3>
    </li>
    <li >
        <h3><p><b>Avoid packaged or processed foods, which are likely to contain added salt, sugar and fats. Recognize that consuming these foods increases your intake of salt, sugar, and fats considerably (often without knowing specifically what or how much). As we eat more and more processed foods, we eat less of the phytochemicals and nutrients our bodies need.   
            </b></p></h3>
    </li>
</ol>

</div>
<br></br>
<br></br>
<br></br>
<br></br>
<div style={{paddingLeft:"50px", backgroundColor:"rgba(192,192,192,0.2)"}}>
    <br></br>
<iframe width="560" height="315" src="https://www.youtube.com/embed/iguM_pqetzo?si=72G7VS1yanJgTzzS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<iframe width="560" height="315" style={{paddingLeft:"150px"}} src="https://www.youtube.com/embed/nGKv7l3saK4?si=l5mucSRhqACJqLm7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<br></br>
</div>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<div>

<h1 style={{paddingLeft:"15px", color:"rgb(159,48,52"}}><b>Safe Food preparation</b></h1><br></br>
<h2 style={{paddingLeft:"30px", color:""}}><p><b>Foodborne illnesses don't just come from restaurants. In fact, they usually come from bad food preparation, serving, and storage at home. Follow the guidelines below to keep your food as safe as possible:</b></p></h2>
<br></br>
<br></br>
<div style={{color:"", lineHeight:"1.7",paddingLeft:"50px",padding:"40px"}}>


<ol>
    <li >
        <h3><p><b>Wash hands and surfaces often using hot, soapy water. Wash your hands before and after you handle food or utensils, especially raw meat, poultry, fish, or eggs.
            </b></p></h3>
    </li>
    <li >
        <h3><p><b>Separate raw, cooked, and ready-to-eat foods. Keep raw meat, poultry, fish, or eggs away from other foods to prevent cross-contamination. If possible, use separate cutting boards for these foods. If not, be sure to wash cutting boards carefully with soap between uses.
            </b></p></h3>
    </li>
    <li >
        <h3><p><b>Cook foods to a safe temperature using a food thermometer. Uncooked or undercooked animal products can be unsafe.
            </b></p></h3>
    </li>
    <li >
        <h3><p><b>When in doubt, throw it out. If you are not sure that food has been prepared, served, or stored properly, throw it out. If food has been left out for more than two hours, throw it out. Eat cooked leftovers within four days.
            </b></p></h3>
    </li>
</ol>

</div>
<br></br>
<br></br>
<br></br>
<div style={{backgroundImage:`url(${im5})`
,backgroundRepeat: 'no-repeat',
backgroundAttachment: 'fixed',
backgroundPosition:'center',
backgroundSize:'cover'}}>
    <br/>
    <br/>
    <br/>

<Stack direction="row" spacing={10} style={{paddingLeft:"80px"}}>
<Food1/>
<Food2/>
<Food3/>
    </Stack>
<Food4/>

<br/>
<br/>
<br/>
</div>
<br/>
<br/>
<br/>
<h1 style={{paddingLeft:"15px", color:"rgb(159,48,52"}}><b>Know how your foods were produced</b></h1>
<br></br>
<br></br>
<h2 style={{paddingLeft:"30px", color:""}}><p><b>Food production is another important component of nutrition and health. This is a complex issue with lots of factors, some of which you cannot control. For example, food grown in healthy soil will supply necessary trace minerals to the food, but when soils are pressured for large-scale production, essential trace minerals can be lost.</b></p></h2>
<br></br>
<br></br>
<div style={{color:"brown", paddingLeft:"50px",lineHeight:2}}>


<ol>
    <li >
        <h3><p><b>Buy organic foods for all or some of your diet (check the ‘dirty dozen’ list for those that are most heavily sprayed).
            </b></p></h3>
    </li>
    <li >
        <h3><p><b>Buy meat from producers who don't use antibiotics.</b></p></h3>
    </li>
    <li >
        <h3><p><b>Reduce your intake of fish high in mercury. The EPA recommends eating up to 12 ounces of fish that are lower in mercury weekly, including shrimp, canned light tuna, salmon, pollock, and catfish and avoiding shark, swordfish, king mackerel, and tilefish.
            </b></p></h3>
    </li>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
</ol>

</div>


</div>





   <div style={{backgroundImage:`url(${im6})`, 
   
   backgroundSize:"cover",
   backgroundPosition:"center",
   
   
   paddingBottom:"00px"
   ,height:"500px"}}>
              
    <h1 style={{color:"red",textAlign:"center",paddingTop:"60px"}}><u>Share Your Recipe</u></h1>
 
    <h2 style={{marginLeft:"400px",marginTop:"100px",fontFamily:"cursive",color:"green"}}>Share your recipe with the VitaMinds community and inspire others to <br/>embrace healthier eating habits. Contribute to our collective well-being <br/>by sharing your favorite recipes and culinary creations today!"</h2>

<Button onClick={handleshare} style={{marginTop:"120px", marginLeft:"650px"}}>Share Your Recipe</Button>

    </div>
   
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
   
   
    <Footer/>
       </body>
   
   
   </>
  )
}

export default Foodsaf