import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

import { useAuth } from 'features/auth/shared/store';

export default function ProtectedRoute({ children, isPublicOnly }) {
  const { isLogged } = useAuth();

  console.log('isLogged', isLogged);

  if (isPublicOnly) {
    return isLogged ? <Navigate to='/' replace /> : children;
  }

  if (!isLogged) {
    return <Navigate to='/login' replace />;
  }

  return children;
}

ProtectedRoute.defaultProps = {
  isPublicOnly: false,
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  isPublicOnly: PropTypes.bool,
};
