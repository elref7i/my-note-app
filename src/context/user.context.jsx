import { createContext, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext(0);

// eslint-disable-next-line react/prop-types
export default function UserProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem('token'));
  function logout() {
    setToken(null);
    localStorage.removeItem('token');
  }
  return (
    <UserContext.Provider value={{ logout, setToken, token }}>
      {children}
    </UserContext.Provider>
  );
}
