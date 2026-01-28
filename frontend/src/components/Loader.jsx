import { Spinner } from 'react-bootstrap';

const Loader = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: '60vh' }}
    >
      <Spinner
        animation="border"
        role="status"
        variant="primary"
        children="m-0 m-auto"
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loader;
