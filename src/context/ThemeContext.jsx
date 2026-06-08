import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [activePage, setActivePage] = useState('beranda');
  const [selectedUser, setSelectedUser] = useState(null);

  const viewProfile = (user) => {
    setSelectedUser(user);
    setActivePage('profil');
  };

  return (
    <ThemeContext.Provider value={{ activePage, setActivePage, selectedUser, setSelectedUser, viewProfile }}>
      {children}
    </ThemeContext.Provider>
  );
}