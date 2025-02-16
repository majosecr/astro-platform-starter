import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', (user) => setUser(user));
      window.netlifyIdentity.on('login', (user) => setUser(user));
      window.netlifyIdentity.on('logout', () => setUser(null));
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}