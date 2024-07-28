//import { Stack } from '@mui/material'
import React from 'react'
import img12 from '../Images/Brussels.jpeg'
import img3 from '../Images/jjj.jpg'
import '../Preparation/Preparation.css'
import { Stack } from '@mui/material'

const Preparation13 = () => {
  return (
    <>
    <body style={{backgroundImage: `url(${img3})`,
backgroundPosition:"center",
backgroundSize:"cover",
backgroundRepeat:"no-repeat",
backgroundAttachment:"fixed"}}>

    <br></br>
    <br></br>
    <br></br>
    <br></br>
    
    <div style={{marginLeft:"700px"}} className='sen'>

    <h1>Roasted Brussels Sprouts</h1>
    <hr/>
    <br></br>
    <br></br>
    
    

    <h3>Roasting Brussels sprouts creates a warm, flavorful, and versatile vegetable dish.  </h3>
<Stack direction={'row'}>
    <div>

    <br></br>
    <br></br>
    <h2><b><u>Yield:</u></b></h2><br/>
    <p>6 servings</p>
    <br></br>
    <br></br>
    <h2><b><u>Prep time:</u></b></h2><br/>
    <p>5 minutes</p>
    <br></br>
    <br></br>
    <h2><b><u>Cook time:</u></b></h2><br/>
    <p>20 minutes</p>
    <br></br>
    <br></br>
    <h2><b><u>Total time:</u></b></h2><br/>
    <p>25 minutes</p>
    </div>
    <img src={img12} style={{marginLeft:"150px", marginTop:"100px"}}></img>
</Stack>
    <br/>
    
    <br></br>
    <br></br>
    <h2><u>Ingredients:</u></h2>
    <br></br>
    <br></br>
    <ul>
        <li>6 cups Brussels sprouts</li>
        <li>1 tablespoon vegetable oil</li>
        <li>1/8 teaspoon salt</li>
        <li>1/8 teaspoon black pepper</li>
        <li>1 teaspoon lemon juice</li>
        
    </ul>
    <br/><br/>
    <h2><u>Steps:</u></h2>
    <br/><br/>

    <ol>
        <li>Wash hands with soap and water.</li>
        <li>Preheat oven to 400 degrees F.</li>
        <li>Wash and trim Brussels sprouts. Cut large Brussels sprouts in half from top to bottom; leave small Brussels sprouts whole.</li>
        <li>In a large bowl, toss Brussels sprouts with the oil, salt, and pepper.</li>
        <li>Place Brussels sprouts in a single layer on a large baking sheet.  Lining the baking sheet with foil or baking parchment will help with clean-up.</li>
        <li>Roast for 20 to 30 minutes, stirring once after 10 to 15 minutes.  Sprouts should be tender and browned.</li>
        <li>Remove from oven and drizzle with lemon juice.</li>
    </ol>
<br/><br/>
<h2><u>Meal Type:</u></h2><br/>
<p> Breakfast</p><br/>
<h2><u>Category</u></h2><br/>
<p>30 Minutes or Less</p><br/>
<h2><u>Food group:</u></h2><br/>
<p>Grains</p><br/>
<h2><u>season:</u></h2><br/>
<p> Winter, Fall,Spring,Summer</p><br/>
<h2><u>cuisine:</u></h2><br/>
<p> Vegetarian</p><br/>

    </div>
  
    <iframe width="400" height="265" style={{marginLeft:"700px"}} src="https://www.youtube.com/embed/GjtnhE14muE?si=YIhjukQoGnSaTMSr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <br/>
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

export default Preparation13