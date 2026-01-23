import { useState } from 'react';
import {
  Badge,
  Button,
  Card,
  Col,
  Form,
  InputGroup,
  ListGroup,
  Row,
} from 'react-bootstrap';
import { Minus, Plus, Trash } from 'react-feather';
import products from '../data';
import { useCart } from '../hooks/useCart';

const CartScreen = () => {
  const {
    cart,
    decrementQtyProduct,
    incrementQtyProduct,
    removeProductFromCart,
    updateInputProductQty,
    validateOnBlur,
    cartSummary,
  } = useCart();
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
            {cart.length ? (
              <>
                {cart.map((product, idx) => (
                  <Row key={idx} className="mb-1">
                    <Col lg="3">
                      <Card className="rounded-0">
                        <Card.Img
                          className="rounded-0"
                          src={product.image}
                          alt={product.name}
                        />
                      </Card>
                    </Col>
                    <Col lg="6">
                      <ListGroup variant="flush">
                        <ListGroup.Item
                          as="div"
                          className="d-flex justify-content-between align-items-center px-0"
                        >
                          <div>
                            <span className="fw-bold">{product.name}</span>
                            <Badge className="mx-1">{product.category}</Badge>
                          </div>
                          <div>
                            <Button
                              variant="danger"
                              size="sm"
                              onClick={() => removeProductFromCart(product)}
                            >
                              <Trash size={16} />
                            </Button>
                          </div>
                        </ListGroup.Item>
                        <ListGroup.Item className="fw-bold px-0">
                          Stok: {product.countInStock}
                        </ListGroup.Item>
                        <ListGroup.Item as="strong" className="px-0">
                          Rp{product.price} x {product.qty} = Rp
                          {cartSummary[product._id].toLocaleString('id-ID')}
                        </ListGroup.Item>
                      </ListGroup>
                    </Col>
                    <Col lg="3">
                      <Form>
                        <InputGroup className="rounded-0">
                          <Button
                            size="sm"
                            className="rounded-0"
                            disabled={product.qty <= 1}
                            onClick={() => decrementQtyProduct(product)}
                          >
                            <Minus size={16} />
                          </Button>
                          <Form.Control
                            size="sm"
                            type="text"
                            name="product_qty"
                            className="text-center"
                            value={product.qty}
                            onChange={(e) =>
                              updateInputProductQty(product, e.target.value)
                            }
                            onBlur={() => validateOnBlur(product)}
                          />
                          <Button
                            size="sm"
                            className="rounded-0"
                            disabled={product.qty >= product.countInStock}
                            onClick={() => incrementQtyProduct(product)}
                          >
                            <Plus size={16} />
                          </Button>
                        </InputGroup>
                        <div>
                          <Badge
                            bg="danger"
                            className="border-0 rounded-0 w-50"
                          >
                            min: 1
                          </Badge>
                          <Badge
                            bg="danger"
                            className="border-0 rounded-0 w-50"
                          >
                            max: {product.countInStock}
                          </Badge>
                        </div>
                      </Form>
                    </Col>
                  </Row>
                ))}
              </>
            ) : (
              <Row>
                <Col>
                  <Card className="rounded-0">
                    <Card.Body>
                      <Card.Text className="text-center">
                        Empty Products
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            )}
          </Card>
        </Col>
        <Col lg="3" md="6">
          <Card className="rounded-0">
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item className="fw-bold">Total Price</ListGroup.Item>
                <ListGroup.Item className="fw-bold">
                  Rp{cartSummary.total}
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
