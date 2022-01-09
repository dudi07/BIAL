import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import CabBookingScreen from "./screens/CabBookingScreen";
import FlightSearchScreen from "./screens/FlightSearchScreen";
import FlightSearchResultScreen from "./screens/FlightSearchResultScreen";
import ExploreScreen from "./screens/ExploreScreen";
import BookingConfirmation from "./screens/BookingConfirmation";
const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route
            path="/bookingConfirmation"
            element={<BookingConfirmation />}
          ></Route>
          <Route path="/explore" element={<ExploreScreen />}></Route>
          <Route path="/flightSearch" element={<FlightSearchResultScreen />} />
          <Route path="/flight" element={<FlightSearchScreen />} />
          <Route path="/cab_booking" element={<CabBookingScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/" element={<HomeScreen />}></Route>
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};
export default App;
