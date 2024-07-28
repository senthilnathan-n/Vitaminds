import React from 'react'
import img2 from '../Images/food5.jpg'
import img3 from '../Images/jjj.jpg'
import { Stack } from '@mui/material'
const Preparation3 = () => {
  return (
        <>
                
        <body style={{backgroundImage: `url(${img3})`,
backgroundPosition:"center",
backgroundSize:"cover",
backgroundRepeat:"no-repeat",
backgroundAttachment:"fixed",}}>
    <br></br>
    <br></br>
    <br></br>
    <br></br>

        
        <div className='sen' style={{marginLeft:"700px"}}>
    
        <h1>Avocado and Corn Salsa</h1>
        <hr/>
        <br></br>
        <br></br>
        
        
    
        <h3>Combine avocados and corn with fresh cilantro and lime in this tasty side.  </h3>
        <br/>
        <Stack direction={'row'}>

    
        <div>
            
            
        <br></br>
        <br></br>
        <h2><b><u>Yield:</u></b></h2><br/>
        <p>5</p>
      
        </div>
        <img src={img2} style={{width:"400px", marginLeft:"300px"}}></img>
       
        
        </Stack>
        <h2><u>Ingredients:</u></h2>
        <br></br>
        <br></br>
        <ul>
            <li>1 large avocados (diced)</li>
            <li>3/4 cup corn (frozen, thawed)</li>
            <li>1/2 cup tomato (grape, quartered)</li>
            <li>1 tablespoon cilantro (fresh)</li>
            <li>2 teaspoons lime juice</li>
            <li>1/4 teaspoon salt</li>
            
            
        </ul>
        <br/><br/>
        <h2><u>Steps:</u></h2>
        <br/><br/>
    
        <ol>
            <li>Wash hands with soap and water.</li>
            <li>Toss avocado, corn, tomatoes, cilantro, lime juice, and salt in a medium bowl.</li>
            <li>Chill one hour and then serve.</li>
        </ol>
    <br/><br/>
    
    <h2><u>Notes:</u></h2>
    <br/>
    <p>Cooked, dried beans may be substituted for canned beans. Using prepared dry beans in place of canned will reduce sodium in this dish. If you can’t find diced tomatoes with basil, garlic and oregano, use regular diced tomatoes and add dried versions of these seasonings.</p>
    <br/>
    <br/>
    <h2><u>Meal Type:</u></h2><br/>
    <p>Lunch, Dinner,snack</p><br/>
    <h2><u>Category</u></h2><br/>
    <p> Kid-Friendly</p><br/>
    <h2><u>Food group:</u></h2><br/>
    <p>Vegetables</p><br/>
    <h2><u>season:</u></h2><br/>
    <p> Spring,Summer</p><br/>
    
        </div>
        <iframe width="400" height="265" style={{marginLeft:"700px"}} src="https://www.youtube.com/embed/zgOIz4Lgz9Q?si=mPu5_wCagu9D_Vmo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>    <br/>
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
    
   
    


export default Preparation3