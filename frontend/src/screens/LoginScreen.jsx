import { useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';

const LoginScreen = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with:', { user, password });
  };

  return (
    <>
      <Row className="justify-content-center">
        <Col md="6" className="mt-5">
          <Card className="p-3">
            <Card.Body>
              <h3 className="text-center mb-4 fw-bold">Masuk</h3>

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formUsernameOrPassword">
                  <Form.Label>Username or Password</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Username or Email"
                    value={user}
                    name="user"
                    onChange={(e) => setUser(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formPassword">
                  <Form.Label>Kata Sandi</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                <Button
                  variant="dark"
                  type="submit"
                  className="w-100 fw-bold py-2 mb-3"
                >
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default LoginScreen;
