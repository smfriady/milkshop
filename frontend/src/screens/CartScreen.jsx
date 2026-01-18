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
import { Minus, Plus } from 'react-feather';
import products from '../data';
import { useState } from 'react';

const CartScreen = () => {
  const [qtyProduct, setQtyProduct] = useState(1);

  const resultProduct = products.find((product) => product._id === '1');
  console.log(qtyProduct);

  return (
    <>
      <ListGroup variant="flush">
        <ListGroup.Item as="h3">Cart</ListGroup.Item>
      </ListGroup>
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
                  <ListGroup.Item>
                    Stok: {resultProduct.countInStock}
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
                      className="rounded-0"
                      disabled={qtyProduct === 0 || qtyProduct === 1}
                      onClick={() =>
                        setQtyProduct((prev) => (prev > 1 ? prev - 1 : prev))
                      }
                    >
                      <Minus size={16} />
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      name="product_qty"
                      className="text-center"
                      value={qtyProduct}
                      onChange={(e) => {
                        let value = e.target.value.trim();
                        if (value.length < 1) {
                          // 1. jika input value 0
                          setQtyProduct(0);
                        } else if (isNaN(value)) {
                          // 2. jika input bukan angka
                          setQtyProduct(0);
                        } else if (value >= 15) {
                          // 3. jika input value lebih besar dari stok
                          setQtyProduct(15);
                        } else {
                          setQtyProduct(parseInt(value));
                        }
                      }}
                    />
                    <InputGroup.Text
                      as={Button}
                      className="rounded-0"
                      disabled={qtyProduct === 15}
                      onClick={() =>
                        setQtyProduct((prev) => (prev < 15 ? prev + 1 : prev))
                      }
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
                <ListGroup.Item>
                  Total: Rp{resultProduct.price * qtyProduct}
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    variant="dark"
                    className="w-100"
                    disabled={qtyProduct === 0}
                  >
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
