import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-date-picker";
import { Form } from "react-bootstrap";
import axios from "axios";

const HomeScreen = () => {
  const [flight, setFlight] = useState({});

  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const [date, setDate] = useState("");
  const url = `http://localhost:5000/flights?dep_iata=${from}&arr_iata=${to}&arr_scheduled_time_dep=2021-12-3`;
  async function fetchData() {
    await axios
      .get(url)
      .then((res) => console.log(res.data))
      .catch((error) => console.log("Error"));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFrom(e.target[0].value);
    setTo(e.target[1].value);
    setDate(e.target[2].value);
    console.log(to);
    console.log(e.target);
    fetchData();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={to}
          onChange={(e) => setTo(e.target.to)}
          placeholder="To"
          type="text"
          required
        ></input>
        <input
          value={from}
          onChange={(e) => setFrom(e.target.from)}
          placeholder="From"
          type="text"
          required
        ></input>
        <input
          value={date}
          onChange={(e) => setDate(e.target.date)}
          placeholder="Date"
          type="date"
          required
        ></input>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default HomeScreen;
