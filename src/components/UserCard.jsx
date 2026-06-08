import React, { useState, useContext } from 'react';
import { SocialContext } from '../context/SocialContext';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/usercard.css';

function UserCard({ user }) {
  const { followingList, toggleFollow } = useContext(SocialContext);
  const { viewProfile } = useContext(ThemeContext);
  
  const isFollowing = followingList.includes(user.id);

  // State angka interaksi
  const [repostCount, setRepostCount] = useState(() => Math.floor(Math.random() * 100) + 1);
  const [likeCount, setLikeCount] = useState(() => Math.floor(Math.random() * 100) + 1);
  const [viewCount] = useState(() => Math.floor(Math.random() * 900) + 100); 

  const [isReposted, setIsReposted] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  
  // State untuk mengontrol tampilan pop-up modal Views
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRepost = (e) => {
    e.stopPropagation(); 
    setIsReposted(!isReposted);
    setRepostCount(isReposted ? repostCount - 1 : repostCount + 1);
  };

  const handleLike = (e) => {
    e.stopPropagation(); 
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };

  const openViewsModal = (e) => {
    e.stopPropagation(); 
    setIsModalOpen(true);
  };

  const closeViewsModal = (e) => {
    e.stopPropagation();
    setIsModalOpen(false);
  };

  return (
    <div className="tweet-card" onClick={() => viewProfile(user)} style={{ cursor: 'pointer' }}>
      {/* Avatar User */}
      <div className="tweet-avatar">
        {user.name.charAt(0)}
      </div>

      <div className="tweet-main">
        <div className="tweet-header">
          <div className="tweet-user-info">
            <span className="tweet-name">{user.name}</span>
            <span className="tweet-username">@{user.username} · 2j</span>
          </div>
          
          <button 
            className={`follow-btn ${isFollowing ? 'following' : ''}`}
            onClick={(e) => {
              e.stopPropagation(); 
              toggleFollow(user.id);
            }}
          >
            {isFollowing ? 'Mengikuti' : 'Ikuti'}
          </button>
        </div>

        <p className="tweet-text">
          Halo dunia! Silakan hubungi saya melalui jalur email bisnis di bawah ini.
        </p>

        <div className="tweet-actions">
          <button className="action-btn comment" onClick={(e) => e.stopPropagation()}>
            💬 <span>0</span>
          </button>
          
          <button className={`action-btn repost ${isReposted ? 'active' : ''}`} onClick={handleRepost}>
            🔁 <span>{repostCount}</span>
          </button>
          
          <button className={`action-btn like ${isLiked ? 'active' : ''}`} onClick={handleLike}>
            {isLiked ? '❤️' : '🖤'} <span>{likeCount}</span>
          </button>
          
          <div className="action-view-static" onClick={openViewsModal} style={{ cursor: 'pointer' }}>
            📊 <span>{viewCount}</span>
          </div>
        </div>
      </div>

      {/* STRUKTUR POP-UP MODAL VIEWS */}
      {isModalOpen && (
        <div className="views-modal-overlay" onClick={closeViewsModal}>
          <div className="views-modal-content" onClick={(e) => e.stopPropagation()}>
            
            {/* Tombol Silang (Close) */}
            <button className="views-modal-close-btn" onClick={closeViewsModal}>
              ✕
            </button>
            
            {/* Isi Konten Utama Modal */}
            <div className="views-modal-body">
              <h2 className="views-modal-title">Views</h2>
              <p className="views-modal-description">
                Times this post was seen. To learn more, visit the{' '}
                {/* Menambahkan event onClick untuk menutup modal secara otomatis */}
                <span className="views-link" onClick={closeViewsModal}>
                  Help Center
                </span>.
              </p>
              
              {/* Tombol Dismiss */}
              <button className="views-modal-dismiss-btn" onClick={closeViewsModal}>
                Dismiss
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default UserCard;