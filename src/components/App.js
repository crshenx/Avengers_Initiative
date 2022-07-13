// import logo from "../assets/logo.svg";
import MD5 from "crypto-js/md5";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
// import SearchBar from "./SearchBar";
import "../App.css";
import Header from "./Header";
import MyTeam from "./MyTeam";
import React, { useState, useEffect } from "react";

import {
  BASE_URL,
  ENDPOINT,
  PUBLIC_API_KEY,
  URL_WITH_ENDPOINT,
  PRIVATE_KEY,
} from "../sensitivedata";
import CardsContainer from "./CardsContainer";
import HeroTeam from "./HeroTeam";
const getHash = (ts, secretKey, publicKey) => {
  return MD5(ts + secretKey + publicKey).toString();
};

function App() {
  // const [team, setTeam] = useState(null)

  const [heroes, setHeroes] = useState([]);
  const [urlEndPoints, setUrlEndPoints] = useState("");
  const [searchInput, setSearchInput] = useState("");

  // console.log(heroes);

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

  return (
    <Router>
      <Header
        searchInput={searchInput}
        heroes={heroes}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        position="sticky"
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myteam" element={<MyTeam />} />
      </Routes>

      <CardsContainer heroes={heroes} />
      <HeroTeam />
    </Router>
  );
}

export default App;
