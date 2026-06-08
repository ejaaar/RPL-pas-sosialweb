import React, { useContext } from 'react';
import Navbar from './components/Navbar';
import UserList from './components/UserList';
import UserProfile from './components/UserProfile'; // Jika Anda memiliki komponen profil
import Notif from './components/Notif'; // Jika Anda memiliki komponen notifikasi
import Msg from './components/Msg'; // Jika Anda memiliki komponen pesan
import SearchBar from './components/SearchBar'; // Komponen SearchBar baru Anda
import { ThemeContext } from './context/ThemeContext';
import './styles/App.css';

function App() {
  const { activePage } = useContext(ThemeContext);

  // Menentukan komponen mana yang aktif berdasarkan halaman yang dipilih
  const renderPage = () => {
    switch (activePage) {
      case 'beranda':
        return <UserList />;
      case 'notifikasi':
        return <Notif />;
      case 'pesan':
        return <Msg />;
      case 'profil':
        return <UserProfile />;
      default:
        return <UserList />;
    }
  };

  return (
    <div className="app-main-wrapper">
      <div className="app-layout-container">
        {/* Navigasi Samping di sebelah Kiri */}
        <div className="layout-left-sidebar">
          <Navbar />
        </div>
        
        {/* Konten Utama (UserCard/Linimasa) di Tengah */}
        <div className="layout-middle-content">
          {renderPage()}
        </div>

        {/* SearchBar di sebelah Kanan */}
        <div className="layout-right-sidebar">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

export default App;