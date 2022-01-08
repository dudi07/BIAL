import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { addPassengerAction } from "../actions/bookingDetailsActions";
import { useNavigate } from "react-router-dom";
const BookingScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const flightDetails = useSelector((state) => state.flightDetails);
  const { loading, flight, error } = flightDetails;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState(0);

  const [passengers, setPassengers] = useState([]);

  useEffect(() => {}, [passengers]);

  // const addBookingDetails = useSelector((state) => state.addBookingDetails);
  // const { paymentMethod, passengers } = addBookingDetails;
  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch(addPassengerAction(firstName, lastName, gender, age));
    console.log(e.target);

    setPassengers([...passengers, { firstName, lastName, gender, age }]);

    setFirstName("");
    setLastName("");
    setGender("");
    setAge(0);
  };

  const onClickHandler = () => {
    dispatch(addPassengerAction(passengers));
    navigate("/flight/payment");
  };
  return (
    <>
      <Card style={{ width: "83rem", marginLeft: "50px", marginRight: "50px" }}>
        <Card.Body>
          <Form onSubmit={submitHandler}>
            <Row>
              <Col>
                <Form.Control
                  type="text"
                  value={firstName}
                  placeholder="First name"
                  onChange={(e) => setFirstName(e.target.value)}
                ></Form.Control>
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  value={lastName}
                  placeholder="Last name"
                  onChange={(e) => setLastName(e.target.value)}
                ></Form.Control>
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  value={gender}
                  placeholder="Gender"
                  onChange={(e) => setGender(e.target.value)}
                ></Form.Control>
              </Col>
              <Col>
                <Form.Control
                  type="Number"
                  value={age}
                  placeholder="Age"
                  onChange={(e) => setAge(e.target.value)}
                ></Form.Control>
              </Col>
            </Row>
            <br />
            <Row
              style={{
                marginTop: "8px",
                marginLeft: "5px",
              }}
            >
              <Button type="submit" variant="primary">
                Add Passenger
              </Button>
            </Row>
          </Form>
        </Card.Body>
      </Card>
      <Row>
        <Col>
          <Button
            type="button"
            variant="primary"
            onClick={onClickHandler}
            disabled={passengers.length === 0}
          >
            Proceed To Payment
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default BookingScreen;
