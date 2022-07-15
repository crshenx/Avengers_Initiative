import React, { useEffect, useState } from "react";
import AvengerCards from "./AvengerCards";
import "./HeroTeam.css";
import { Grid, Container } from "@mui/material";

function HeroTeam({ teamUp, setTeamUp, fetchLocalTeam }) {
  const LOCAL_HEROES = "http://localhost:4000/results";

  useEffect(() => {
    fetch(LOCAL_HEROES)
      .then((res) => res.json())
      .then(setTeamUp);
  }, []);

  console.log(teamUp);

  function handleRetire(hero) {
    fetch(`http://localhost:4000/results/${hero.id}`, {
      method: "Delete",
      headers: {
        "Content-Type": "Application/json",
      },
    })
      .then((r) => r.json())
      .then(fetchLocalTeam);
  }

  return (
    <div>
      <div className="headerBox">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Marvel%27s_The_Avengers_logo.svg"
          alt="avengers logo"
          className="avengersLogo"
        />
      </div>
      {/* <div className="cardContainer"> */}
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {teamUp.map((hero) => (
          <AvengerCards key={hero.id} hero={hero} handleRetire={handleRetire} />
        ))}
      </Grid>
      {/* </div> */}
    </div>
  );
}

export default HeroTeam;
