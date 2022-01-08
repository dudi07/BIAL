import React from "react";

const Passenger = ({ passenger }) => {
  return (
    <Form>
      <Row>
        <Col>{passenger.travellerName}</Col>
      </Row>
    </Form>
  );
};

export default Passenger;
