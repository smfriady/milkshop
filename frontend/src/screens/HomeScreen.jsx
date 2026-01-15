import { Badge, Card, Col, Row } from 'react-bootstrap';
import products from '../data';

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
              <Card.Img src={product.image} alt={product.name} />
              <Card.Body>
                <Card.Text>{product.name}</Card.Text>
                <Card.Text>{product.description}</Card.Text>
              </Card.Body>
              <Card.Body className="d-flex justify-content-between align-items-center">
                <Card.Text as="strong">Rp{product.price}</Card.Text>
                <Card.Text>
                  {product.rating} {product.numReviews} reviews
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
