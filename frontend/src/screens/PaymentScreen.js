import React, { useState, useEffect } from "react";
import {
  Card,
  Container,
  Form,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Button,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addPaymentMethodAction } from "../actions/bookingDetailsActions";
import { createBookingAction } from "../actions/bookingActions";
import { BOOKING_CREATE_RESET } from "../constants/bookingConstants";
import { USER_DETAILS_RESET } from "../constants/userConstants";

const PaymentScreen = () => {
  const [addPaymentMethod, setAddPaymentMethod] = useState("");

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const flightDetails = useSelector((state) => state.flightDetails);
  const { loading, flight, error } = flightDetails;
  const addBookingDetails = useSelector((state) => state.addBookingDetails);
  const { passengers, paymentMethod, cabDetails } = addBookingDetails;

  const createBooking = useSelector((state) => state.createBooking);
  const { booking, success, error2 } = createBooking;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (addPaymentMethod) {
      console.log(addPaymentMethod);
      dispatch(addPaymentMethodAction(addPaymentMethod));
    }
    console.log(cabDetails);
    if (success) {
      console.log(booking._id);
      navigate(`/booking/${booking._id}`);
      dispatch({ type: BOOKING_CREATE_RESET });
      dispatch({ type: USER_DETAILS_RESET });
    }
  }, [addPaymentMethod, success]);

  const onClickHandler = (e) => {
    e.preventDefault();
    dispatch(
      createBookingAction({
        userInfo,
        flight,
        passengers,
        cabDetails,
        paymentMethod,
      })
    );
    console.log("Your Booking is Confirmed");
  };
  return (
    <>
      <Row>
        <Col
          sm={8}
          style={{
            marginLeft: "10px",
            marginRight: "10px",
            marginTop: "10px",
          }}
        >
          <h2
            style={{
              marginLeft: "15px",
              marginRight: "10px",
              marginTop: "10px",
            }}
          >
            Select Payment Method
          </h2>
          <Container>
            <Form>
              <Form.Group>
                <Row>
                  <Col>
                    <Card>
                      <Form.Check
                        type="radio"
                        label="PayPal or Credit Card"
                        id="PayPal"
                        name="paymentMethod"
                        value="PayPal"
                        onChange={(e) => {
                          setAddPaymentMethod(e.target.value);
                        }}
                        style={{
                          marginLeft: "15px",
                          marginRight: "10px",
                          marginTop: "10px",
                          marginBottom: "10px",
                        }}
                      ></Form.Check>
                    </Card>
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group>
                <Row>
                  <Col>
                    <Card>
                      <Form.Check
                        type="radio"
                        label="Stripe"
                        id="Stripe"
                        name="paymentMethod"
                        value="Stripe"
                        onChange={(e) => {
                          setAddPaymentMethod(e.target.value);
                        }}
                        style={{
                          marginLeft: "15px",
                          marginRight: "10px",
                          marginTop: "10px",
                          marginBottom: "10px",
                        }}
                      ></Form.Check>
                    </Card>
                  </Col>
                </Row>
              </Form.Group>
            </Form>
          </Container>
          <Button
            href="/cab"
            type="link"
            style={{
              marginLeft: "15px",
              marginRight: "10px",
              marginTop: "10px",
              marginBottom: "10px",
            }}
            onClick={() => navigate("")}
          >
            Need a cab?
          </Button>
        </Col>
        <Col
          style={{
            marginLeft: "10px",
            marginRight: "10px",
            marginTop: "10px",
          }}
        >
          <ListGroup>
            <Row>
              <Col
                style={{
                  marginLeft: "0px",
                  paddingRight: "0px",
                  paddingLeft: "0px",
                }}
              >
                <ListGroup.Item>Base Fare</ListGroup.Item>
              </Col>
              <Col
                style={{
                  marginLeft: "0px",
                  marginRight: "20px",
                  paddingRight: "0px",
                  paddingLeft: "0px",
                }}
              >
                <ListGroup.Item>Base Fare</ListGroup.Item>
              </Col>
            </Row>
            <Row>
              <Col
                style={{
                  marginLeft: "0px",
                  paddingRight: "0px",
                  paddingLeft: "0px",
                }}
              >
                <ListGroup.Item>Fees and Taxes</ListGroup.Item>
              </Col>
              <Col
                style={{
                  marginLeft: "0px",
                  marginRight: "20px",
                  paddingRight: "0px",
                  paddingLeft: "0px",
                }}
              >
                <ListGroup.Item>Fees and Taxes</ListGroup.Item>
              </Col>
            </Row>
            <Row>
              <Col
                style={{
                  marginLeft: "0px",
                  paddingRight: "0px",
                  paddingLeft: "0px",
                }}
              >
                <ListGroup.Item>Total Amount</ListGroup.Item>
              </Col>
              <Col
                style={{
                  marginLeft: "0px",
                  marginRight: "20px",
                  paddingRight: "0px",
                  paddingLeft: "0px",
                }}
              >
                <ListGroup.Item>Total Amount</ListGroup.Item>
              </Col>
            </Row>
          </ListGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            type="button"
            onClick={onClickHandler}
            disabled={addPaymentMethod === ""}
            style={{
              marginLeft: "25px",
              marginRight: "10px",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            Confirm Booking
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default PaymentScreen;
