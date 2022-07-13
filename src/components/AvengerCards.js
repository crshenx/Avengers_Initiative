import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import "./Cards.css"

function AvengerCards({ hero, handleRetire }) {
    const {name, thumbnail, description, urls, comics} = hero


  return (
    <div>
      <Card sx={{ maxWidth: 500, m: 2}}>
        <CardHeader
          title={name}
        />
        <CardMedia 
          className='mainPic'
          component="img"
          image={thumbnail.path + "." + thumbnail.extension}
          height="500"
        />
        <CardContent>
        <Typography variant="body2" color="text.secondary">
          
          {description !== "" ? description : "No Description Available, Click the details link for more information about his hero"}
        </Typography>
        </CardContent>
        <CardActions disableSpacing className='parentFlexSplit'>
            {/* <Button className="cardButton" variant="contained">Flip</Button> */}
            <Button className="cardButton" variant="contained" href={urls[0].url}>Details</Button>
            <Button className="cardButton" variant="contained" onClick={() => handleRetire(hero)}>Retire</Button>
            <Button className="cardButton" variant="contained" href={comics.collectionURI}>Comics</Button>
        </CardActions>
      </Card>
      </div>
  )
}

export default AvengerCards