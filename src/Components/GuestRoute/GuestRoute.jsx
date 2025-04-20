import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../context/user.context';

export default function GuestRoute({ children }) {
  const { token } = useContext(UserContext);
  if (!token) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
}
