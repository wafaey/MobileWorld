import React, { useState, useEffect } from 'react';
import './MobileCard.scss'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
  width: 335,  
  color:'#52675b'

  },
  media: {
    height: 400,
  },
});
export default function MobileCard({mobile}) {
  const classes = useStyles();
  const addProductCart = ()=>{

  }
  const showProductDetails = ()=>{

  }
	return (
    <Card className={classes.root} id={mobile.key}>
    <CardActionArea>
      <CardMedia
        className={classes.media}
        image={require('../Assets/'+mobile.image)}
        title={mobile.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {mobile.brand + mobile.name}
        </Typography>
        <Typography variant="body2"  component="p">
        If you are looking for a phone that represents every experience that takes you to the future.
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" onClick={showProductDetails}>
        Details
      </Button>
      <Button size="small"  onClick={addProductCart}>
        Add to cart
      </Button>
    </CardActions>
  </Card>
	)
}

