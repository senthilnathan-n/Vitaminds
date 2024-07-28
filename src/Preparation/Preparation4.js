import React from 'react'
import img4 from '../Images/foodb8.jpeg'
import img3 from '../Images/jjj.jpg'
import { Stack } from '@mui/material'
const Preparation4 = () => {
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
    <div className='sen' style={{marginLeft:"700px"}}>

    <h1>Parmesan Peas</h1>
    <hr/>
    <br></br>
    <br></br>
    
    
    <h3>Give (these) peas a chance! Try varying this recipe by using other types of cheese or adding different seasonings.</h3>
    <Stack direction={'row'}>
    <div>

    <br></br>
    <br></br>
    <h2><b><u>Yield:</u></b></h2><br/>
    <p>7 servings</p>
    <br></br>
    <br></br>
    <h2><b><u>Prep time:</u></b></h2><br/>
    <p>5 minutes</p>
    <br></br>
    <br></br>
    <h2><b><u>Cook time:</u></b></h2><br/>
    <p>10 minutes</p>
    <br></br>
    <br></br>
    <h2><b><u>Total time:</u></b></h2><br/>
    <p>15 minutes</p>
    </div>
    <img src={img4} style={{height:"300px", marginLeft:"200px"}}></img>
    </Stack>
    
    <br></br>
    <br></br>
    <h2><u>Ingredients:</u></h2>
    <br></br>
    <br></br>
    <ul>
        <li>1 1/2 teaspoons butter (or margarine)</li>
        <li>2 cans peas (15 ounce cans or 16 ounces of frozen peas)</li>
        <li>1 1/2 teaspoons lemon juice</li>
        <li>1 teaspoon pepper</li>
        <li>1/3 cup grated parmesan cheese</li>
    </ul>
    <br/><br/>
    <h2><u>Steps:</u></h2>
    <br/><br/>

    <ol>
        <li>Heat margarine or butter in a medium skillet over medium heat (300 degrees F in an electric skillet). Add peas and cook 2 to 3 minutes or until peas are heated through.</li>
        <li>Add lemon juice and pepper and mix well. Sprinkle with parmesan cheese and serve warm.</li>
    </ol>
<br/><br/>
<h2><u>Meal Type:</u></h2><br/>
<p>Lunch, Dinner</p><br/>
<h2><u>Category</u></h2><br/>
<p>30 Minutes or Less, Kid-Friendly</p><br/>
<h2><u>Food group:</u></h2><br/>
<p>Vegetables, Dairy</p><br/>
<h2><u>season:</u></h2><br/>
<p> Winter,Spring,Summer, Fall</p><br/>


    </div>
    <iframe width="400" height="265" style={{marginLeft:"700px"}}src="https://www.youtube.com/embed/AdsG_4kR5tM?si=tJXc2lIHPOYPRQTw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>    <br/>
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


export default Preparation4