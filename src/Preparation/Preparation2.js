import { Stack } from '@mui/material'
import React from 'react'
import img2 from '../Images/foodb5.jpeg'
import img3 from '../Images/jjj.jpg'
import Nav from '../Components/Nav'


const Preparation2 = () => {
   
      return (
        <>
        
        <body style={{backgroundImage: `url(${img3})`,
backgroundPosition:"center",
backgroundSize:"cover",
backgroundRepeat:"no-repeat",
backgroundAttachment:"fixed",}}>
<br/>
<br/>
<br/>
<br/>
        
        <div className='sen' style={{marginLeft:"700px"}}>
    
        <h1 >Homemade Biscuits</h1>
        <hr/>
        <br></br>
        <br></br>
        
        <h3>Make these biscuits from scratch in less than 30 minutes.. </h3>
        <Stack direction={'row'}>

        <div>
    
        <br></br>
        <br></br>
        <h2><b><u>Yield:</u></b></h2><br/>
        <p>15 biscuits</p>
        <br></br>
        <br></br>
        <h2><b><u>Prep time:</u></b></h2><br/>
        <p>10 minutes</p>
        <br></br>
        <br></br>
        <h2><b><u>Cook time:</u></b></h2><br/>
        <p>12 minutes</p>
        <br></br>
        <br></br>
        <h2><b><u>Total time:</u></b></h2><br/>
        <p>22 minutes</p>
        </div>
        <br/>
        <br/>
        <br/>
        <img src={img2} style={{width:"500px", height:"300px", marginLeft:"200px",marginTop:"100px"}}></img>
        </Stack>
    
        <br></br>
        <br></br>
        <h2><u>Ingredients:</u></h2>
        <br></br>
        <br></br>
        <ul>
            <li>2 cups flour (all-purpose)</li>
            <li>2 teaspoons baking powder</li>
            <li>1/4 teaspoon baking soda</li>
            <li>1/4 teaspoon salt</li>
            <li>2 tablespoons sugar</li>
            <li>2/3 cup buttermilk (low-fat (1%))</li>
            <li>3 1/3 tablespoons vegetable oil</li>
            
        </ul>
        <br/><br/>
        <h2><u>Steps:</u></h2>
        <br/><br/>
    
        <ol>
            <li>Preheat oven to 450 °F. </li>
            <li>In a medium bowl, combine flour, baking powder, baking soda, salt, and sugar.</li>
            <li>In a small bowl, stir together buttermilk and oil. Pour over flour mixture and stir until well mixed.</li>
            <li>On a lightly floured surface, knead dough gently for 10–12 strokes. Roll or pat dough to ¾-inch thickness. Cut with a 2-inch round biscuit or cookie cutter, dipping cookie cutter in flour between cuts. Transfer biscuits to an ungreased baking sheet.</li>
            <li>Bake for 12 minutes or until golden brown. Serve warm.</li>
        </ol>
    <br/><br/>
    
    <h2><u>Meal Type:</u></h2><br/>
    <p>Breakfast</p><br/>
    <h2><u>Category:</u></h2><br/>
    <p>30 Minutes or Less</p><br/>
    <h2><u>Food group:</u></h2><br/>
    <p>Grains</p><br/>
    <h2><u>season:</u></h2><br/>
    <p> Winter, Spring,Summer,Fall</p><br/>
        </div>
        <iframe width="400" height="265" style={{marginLeft:"700px"}} src="https://www.youtube.com/embed/kIqnpH1NLiE?si=k9silq4Ew5ihMcSy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>    <br/>
    <br/>
    <br/>
    <br/>
    <h1 style={{marginLeft:"900px", color:"green"}}>~Stay Healthy! Stay Good~</h1>
    <br/>
    <br/>
        </body>
        </>
      )
      }
    
   

export default Preparation2