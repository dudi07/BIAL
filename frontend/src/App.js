import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";

import HomeScreen from "./screens/HomeScreen";
const App = () => {
  return (
    <Router>
      <Header />
      <HomeScreen />
      <Footer />
    </Router>
  );
};

export default App;
