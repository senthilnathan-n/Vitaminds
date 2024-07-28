import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import cal from "../Images/calorie.jpeg"
import { useNavigate } from 'react-router-dom';
export default function MediaCard() {
  const navigate= useNavigate();
  const handlecalorie=()=>
  {
    navigate("/calorie")
  }

  return (
    <Card className='vijay'sx={{ maxWidth:345, maxHeight:450} } style={{borderRadius:"30px"}}>
      <CardMedia
        sx={{ height: 210 }}
        image={cal}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div"style={{textAlign:"center", color:"green"}}>
          Calorie Calculator
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The Calorie Calculator can be used to estimate the number of calories a person needs to consume each day. This calculator can also provide some simple guidelines for gaining or losing weight.

      
        </Typography>
      </CardContent>
      <CardActions>
     

        <Button onClick={handlecalorie} size="small" style={{paddingLeft:"100px"}}>Learn More</Button>
        <br></br>
     <br></br>
     <br></br>
     <br></br>
      </CardActions>
    </Card>
  );
}