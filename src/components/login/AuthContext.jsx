import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Retrieve authentication state from localStorage on app startup
    const storedAuthState = localStorage.getItem('isAuthenticated');
    return storedAuthState ? JSON.parse(storedAuthState) : false;
  });
  
  const [user, setUser] = useState(() => {
    // Retrieve user from localStorage on app startup
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = (userDetails) => {
    localStorage.setItem('user', JSON.stringify(userDetails));
    setUser(userDetails);

    // Logic to set authentication state to true after login
    localStorage.setItem('isAuthenticated', JSON.stringify(true));
    setIsAuthenticated(true);

  };

  const logout = () => {
    // Logic to clear user details after logout
    localStorage.removeItem('user');
    setUser(null);

    // Logic to set authentication state to false after logout
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);


  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
   return useContext(AuthContext);
};
