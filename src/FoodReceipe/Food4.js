import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import cal from "../Images/calorie.jpeg"
import { useNavigate } from 'react-router-dom';
import im6 from '../Images/Bean.jpeg'
export default function Food4() {
  const navigate= useNavigate();
  const handlecalorie=()=>
  {
    navigate("/foodpage")
  }

  return (
    <div className='vijay'>
    <Card sx={{ maxWidth:300, maxHeight:80}} style={{marginTop:"50px",marginLeft:"620px",borderRadius:"50px"}}>
     
      <CardContent style={{marginBottom:"20px", textAlign:"center"}}>
        <Button onClick={handlecalorie} size="small" style={{marginRight:"10px", marginTop:"5px"}}>Explore More</Button>
        

      </CardContent>
      <CardActions>
        
   

 
       
      </CardActions>
    </Card>
    </div>
  );
}