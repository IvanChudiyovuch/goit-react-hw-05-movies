import { Link } from 'react-router-dom';
export const NotFound = () => {
  return (
    <p>
      Page is not found, please go to <Link to="/"> Home</Link>
    </p>
  );
};
