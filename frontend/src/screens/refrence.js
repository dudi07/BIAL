<Row>
  <Col md={3}>
    <h2>User Profile</h2>
    {message && <Message variant="danger">{message}</Message>}
    {error && <Message variant="danger">{error}</Message>}
    {success && <Message variant="success">Profile Updated</Message>}
    {loading && <Loader />}
    <Form onSubmit={submitHandler}>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="name"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></Form.Control>
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <Form.Group controlId="confirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <br />
      <div className="d-grid gap-2">
        <Button type="submit" variant="primary" className="mb-2">
          Update
        </Button>
      </div>
    </Form>
  </Col>
  <Col>
    <h2>My Bookings</h2>
  </Col>
</Row>;



<Route path="/booking/:id" element={<ConfirmationScreen />} />
<Route path="/cab" element={<CabBookingScreen />} />
<Route path="/flight/payment" element={<PaymentScreen />} />
<Route path="/flight/booking" element={<BookingScreen />} />

<Route path="/profile" element={<ProfileScreen />} />
<Route path="/" element={<HomeScreen />} />



<div className=" justify-center items-center min-h-screen  dark:bg-gray-900">
        <div className="flex flex-col  justify-items-center items-center ">
          <h1 className="font-sans my-4  font-bold tracking-wide leading-loose text-white text-4xl">
            The Best Travel Destinations
          </h1>
        </div>
        <div className="flex item-center justify-center py-24 ">
          <div className="bg-white p-8 rounded-lg shadow-lg w-3/4">
            <header className="bg-gray-100 rounded-t-lg py-5 px-8 text-xl font-bold">
              I am a card
            </header>
            <div className="p-8 text-center ">
              <p>This is a card</p>
              <button className="bg-blue-800 text-blue-300 rounded-lg px-4 mt-5 hover:text-white">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>