import React from "react";

const FormContainer = ({ children }) => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={6}>{children}</Col>
      </Row>
    </Container>
  );
};

export default FormContainer;
