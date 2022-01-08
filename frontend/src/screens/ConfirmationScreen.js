import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ConfirmationScreen = () => {
  const createBooking = useSelector((state) => state.createBooking);
  const { booking } = createBooking;
  return (
    <div>
      <Card
        style={{
          marginLeft: "10px",
          marginRight: "10px",
          marginTop: "10px",
        }}
      >
        <Row>
          <Col
            style={{
              marginLeft: "10px",
              marginRight: "10px",
              marginTop: "10px",
            }}
          >
            <h3>Your Booking is Comfirmed</h3>
          </Col>
        </Row>
      </Card>
      <Link to="/Explore">Explore</Link>
    </div>
  );
};

export default ConfirmationScreen;
