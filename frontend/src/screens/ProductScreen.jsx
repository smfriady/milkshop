import { Button, Card, Col, ListGroup, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Rating from '../components/Rating';

import products from '../data';
import { useCart } from '../hooks/useCart';

const ProductScreen = () => {
  const { addToCart, productInCart } = useCart();

  const productId = useParams();

  const resultProduct = products.find(
    (product) => product._id === productId.id,
  );

  return (
    <>
      <Button variant="dark" className="my-1" as={Link} to="/">
        Back
      </Button>
      <Row>
        <Col md="5">
          <Card className="border-0 rounded-0">
            <Card.Img
              className="rounded-0"
              src={resultProduct.image}
              alt={resultProduct.name}
            />
          </Card>
        </Col>
        <Col md="4">
          <ListGroup variant="flush">
            <ListGroup.Item>Name: {resultProduct.name}</ListGroup.Item>
            <ListGroup.Item>Category: {resultProduct.category}</ListGroup.Item>
            <ListGroup.Item>Stock: {resultProduct.countInStock}</ListGroup.Item>
            <ListGroup.Item className="fst-italic">
              {resultProduct.description}
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between align-items-center">
              <div>
                <Rating valueRating={resultProduct.rating} />
              </div>
              <div>{resultProduct.numReviews} reviews</div>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md="3">
          <ListGroup variant="flush">
            <ListGroup.Item>Stock: {resultProduct.countInStock}</ListGroup.Item>
            <ListGroup.Item>
              {productInCart(resultProduct) ? (
                <Button
                  variant="primary"
                  className="w-100"
                  as={Link}
                  to="/cart"
                >
                  See In Cart
                </Button>
              ) : (
                <Button
                  variant="dark"
                  className="w-100"
                  onClick={() => addToCart(resultProduct)}
                >
                  Add To Cart
                </Button>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
