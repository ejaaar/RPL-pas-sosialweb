import React, { useContext } from 'react';
import Navbar from './components/Navbar';
import UserList from './components/UserList';
import UserProfile from './components/UserProfile'; 
import Notif from './components/Notif';
import Msg from './components/Msg';
import SearchBar from './components/SearchBar';
import { ThemeContext } from './context/ThemeContext';
import './styles/App.css';

function App() {
  const { activePage } = useContext(ThemeContext);

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
        <div className="layout-left-sidebar">
          <Navbar />
        </div>
        
        <div className="layout-middle-content">
          {renderPage()}
        </div>

        <div className="layout-right-sidebar">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

export default App;