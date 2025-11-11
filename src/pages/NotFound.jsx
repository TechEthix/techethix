import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found__container">
        <h1 className="not-found__title">404</h1>
        <h2 className="not-found__subtitle">Page Not Found</h2>
        <p className="not-found__text">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="not-found__btn">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;