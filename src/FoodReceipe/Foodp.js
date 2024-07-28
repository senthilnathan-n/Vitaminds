import React from 'react'
import Nav from '../Components/Nav'
import im from '../Images/backg4.jpg'
import { Stack } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import cal from "../Images/calorie.jpeg"
import { useNavigate } from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";

import im1 from '../Images/foodb1.jpeg'
import im2 from '../Images/foodb2.jpg'
import im3 from '../Images/foodb3.jpeg'
import im4 from '../Images/foodb4.jpg'
import im5 from '../Images/foodb5.jpeg'
import im7 from '../Images/Bean.jpeg'
import im6 from '../Images/avocado.jpeg'
import im8 from '../Images/foodb8.jpeg'
import im9 from '../Images/foodb9.jpg'
import im10 from '../Images/foodb10.jpg'
import im11 from '../Images/foodb11.jpg'
import im12 from '../Images/foodb12.jpg'

import back from '../Images/light4.jpg';

import '../FoodReceipe/Foodp.css'

const Foodp = () => {
  return (
    <div style={{backgroundImage:`url(${back})`,
    
    backgroundRepeat: 'no-repeat',
backgroundAttachment: 'fixed',
backgroundPosition:'center',
backgroundSize:'cover'
    
    
    }}>
      <Nav/>



<br></br>
<br></br>

<h1 style={{textAlign:"center", color:"red"}}>Breakfast</h1>

 
 <br></br>
 <hr></hr>
 <br></br>

 {/* stack1 */}
 <Stack direction={'row'} spacing={10} style={{marginLeft:"30px"}}>

 {/* card1 */}
   <div class='vijay' >
    
 <Card sx={{ maxWidth:300,maxHeight:600}}>
      <CardMedia
        sx={{ height: 200 }}
        image={im1}
        title="green iguana"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Banana Berry Muffins
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Serve these moist muffins with a fruity flavor and full of whole grain goodness anytime.

Category: Kid-Friendly
Food group: Fruits, Grains<br></br>
<br></br>
Category: 30 Minutes or Less, Kid-Friendly
<br></br>
<br></br>
Food group: Vegetables, Protein, Dairy
<br></br>
<br></br>
Cuisine: Vegetarian

      
    <br></br>
    <br></br>
        </Typography>
      </CardContent>
      <CardActions>
        

        <Button  size="small" style={{paddingLeft:"100px"}}><Link to="/p9">Learn More</Link></Button>
       
      </CardActions>
    </Card>
    </div>
    {/* card2 */}
    <div class='vijay' >
      
    <Card sx={{ maxWidth:300,maxHeight:600}}>
      <CardMedia
        sx={{ height: 200 }}
        image={im2}
        title="green iguana"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Rise and Shine Cobbler

        </Typography>
        <Typography variant="body2" color="text.secondary">

        Enjoy this tasty treat for breakfast or as a sweet dessert. This cobbler can be made quickly in the microwave.

Category: 30 Minutes or Less, Kid-Friendly
Food group: Fruits, Grains<br></br>
<br></br>
Category: 30 Minutes or Less, Kid-Friendly
<br></br>
<br></br>
Food group: Vegetables, Protein, Dairy
<br></br>
<br></br>
Cuisine: Vegetarian

      <br></br>
    
        </Typography>
      </CardContent>
      <CardActions>
        

      <Button  size="small" style={{paddingLeft:"100px"}}><Link to="/p10">Learn More</Link></Button>
       
      </CardActions>
    </Card>
        </div>

{/* card3 */}
<div class='vijay' >
<Card sx={{ maxWidth:300,maxHeight:600}}>
      <CardMedia
        sx={{ height: 200 }}
        image={im3}
        title="green iguana"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Veggie Skillet Eggs

        </Typography>
        <Typography variant="body2" color="text.secondary">

        Quick and healthy breakfast packed with protein, veggies, and cheddar cheese.

Category: 30 Minutes or Less
Food group: Vegetables, Protein
Cuisine: Vegetarian<br></br>
<br></br>
Category: 30 Minutes or Less, Kid-Friendly
<br></br>
<br></br>
Food group: Vegetables, Protein, Dairy
<br></br>
<br></br>
Cuisine: Vegetarian

      <br></br>
      <br></br>
    
        </Typography>
      </CardContent>
      <CardActions>
        

      <Button  size="small" style={{paddingLeft:"100px"}}><Link to="/p11">Learn More</Link></Button>
       
      </CardActions>
    </Card>
  </div>
{/* card4 */}
<div class='vijay' >
<Card sx={{ maxWidth:300,maxHeight:600}}>
      <CardMedia
        sx={{ height: 200 }}
        image={im4}
        title="green iguana"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Savory Oatmeal
    </Typography>
        <Typography variant="body2" color="text.secondary">

        Switch up your morning bowl of oats with this savory oatmeal recipe made with cheese, tomatoes, and green onions. 
    <br></br>
<br></br>
Category: 30 Minutes or Less, Kid-Friendly
<br></br>
<br></br>
Food group:Grains
<br></br>
<br></br>
Cuisine: Vegetarian

      <br></br>
      <br></br>
      <br></br>
      
    
        </Typography>
      </CardContent>
      <CardActions>
        

      <Button  size="small" style={{paddingLeft:"100px"}}><Link to="/p12">Learn More</Link></Button>
       
      </CardActions>
    </Card>

        </div>


  
 </Stack>
 <br></br>
 <br></br>
 <h1 style={{textAlign:"center", color:"red"}}>Lunch</h1> 
 <br></br>
 <hr></hr>
 <br></br>
 {/* stack2 */}

 <Stack direction={'row'} spacing={10} style={{marginLeft:"30px"}}>

 {/* card1 */}
 <div class='vijay' >
 <Card className='ca' sx={{ maxWidth:300,maxHeight:500 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={im5}
        title="green iguana"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Homemade Biscuits

        </Typography>
        <Typography variant="body2" color="text.secondary">

        Make these biscuits from scratch in less than 30 minutes.

Category: 30 Minutes or Less
Food group: Grains<br></br>
<br></br>
Category: 30 Minutes or Less, Kid-Friendly
<br></br>
<br></br>
Food group: Vegetables, Protein, Dairy
<br></br>
<br></br>
Cuisine: Vegetarian

      <br></br>
    
        </Typography>
      </CardContent>
      <CardActions>
        

      <Button  size="small" style={{paddingLeft:"100px"}}><Link to="/p2">Learn More</Link></Button>
       
      </CardActions>
    </Card>
        </div>
    {/* card2 */}
    <div class='vijay' >
    <Card sx={{ maxWidth:300,maxHeight:500}}>
      <CardMedia
        sx={{ height: 200 }}
        image={im6}
        title="green iguana"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Avocado and Corn Salsa

        </Typography>
        <Typography variant="body2" color="text.secondary">

        Combine avocados and corn with fresh cilantro and lime in this tasty side. 

<br></br>
<br></br>
Category: 30 Minutes or Less, Kid-Friendly
<br></br>
<br></br>
Food group: Vegetables
<br></br>
<br></br>
Cuisine: Vegetarian

      <br></br>
      <br></br>
    
        </Typography>
      </CardContent>
      <CardActions>
        

      <Button  size="small" style={{paddingLeft:"100px"}}><Link to="/p3">Learn More</Link></Button>
       
      </CardActions>
    </Card>
        </div>

{/* card3 */}
<div class='vijay' >
<Card sx={{ maxWidth:300,maxHeight:500}}>
      <CardMedia
        sx={{ height: 200 }}
        image={im7}
        title="green iguana"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Easy Bean Soup
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Cook a healthy meal in less than 10 minutes with pantry staples. 
<br></br>
<br></br>
Category: 30 Minutes or Less, Kid-Friendly
<br></br>
<br></br>
Food group: Vegetables, Protein, Dairy
<br></br>
<br></br>
Cuisine: Vegetarian

      <br></br>
      <br></br>
    
        </Typography>
      </CardContent>
      <CardActions>
        

      <Button  size="small" style={{paddingLeft:"100px"}}><Link to="/p1">Learn More</Link></Button>
       
      </CardActions>
    </Card>
        </div>
{/* card4 */}
<div class='vijay' >
<Card sx={{ maxWidth:300,maxHeight:500}}>
      <CardMedia
        sx={{ height: 200 }}
        image={im8}
        title="green iguana"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Parmesan Peas
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Give (these) peas a chance! Try varying this recipe by using other types of cheese or adding different seasonings.<br></br>
<br></br>
Category: 30 Minutes or Less, Kid-Friendly
<br></br>
<br></br>
Food group: Vegetables, Protein, Dairy
<br></br>
<br></br>
Cuisine: Vegetarian

      <br></br>
     
    
        </Typography>
      </CardContent>
      <CardActions>
        

      <Button  size="small" style={{paddingLeft:"100px"}}><Link to="/p4">Learn More</Link></Button>
       
      </CardActions>
    </Card>

        </div>


  
 </Stack>
 <br></br>
 <br></br>
 <h1 style={{textAlign:"center", color:"red"}}>Dinner</h1> 
<br></br>
 <hr></hr>
 <br></br>
 {/* stack3 */}
 <Stack direction={'row'} spacing={10} style={{marginLeft:"30px"}}>

 {/* card1 */}
 <div class='vijay' >
 <Card sx={{ maxWidth:300,maxHeight:500}}>
      <CardMedia
        sx={{ height: 200 }}
        image={im9}
        title="green iguana"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Roast Chicken
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Serve this roasted chicken as a centerpiece at dinner, or add it to salads, sandwiches, enchiladas, or stuffed peppers.<br></br>

<br></br>
Food group: Protein<br></br>
<br></br>
Cuisine: Non-Vegetarian

      <br></br>
    
        </Typography>
      </CardContent>
      <CardActions>
        

      <Button  size="small" style={{paddingLeft:"100px"}}><Link to="/p5">Learn More</Link></Button>
       
      </CardActions>
    </Card>
        </div>
    {/* card2 */}
    <div class='vijay' >
    <Card sx={{ maxWidth:300,maxHeight:500}}>
      <CardMedia
        sx={{ height: 200 }}
        image={im10}
        title="green iguana"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Two-Bean Chili        </Typography>
        <Typography variant="body2" color="text.secondary">
        Prepare this chili in advance, and bring a bowl to work for a filling, weekday lunch.<br></br>
<br></br>
Category: Kid-Friendly<br></br>
<br></br>
Food group: Vegetables, Protein
<br></br>
<br></br>
Cuisine: Vegetarian

      <br></br>
    
        </Typography>
      </CardContent>
      <CardActions>
        

      <Button  size="small" style={{paddingLeft:"100px"}}><Link to="/p6">Learn More</Link></Button>
       
      </CardActions>
    </Card>

        </div>
{/* card3 */}
<div class='vijay' >
<Card sx={{ maxWidth:300,maxHeight:500}}>
      <CardMedia
        sx={{ height: 200 }}
        image={im11}
        title="green iguana"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Burrito Bowls        </Typography>
        <Typography variant="body2" color="text.secondary">
        Try this tortilla-less take on a burrito for an easy lunch or dinner.<br></br>
<br></br>
Category: 30 Minutes or Less, Kid-Friendly
<br></br>
<br></br>
Food group: Vegetables, Protein, Grains
<br></br>
<br></br>
Cuisine: Vegetarian

      <br></br>
    
        </Typography>
      </CardContent>
      <CardActions>
        

      <Button  size="small" style={{paddingLeft:"100px"}}><Link to="/p7">Learn More</Link></Button>
       
      </CardActions>
    </Card>
  </div>
{/* card4 */}
<div class='vijay' >
<Card sx={{ maxWidth:300,maxHeight:500}}>
      <CardMedia
        sx={{ height: 200 }}
        image={im12}
        title="green iguana"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Peanutty Stew        </Typography>
        <Typography variant="body2" color="text.secondary">
        This creamy Peanutty Stew can warm you up on a cold fall or winter day.<br></br>
<br></br>
Category: 30 Minutes or Less, Kid-Friendly
<br></br>
<br></br>
Food group: Vegetables, Protein, Dairy
<br></br>
<br></br>
Cuisine: Vegetarian

      <br></br>
    
        </Typography>
      </CardContent>
      <CardActions>
        

      <Button  size="small" style={{paddingLeft:"100px"}}><Link to="/p8">Learn More</Link></Button>
       
      </CardActions>
    </Card>

        </div>


  
 </Stack>
<br></br>
<br></br>
<br></br>
<br></br>

        
    </div>

  )
}

export default Foodp
        