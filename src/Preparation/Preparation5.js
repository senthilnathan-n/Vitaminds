import React from 'react'
import img5 from  '../Images/foodb9.jpg'
import img3 from '../Images/jjj.jpg'
import { Stack } from '@mui/material'
const Preparation5 = () => {
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
    
        <h1>Roast Chicken</h1>
        <hr/>
        <br></br>
        <br></br>
        
        

        <h3>Serve this roasted chicken as a centerpiece at dinner, or add it to salads, sandwiches, enchiladas, or stuffed peppers.</h3>
    
        <Stack direction={'row'}>

        <div >
    
        <br></br>
        <br></br>
        <h2><b><u>Yield:</u></b></h2><br/>
        <p>6 servings</p>
        <br></br>
        <br></br>
        
        </div>
        <img src={img5} style={{marginLeft:"300px"}}></img>
       
    </Stack>
        
        <br></br>
        <br></br>
        <h2><u>Ingredients:</u></h2>
        <br></br>
        <br></br>
        <ul>
            <li>1 tablespoon Italian seasoning</li>
            <li>1 teaspoon garlic powder</li>
            <li>Salt and pepper (to taste)</li>
            <li>1 whole chicken</li>
            <li>1 tablespoon olive oil (or canola oil)</li>
        </ul>
        <br/><br/>
        <h2><u>Steps:</u></h2>
        <br/><br/>
    
        <ol>
            <li>Preheat oven to 375 degrees F.</li>
            <li>Combine Italian seasoning, garlic powder, salt, and pepper.</li>
            <li>Rub chicken with oil, then rub with spice mixture.</li>
            <li>Place chicken breast-side down in Dutch oven or roasting pan.</li>
            <li>Bake, uncovered, until internal temperature reaches at least 165 degrees F.</li>
            <li>Let chicken rest for ten minutes before cutting.</li>
        </ol>
    <br/><br/>
    <h2><u>Notes:</u></h2>
<br/>
<p>For more flavor, try other seasonings like 1 teaspoon rosemary or thyme.
Serve with mashed sweet potatoes.Serve with mashed sweet potatoes.
Chop up leftover chicken and serve on a salad, in a wrap, or in a soup. Cooked, chopped chicken freezes well for later use.</p>
<br/>
<br/>
    <h2><u>Meal Type:</u></h2><br/>
    <p>Dinner</p><br/>
    <h2><u>Food group:</u></h2><br/>
    <p>Protein</p><br/>
    <h2><u>season:</u></h2><br/>
    <p> Winter, Fall</p><br/>
    
    
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
    
    
    
export default Preparation5