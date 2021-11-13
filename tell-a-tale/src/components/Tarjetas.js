import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import '../css/tarjetas.css'

export default function ActionAreaCard() {
  return (
    <Card class="cardMod" sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          class="IMGCard"
          component="img"
          image="https://pbs.twimg.com/media/E9vwPTbX0AE3r0I?format=jpg&name=large"
          alt="green iguana"
        />
        <CardContent
          class="ContentCard"
          >
          <Typography class="Title" gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography class="Desc" variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}