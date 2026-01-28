import { Alert } from 'react-bootstrap';
import { AlertCircle } from 'react-feather';
const ErrorMessage = () => {
  return (
    <Alert
      variant="danger"
      className="my-3 shadow-sm d-flex flex-column justify-content-center align-items-center gap-2"
    >
      <span>
        <AlertCircle />
      </span>
      <span>Gagal Memuat Data. Terjadi Kesalahan Pada Server</span>
    </Alert>
  );
};

export default ErrorMessage;
