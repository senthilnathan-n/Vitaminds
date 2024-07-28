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

import im3 from '../Images/avocado.jpeg'
export default function Food1() {
  const navigate= useNavigate();
  const handlecalorie=()=>
  {
    navigate("/calorie")
  }
  const cardStyle = {
    width: '200px',
    height: '300px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    overflow: 'hidden',
    transition: 'transform 0.3s ease',
    ':hover': {
      transform: 'scale(1.05)',
    },
  };

  return (
    <div className='vijay'>

    <Card sx={{ maxWidth:400,maxHeight:"400", paddingLeft:"px"}} style={{borderRadius:"2px"}}>
      <CardMedia
        sx={{ height: 200 }}
        image={im3}
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
Category: Kid-Friendly
<br></br>
<br></br>
Food group: Vegetables
      <br></br>
     
        </Typography>
      </CardContent>
      <CardActions>
     <br></br>
     <br></br>
    

  
     <Button  size="small" style={{paddingLeft:"100px"}}><Link to="/p3">Learn More</Link></Button>     <br></br>
     <br></br>
     <br></br>
       
      </CardActions>
      
    </Card>
        </div>
  );
}