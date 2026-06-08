import React, { useContext, useState } from 'react';
import { SocialContext } from '../context/SocialContext';
import { ThemeContext } from '../context/ThemeContext';

function UserProfile() {
  const { followingList, toggleFollow } = useContext(SocialContext);
  const { selectedUser, setActivePage } = useContext(ThemeContext);
  const [activeTab, setActiveTab] = useState('Posts');

  // Jika selectedUser kosong, tampilkan data profil Anda (pipit)
  // Jika ada selectedUser, tampilkan data orang tersebut
  const user = selectedUser || {
    name: 'pipit',
    username: 'pipitm4p',
    email: null
  };

  const isOwnProfile = !selectedUser;
  const isFollowing = !isOwnProfile && followingList.includes(user.id);

  return (
    <div className="profile-page" style={{ backgroundColor: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Header dengan Tombol Back */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '0.5rem 1rem', gap: '2rem', backgroundColor: '#fff', zIndex: 10 }}>
        <button 
          onClick={() => setActivePage('beranda')}
          style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer' }}
        >
          ←
        </button>
        <div>
          <h2 style={{ margin: 0, fontSize: '1.25rem', fontWeight: '800' }}>{user.name}</h2>
          <span style={{ fontSize: '0.85rem', color: '#536471' }}>0 posts</span>
        </div>
      </div>

      {/* Banner Gray */}
      <div style={{ height: '200px', backgroundColor: '#cfd9de' }}></div>

      {/* Info Profile Area */}
      <div style={{ padding: '0 1rem', position: 'relative', marginBottom: '1rem' }}>
        {/* Avatar Besar */}
        <div style={{
          width: '130px', height: '130px', borderRadius: '50%', 
          backgroundColor: isOwnProfile ? '#5c768d' : '#1d9bf0',
          border: '4px solid #fff', position: 'absolute', top: '-65px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', fontSize: '3rem', fontWeight: 'bold'
        }}>
          {user.name.charAt(0).toUpperCase()}
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '0.75rem 0' }}>
          {isOwnProfile ? (
            <button style={{ border: '1px solid #cfd9de', background: '#fff', borderRadius: '9999px', padding: '0.5rem 1rem', fontWeight: 'bold' }}>
              Set up profile
            </button>
          ) : (
            <button 
              onClick={() => toggleFollow(user.id)}
              style={{ 
                background: isFollowing ? '#fff' : '#0f1419', 
                color: isFollowing ? '#0f1419' : '#fff',
                border: isFollowing ? '1px solid #cfd9de' : 'none',
                borderRadius: '9999px', padding: '0.5rem 1.2rem', fontWeight: 'bold' 
              }}
            >
              {isFollowing ? 'Mengikuti' : 'Ikuti'}
            </button>
          )}
        </div>

        <div style={{ marginTop: '1rem' }}>
          <h1 style={{ margin: 0, fontSize: '1.25rem', fontWeight: '800' }}>{user.name}</h1>
          <div style={{ color: '#536471' }}>@{user.username}</div>
          
          {user.email && (
            <div style={{ color: '#1d9bf0', marginTop: '0.5rem' }}>📧 {user.email}</div>
          )}

          <div style={{ display: 'flex', gap: '1rem', marginTop: '0.75rem' }}>
            <span><strong style={{ color: '#0f1419' }}>{isOwnProfile ? followingList.length : 0}</strong> <span style={{ color: '#536471' }}>Following</span></span>
            <span><strong style={{ color: '#0f1419' }}>0</strong> <span style={{ color: '#536471' }}>Followers</span></span>
          </div>
        </div>
      </div>

      {/* Tabs Menu */}
      <div style={{ display: 'flex', borderBottom: '1px solid #eff3f4' }}>
        {['Posts', 'Replies', 'Media', 'Likes'].map((tab) => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              flex: 1, padding: '1rem', background: 'none', border: 'none',
              fontWeight: activeTab === tab ? '800' : '500',
              borderBottom: activeTab === tab ? '4px solid #1d9bf0' : 'none',
              cursor: 'pointer', color: activeTab === tab ? '#0f1419' : '#536471'
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Konten Kosong di Tengah Bawah halaman */}
      <div style={{ 
        flex: 1, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: '3rem 1rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '400px' }}>
          <h3 style={{ fontSize: '2rem', fontWeight: '800', margin: '0 0 0.5rem 0', color: '#0f1419' }}>
            Tidak ada apa-apa disini
          </h3>
          <p style={{ fontSize: '0.95rem', color: '#536471', margin: 0 }}>
            Saat akun ini membagikan konten atau berinteraksi, kiriman tersebut akan muncul di sini.
          </p>
        </div>
      </div>

    </div>
  );
}

export default UserProfile;