import React, { useContext } from 'react';
import { SocialContext } from '../context/SocialContext';
import UserCard from './UserCard';
import '../styles/userlist.css';

function UserList({ searchTerm }) {
  const { users } = useContext(SocialContext);

  const filteredUsers = (users || []).filter((user) => 
    user.name.toLowerCase().includes((searchTerm || '').toLowerCase()) ||
    user.username.toLowerCase().includes((searchTerm || '').toLowerCase())
  );

  return (
    <div className="user-list-container">
      <div className="timeline-header">
        <h3>Beranda</h3>
      </div>
      {filteredUsers.length > 0 ? (
        filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))
      ) : (
        <div className="no-tweets">Tidak ada postingan tersedia</div>
      )}
    </div>
  );
}

export default UserList;