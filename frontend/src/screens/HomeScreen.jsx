import { Badge, Card, Col, Row } from 'react-bootstrap';
import products from '../data';
import Rating from '../components/Rating';
import { Link } from 'react-router-dom';

const HomeScreen = () => {
  return (
    <>
      <Row md="3" sm="2" xs="1">
        {products.map((product, idx) => (
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
