import {
  Badge,
  Button,
  ButtonGroup,
  Card,
  Col,
  Form,
  InputGroup,
  ListGroup,
  Row,
} from 'react-bootstrap';
import products from '../data';
import { Minus, Plus } from 'react-feather';

const CartScreen = () => {
  const resultProduct = products.find((product) => product._id === '1');
  console.log(resultProduct);

  return (
    <>
      <Row className="my-4">
        <Col lg="9" md="6">
          <Card className="rounded-0 p-2">
            <Row>
              <Col lg="3">
                <Card className="rounded-0">
                  <Card.Img
                    className="rounded-0"
                    src={resultProduct.image}
                    alt={resultProduct.name}
                  />
                </Card>
              </Col>
              <Col lg="7">
                <ListGroup variant="flush">
                  <ListGroup.Item>{resultProduct.name}</ListGroup.Item>
                  <ListGroup.Item>
                    <Badge>{resultProduct.category}</Badge>
                  </ListGroup.Item>
                  <ListGroup.Item as="strong">
                    Rp{resultProduct.price}
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col
                lg="2"
                className="d-flex justify-content-center align-items-end"
              >
                <Form>
                  <InputGroup className="mb-3 rounded-0">
                    <InputGroup.Text
                      as={Button}
                      onClick={() => console.log('min')}
                      className="rounded-0"
                    >
                      <Minus size={16} />
                    </InputGroup.Text>
                    <Form.Control aria-label="Amount (to the nearest dollar)" />
                    <InputGroup.Text
                      as={Button}
                      onClick={() => console.log('plus')}
                      className="rounded-0"
                    >
                      <Plus size={16} />
                    </InputGroup.Text>
                  </InputGroup>
                  <ButtonGroup className="w-100">
                    <Button bg="danger" className="border-0" as={Badge}>
                      min: 1
                    </Button>
                    <Button bg="danger" className="border-0" as={Badge}>
                      max: 15
                    </Button>
                  </ButtonGroup>
                </Form>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col lg="3" md="6">
          <Card className="rounded-0">
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>Summary Cart</ListGroup.Item>
                <ListGroup.Item>Total: - </ListGroup.Item>
                <ListGroup.Item>
                  <Button variant="dark" className="w-100">
                    Buy
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default CartScreen;
