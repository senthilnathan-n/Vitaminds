import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import cal from "../Images/food.jpeg"
import { useNavigate } from 'react-router-dom';
export default function Food() {
  const navigate=useNavigate();
  const handlefood=()=>
  {
    navigate("/food")
  }

  return (
    <Card className='vijay' sx={{ maxWidth: 345, maxHeight:450}} style={{borderRadius:"30px"}}>
      <CardMedia
        sx={{ height: 210 }}
        image={cal}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{textAlign:"center", color:"green"}}>
          Food Safety
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Overview. Access to sufficient amounts of safe and nutritious food is key to sustaining life and promoting good health. Unsafe food containing harmful bacteria, viruses, parasites or chemical substances causes more than 200 diseases, ranging from diarrhoea to cancers.

        
    
        </Typography>
      </CardContent>
      <CardActions>
     

        <Button size="small" onClick={handlefood} style={{paddingLeft:"100px"}}>Learn More</Button>
     
      </CardActions>
    </Card>
  );
}