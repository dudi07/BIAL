import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CabBookingScreen from "./screens/CabBookingScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import ExploreScreen from "./screens/ExploreScreen";
import FlightSearchScreen from "./screens/FlightSearchScreen";
import FlightSearchResultScreen from "./screens/FlightSearchResultScreen";
const App = () => {
  return (
    <Router>
      <main>
        <Header />
        <Routes>
          <Route path="/flight" element={<FlightSearchResultScreen />}></Route>
          <Route path="/flight" element={<FlightSearchScreen />}></Route>
          <Route path="/explore" element={<ExploreScreen />}></Route>
          <Route path="/cab_booking" element={<CabBookingScreen />}></Route>
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/" element={<HomeScreen />}></Route>
        </Routes>
      </main>
    </Router>
  );
};

export default App;
