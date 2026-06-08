import React, { createContext, useState, useEffect } from 'react';

export const SocialContext = createContext();

export function SocialProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [followingList, setFollowingList] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Gagal mengambil data user:", err));
  }, []);

  const toggleFollow = (userId) => {
    if (followingList.includes(userId)) {
      setFollowingList(followingList.filter((id) => id !== userId));
    } else {
      setFollowingList([...followingList, userId]);
    }
  };

  return (
    <SocialContext.Provider value={{ users, followingList, toggleFollow }}>
      {children}
    </SocialContext.Provider>
  );
}