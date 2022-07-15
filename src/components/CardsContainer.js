import { Grid, Container } from "@mui/material";
import React from "react";
import Cards from "./Cards";
import "./Cards.css";

function CardsContainer({ heroes, handleTeamUp }) {
  // const heroData = heroes.data.results
  // console.log(heroes)

  return (
    // <div className="cardContainer">

    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      {heroes.map((hero) => (
        <Cards
          key={hero.id}
          hero={hero}
          handleTeamUp={handleTeamUp}
          // image={hero.thumbnail}
          // filetype={hero.extension}
        />
      ))}
    </Grid>

    // </div>
  );
}

export default CardsContainer;
