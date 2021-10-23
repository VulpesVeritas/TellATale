import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <Card  class="card">
      <CardActionArea>
        <CardMedia class ="IMGCard"
          component="img"
  
          image="https://pbs.twimg.com/media/E9vwPTbX0AE3r0I?format=jpg&name=large"
          alt="Agony"
        />
        <CardContent>
          <Typography class = "text-card text-card-principal" gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography class = "text-card" variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}