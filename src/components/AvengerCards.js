import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton';
import { FlipToBack, FlipToFront } from '@mui/icons-material';
import "./Cards.css"

function AvengerCards({ hero, handleRetire }) {
    const [showBack, setShowBack] = useState(false)
    const {name, thumbnail, description, urls, comics, events} = hero


    function handleFlip() {
      setShowBack(!showBack)
    }


  return (
    <div className={!showBack ? "front" : "back"}>
      <Card sx={{ maxWidth: 500, m: 2}}>
        <CardHeader
          action={
            <IconButton aria-label="flip card" onClick={handleFlip}>
              {!showBack ? <FlipToBack /> : <FlipToFront />}
            </IconButton>
          }
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
          {!showBack ? description : events.items.slice(0,5).map(event => (
            <li id="events"key={event.resourceURI}>{event.name}</li>
          ))}
          {/* {description !== "" ? description : "No Description Available, Click the details link for more information about his hero"} */}
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