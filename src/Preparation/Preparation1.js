import { Stack } from '@mui/material'
import React from 'react'
import im1 from '../Images/Bean.jpeg'
import img2 from '../Images/foodb5.jpeg'
import img3 from '../Images/jjj.jpg'
const Preparation1 = () => {
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

    <h1>Easy Bean Soup</h1>
    <hr/>
    <br></br>
    <br></br>
    
    
    <h3>Cook a healthy meal in less than 10 minutes with pantry staples.  </h3>
<Stack direction={'row'}>

    <div>

    <br></br>
    <br></br>
    <h2><b><u>Yield:</u></b></h2><br/>
    <p>4 servings</p>
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
    <img src={im1} style={{marginLeft:"200px", marginTop:"60px"}}></img>
</Stack>
  
    <br></br>
    <br></br>
    <h2><u>Ingredients:</u></h2>
    <br></br>
    <br></br>
    <ul>
        <li>1 tablespoon olive oil</li>
        <li>1 teaspoon garlic (minced)</li>
        <li>1/4 cup onion (finely chopped)</li>
        <li>2 cans beans (15.8 oz cans, great northern beans, rinsed and drained)</li>
        <li>1 can diced tomatoes (14.5 oz can, with basil, garlic and oregano)</li>
        <li>1 can vegetable stock (14 oz can, low-sodium)</li>
        <li>4 cups kale (torn into small pieces )</li>
        <li>1 tablespoon lemon juice</li>
        <li>1/2 cup grated parmesan cheese</li>
        
    </ul>
    <br/><br/>
    <h2><u>Steps:</u></h2>
    <br/><br/>

    <ol>
        <li>In a medium saucepan, heat oil over medium heat and sauté garlic and onion for 3 minutes or until onion is tender.</li>
        <li>Add beans, tomatoes and broth to saucepan. Stir and simmer for 5 minutes. Add kale and cook until tender, for about 2 minutes.</li>
        <li>Mix in lemon juice and Parmesan cheese just before serving. Optional, garnish with finely chopped fresh basil or dried basil.</li>
    </ol>
<br/><br/>

<h2><u>Notes:</u></h2>
<br/>
<p>Cooked, dried beans may be substituted for canned beans. Using prepared dry beans in place of canned will reduce sodium in this dish. If you can’t find diced tomatoes with basil, garlic and oregano, use regular diced tomatoes and add dried versions of these seasonings.</p>
<br/>
<br/>
<h2><u>Meal Type:</u></h2><br/>
<p>Lunch, Dinner</p><br/>
<h2><u>Category</u></h2><br/>
<p>30 Minutes or Less, Kid-Friendly</p><br/>
<h2><u>Food group:</u></h2><br/>
<p>Vegetables, Protein, Dairy</p><br/>
<h2><u>season:</u></h2><br/>
<p> Winter, Fall</p><br/>
<h2><u>cuisine:</u></h2><br/>
<p> Vegetarian</p><br/>

    </div>
    <iframe width="400" height="265" style={{marginLeft:"700px"}} src="https://www.youtube.com/embed/xv891OeQrs8?si=fxjXWN3ERhl5VDsl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>    <br/>
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

export default Preparation1