import React, { useState, useEffect } from "react";
import MD5 from "crypto-js/md5";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../App.css";
import Header from "./Header";
import { theme } from "./AppTheme.js";
import {
  PUBLIC_API_KEY,
  URL_WITH_ENDPOINT,
  PRIVATE_KEY,
} from "../sensitivedata";
import CardsContainer from "./CardsContainer";
import HeroTeam from "./HeroTeam";
import { Container } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

import About from "./About";
// import { Container } from "@mui/system";

const getHash = (ts, secretKey, publicKey) => {
  return MD5(ts + secretKey + publicKey).toString();
};

function App() {
  const [heroes, setHeroes] = useState([]);
  const [urlEndPoints, setUrlEndPoints] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [teamUp, setTeamUp] = useState([]);

  let value = searchInput;
  const nameStartsWith = "&nameStartsWith=";
  let ts = Date.now().toString();
  let publicKey = PUBLIC_API_KEY;
  let secretKey = PRIVATE_KEY;
  let hash = getHash(ts, secretKey, publicKey);
  let url = `${URL_WITH_ENDPOINT}?ts=${ts}&apikey=${publicKey}&hash=${hash}${urlEndPoints}${value}`;

  useEffect(() => {
    fetch(url)
      .then((r) => r.json())
      .then((data) => setHeroes(data.data.results));
  }, []);

  function handleChange(e) {
    setSearchInput(e.target.value);
    setUrlEndPoints(nameStartsWith);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setUrlEndPoints(nameStartsWith);
    searchFetch();
    setSearchInput("");
  }

  function searchFetch() {
    fetch(url)
      .then((r) => r.json())
      .then((data) => setHeroes(data.data.results));
  }

  function resetHome() {
    searchInput("");
    setUrlEndPoints("");
    fetch(url)
      .then((r) => r.json())
      .then((data) => setHeroes(data.data.results));
  }

  function handleTeamUp(hero) {
    fetch("http://localhost:4000/results", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(hero),
    })
      .then((r) => r.json())
      .then(fetchLocalTeam);
  }

  function fetchLocalTeam() {
    fetch("http://localhost:4000/results")
      .then((res) => res.json())
      .then(setTeamUp);
  }

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header
          searchInput={searchInput}
          heroes={heroes}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          resetHome={resetHome}
          position="sticky"
        />
        <Routes>
          <Route
            path="/"
            element={
              <Container maxWidth={"false"}>
                <CardsContainer heroes={heroes} handleTeamUp={handleTeamUp} />
              </Container>
            }
          />
          <Route
            path="/myteam"
            element={
              <Container maxWidth={"false"}>
                <HeroTeam
                  teamUp={teamUp}
                  setTeamUp={setTeamUp}
                  fetchLocalTeam={fetchLocalTeam}
                />
              </Container>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
