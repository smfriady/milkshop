import { Badge, Card, Col, Row } from 'react-bootstrap';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Rating from '../components/Rating';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';

const HomeScreen = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const { data } = await axios.get('/api/products');
      return data;
    },
    staleTime: 1000 * 60 * 2,
    gcTime: 1000 * 60 * 10,
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  return (
    <>
      <Row md="3" sm="2" xs="1">
        {data.map((product, idx) => (
          <Col key={idx}>
            <Card className="m-1 position-relative">
              <Badge bg="primary" className="position-absolute m-1">
                {product.category}
              </Badge>
              <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} alt={product.name} />
              </Link>
              <Card.Body>
                <Card.Text>{product.name}</Card.Text>
                <Card.Text>{product.description}</Card.Text>
              </Card.Body>
              <Card.Body className="d-flex justify-content-between align-items-center">
                <Card.Text as="strong">Rp{product.price}</Card.Text>
                <Card.Text>
                  <Rating valueRating={product.rating} />
                  {product.numReviews} reviews
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
