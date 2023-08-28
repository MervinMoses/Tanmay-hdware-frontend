import React from "react";
import {CardActionArea, Grid} from '@mui/material'
import { Card, CardContent, Typography,CardActions,Button} from '@mui/material';



export const Product = () => {
  return (
    <>
    <div class="wrapper d-flex flex-column min-vh-100 bg-light">

<header class="header header-sticky mb-4">
   <Grid container spacing={4}>
  <Grid item xs={4}>
  <Card sx={{ maxWidth: 500 }}>
  <CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
      </CardActionArea>
    </Card>



    
    


  </Grid>
  <Grid item xs={4}>
  <Card sx={{ maxWidth: 800 }}>
  <CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
      </CardActionArea>
    </Card>



  </Grid>

  <Grid item xs={4}>
  <Card sx={{ maxWidth: 800 }}>
  <CardActionArea style={{backgroundColor:"lightblue"}}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
      </CardActionArea>
    </Card>


  </Grid>
  </Grid>
   
</header>
</div>

         
     
    </>
  );
};
