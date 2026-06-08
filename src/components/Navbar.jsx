import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import HomeIcon from '../assets/home.png';
import BellIcon from '../assets/bell.png';
import MailIcon from '../assets/mail.png';
import UserIcon from '../assets/user.png';
import '../styles/navbar.css';

function Navbar() {
  const { activePage, setActivePage, setSelectedUser } = useContext(ThemeContext);

  return (
    <div className="sidebar-navbar">
      {/* Logo X berupa teks huruf X yang bisa diklik */}
      <div className="nav-logo" onClick={() => {
        setSelectedUser(null); // Reset target data user lain
        setActivePage('beranda'); // Pindah ke halaman beranda
      }}>
        <span className="logo-text">X</span>
      </div>

      {/* Item-Item Menu Navigasi */}
      <nav className="nav-menu-items">
        <button 
          className={`nav-item-btn ${activePage === 'beranda' ? 'active' : ''}`}
          onClick={() => {
            setSelectedUser(null);
            setActivePage('beranda');
          }}
        >
          <img src={HomeIcon} alt="Icon Beranda" style={{ width: '26px' }} />
          <span className="nav-text">Beranda</span>
        </button>

        <button 
          className={`nav-item-btn ${activePage === 'notifikasi' ? 'active' : ''}`}
          onClick={() => setActivePage('notifikasi')}
        >
          <img src={BellIcon} alt="Icon Notifikasi" style={{ width: '26px' }} />
          <span className="nav-text">Notifications</span>
        </button>

        <button 
          className={`nav-item-btn ${activePage === 'pesan' ? 'active' : ''}`}
          onClick={() => setActivePage('pesan')}
        >
          <img src={MailIcon} alt="Icon Pesan" style={{ width: '26px' }} />
          <span className="nav-text">Messages</span>
        </button>

        <button 
          className={`nav-item-btn ${activePage === 'profil' ? 'active' : ''}`}
          onClick={() => {
            setSelectedUser(null);
            setActivePage('profil');
          }}
        >
          <img src={UserIcon} alt="Icon Profil" style={{ width: '26px' }} />
          <span className="nav-text">Profile</span>
        </button>
      </nav>
    </div>
  );
}

export default Navbar;