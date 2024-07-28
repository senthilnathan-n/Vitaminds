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

import im4 from '../Images/Brussels.jpeg'
export default function Food2() {
  const navigate= useNavigate();
  const handlecalorie=()=>
  {
    navigate("/calorie")
  }

  return (
    <div className='vijay'>
    <Card sx={{ maxWidth:400,maxHeight:500, paddingLeft:"px"}}>
      <CardMedia
        sx={{ height: 200 }}
        image={im4}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Roasted Brussels Sprouts
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Roasting Brussels sprouts creates a warm, flavorful, and versatile vegetable dish. 
<br></br>
<br></br>
Category: 30 Minutes or Less
<br></br>
<br></br>
Food group: Vegetables

      <br></br>
   
        </Typography>
      </CardContent>
      <CardActions>
     

      <Button  size="small" style={{paddingLeft:"100px"}}><Link to="/p13">Learn More</Link></Button>     <br></br>
     
      </CardActions>
      
    
      <br></br>
    </Card>
    </div>
  );
}