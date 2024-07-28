import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import cal from "../Images/calorie.jpeg"
import diet from "../Images/diet.jpeg"
import { useNavigate } from 'react-router-dom';
export default function Diet() {

  const navigate=useNavigate();
  const handlediet=()=>
  {
    navigate("/diet")
  }



  return (
    <Card className='vijay' sx={{ maxWidth: 345, maxHeight:450}} style={{borderRadius:"30px"}}>
      <CardMedia
        sx={{ height: 210 }}
        image={diet}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div"style={{textAlign:"center", color:"green"}}>
          Diet and Nutritions
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The goal of a balanced diet is to consume an appropriate amount of calories, carbohydrates, protein, fat, vitamins, minerals, and water.
        This means that you can consume any food within a food group and get a similar amount of nutrients.

        </Typography>
      </CardContent>
      <CardActions>
     

        <Button onClick={handlediet} size="small" style={{paddingLeft:"100px"}}>Learn More</Button>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
      </CardActions>
    </Card>
  );
}