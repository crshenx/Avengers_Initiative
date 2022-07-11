// import logo from "../assets/logo.svg";
import MD5 from "crypto-js/md5";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";
import "../App.css";
import Header from "./Header";
import React, { useState, useEffect } from "react";
import {
  BASE_URL,
  ENDPOINT,
  PUBLIC_API_KEY,
  URL_WITH_ENDPOINT,
  PRIVATE_KEY,
} from "../sensitivedata";
const getHash = (ts, secretKey, publicKey) => {
  return MD5(ts + secretKey + publicKey).toString();
};

function App() {
  let value = `sp`;
  let ts = Date.now().toString();
  let publicKey = PUBLIC_API_KEY;
  let secretKey = PRIVATE_KEY;
  let hash = getHash(ts, secretKey, publicKey);
  let url = `${URL_WITH_ENDPOINT}?ts=${ts}&apikey=${publicKey}&hash=${hash}&nameStartsWith=${value}`;

  const [heroes, setHeroes] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((r) => r.json())
      .then(setHeroes);
  }, []);

  console.log(heroes);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />}></Route>
      </Routes>
    </Router>
  );
}

export default App;