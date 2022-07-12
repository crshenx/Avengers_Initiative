// import logo from "../assets/logo.svg";
import MD5 from "crypto-js/md5";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";
import "../App.css";
import Header from "./Header";
// import CardsContainer from "./CardsContainer";
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
  const [team, setTeam] = useState(null)


  let value = `spi`;
  let ts = Date.now().toString();
  let publicKey = PUBLIC_API_KEY;
  let secretKey = PRIVATE_KEY;
  let hash = getHash(ts, secretKey, publicKey);
  let url = `${URL_WITH_ENDPOINT}?ts=${ts}&apikey=${publicKey}&hash=${hash}&nameStartsWith=${value}`;

  const [heroes, setHeroes] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((r) => r.json())
      .then((data) => setHeroes(data.data.results));
  }, []);

  // console.log(heroes);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />}></Route>
      </Routes>
      <CardsContainer heroes={heroes}/>
      <HeroTeam />
    </Router>
  );
}

export default App;
