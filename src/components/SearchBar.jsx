import React, { useState, useContext, useRef, useEffect } from 'react';
import { SocialContext } from '../context/SocialContext';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/searchbar.css';

function SearchBar() {
  const { users } = useContext(SocialContext); // Mengambil daftar seluruh akun
  const { viewProfile } = useContext(ThemeContext); // Mengambil fungsi navigasi ke profil
  
  const [isOpen, setIsOpen] = useState(false);
  const searchContainerRef = useRef(null);

  // Menutup dropdown daftar akun jika pengguna mengklik di luar area searchbar
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="search-container" ref={searchContainerRef}>
      {/* Kolom Input Pencarian */}
      <div className="search-bar-wrapper">
          {/* <span className="search-icon"></span> */}
        <input 
          type="text" 
          placeholder="Cari" 
          className="search-input"
          onFocus={() => setIsOpen(true)} // Tampilkan daftar akun saat input diklik
        />
      </div>

      {/* Dropdown Daftar Semua Akun */}
      {isOpen && users && users.length > 0 && (
        <div className="search-dropdown">
          <div className="dropdown-header">Rekomendasi Akun</div>
          <div className="dropdown-list">
            {users.map((user) => (
              <div 
                key={user.id} 
                className="search-user-item"
                onClick={() => {
                  viewProfile(user); // Masuk ke halaman profil akun yang diklik
                  setIsOpen(false); // Tutup dropdown setelah diklik
                }}
              >
                {/* Avatar Akun */}
                <div className="search-user-avatar">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                {/* Info Akun */}
                <div className="search-user-info">
                  <div className="search-user-name">{user.name}</div>
                  <div className="search-user-username">@{user.username}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchBar;