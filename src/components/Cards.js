import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HideImageIcon from "@mui/icons-material/HideImage";
import Button from "@mui/material/Button";
import "./Cards.css";
import ReactReadMoreReadLess from "react-read-more-read-less";

function Cards({ hero, handleTeamUp }) {
  const { name, thumbnail, description, urls, comics, resourceURI } = hero;

  const [showCard, setShowCard] = useState(true);

  function handleShown() {
    setShowCard(!showCard);
  }

  // read more functionality
  const stringDescription =
    description !== ""
      ? description
      : "No Description Available, Click the details link for more information";
  //end readmore functionality

  return (
    <div className={showCard ? "cards" : "hideCards"}>
      <Card sx={{ maxWidth: 500, m: 2 }}>
        <CardHeader
          action={
            <IconButton aria-label="settings" onClick={handleShown}>
              <HideImageIcon />
            </IconButton>
          }
          title={name}
        />
        <CardMedia
          className="mainPic"
          component="img"
          image={thumbnail.path + "." + thumbnail.extension}
          height="500"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            <ReactReadMoreReadLess
              charLimit={75}
              readMoreText={"Read more"}
              readLessText={"Read less"}
              readMoreClassName="read-more-less--more"
              readLessClassName="read-more-less--less"
            >
              {stringDescription}
            </ReactReadMoreReadLess>
          </Typography>
        </CardContent>

        <CardActions disableSpacing className="parentFlexSplit">
          {/* <Button className="cardButton" variant="contained">Flip</Button> */}
          <Button className="cardButton" variant="contained" href={urls[0].url}>
            Details
          </Button>
          <Button
            className="cardButton"
            variant="contained"
            onClick={() => handleTeamUp(hero)}
          >
            Team Up
          </Button>
          <Button className="cardButton" variant="contained" href={urls[1].url}>
            Comics
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Cards;
