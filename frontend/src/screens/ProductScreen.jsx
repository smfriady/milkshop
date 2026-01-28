import { Button, Card, Col, ListGroup, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Rating from '../components/Rating';
import { useCart } from '../hooks/useCart';
import Loader from '../components/Loader';

const ProductScreen = () => {
  const productId = useParams();
  const { addToCart, existingProduct } = useCart();

  const { data, isLoading, error } = useQuery({
    queryKey: ['product', productId.id],
    queryFn: async () => {
      const { data } = await axios.get(`/api/product/${productId.id}`);
      return data;
    },
    staleTime: 0,
    gcTime: 1000 * 60 * 5,
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage />;
  }
  return (
    <>
      <Button variant="dark" className="my-1" as={Link} to="/">
        Back
      </Button>
      <Row>
        <Col md="5">
          <Card className="border-0 rounded-0">
            <Card.Img className="rounded-0" src={data.image} alt={data.name} />
          </Card>
        </Col>
        <Col md="4">
          <ListGroup variant="flush">
            <ListGroup.Item>Name: {data.name}</ListGroup.Item>
            <ListGroup.Item>Category: {data.category}</ListGroup.Item>
            <ListGroup.Item>Stock: {data.countInStock}</ListGroup.Item>
            <ListGroup.Item className="fst-italic">
              {data.description}
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between align-items-center">
              <div>
                <Rating valueRating={data.rating} />
              </div>
              <div>{data.numReviews} reviews</div>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md="3">
          <ListGroup variant="flush">
            <ListGroup.Item>Stock: {data.countInStock}</ListGroup.Item>
            <ListGroup.Item>
              {existingProduct(data) ? (
                <Button
                  variant="primary"
                  className="w-100"
                  as={Link}
                  to="/cart"
                >
                  See In Cart
                </Button>
              ) : data.countInStock === 0 ? (
                <Button variant="dark" className="w-100" disabled>
                  Out Of Stock
                </Button>
              ) : (
                <Button
                  variant="dark"
                  className="w-100"
                  onClick={() => addToCart(data)}
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
