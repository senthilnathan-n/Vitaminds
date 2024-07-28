import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import cal from "../Images/calorie.jpeg"
import { useNavigate } from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";

import im5 from '../Images/smoothie.jpeg'
export default function Food3() {
  const navigate= useNavigate();
  const handlecalorie=()=>
  {
    navigate("/calorie")
  }

  return (
    <div className='vijay'>
    <Card sx={{ maxWidth:420,maxHeight:500, paddingLeft:"px"}}>
      <CardMedia
        sx={{ height: 200 }}
        image={im5}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Avocado Melon Smoothie
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Enjoy a breakfast full of fruits and vegetables with this breakfast smoothie. 

<br></br><br></br>Category: 30 Minutes or Less, Kid-Friendly
<br></br>
<br></br>
Food group: Fruits, Vegetables, Dairy
Banana Berry Muffins


      
        </Typography>
      </CardContent>
      <CardActions>
     

      <Button  size="small" style={{paddingLeft:"100px"}}><Link to="/p14">Learn More</Link></Button>     <br></br>
       
      </CardActions>
      <br></br>
    
     
    </Card>
    </div>
  );
}