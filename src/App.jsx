import React, { useState } from 'react';
import './App.css';

function App() {
  // State for managing the playlist
  const [playlist, setPlaylist] = useState([
    { id: 1, title: "Video 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: 2, title: "Video 2", url: "https://www.youtube.com/embed/3JZ_D3ELwOQ" },
    { id: 3, title: "Video 3", url: "https://www.youtube.com/embed/L_jWHffIx5E" },
  ]);
  
  // State for the new video input fields
  const [newVideo, setNewVideo] = useState({ title: '', url: '' });

  // Function to handle adding a new video to the playlist
  const handleAddVideo = () => {
    if (newVideo.title && newVideo.url) {
      const newVideoObj = {
        id: playlist.length + 1,
        title: newVideo.title,
        url: newVideo.url,
      };
      setPlaylist([...playlist, newVideoObj]);
      setNewVideo({ title: '', url: '' });
    }
  };

  return (
    <div className="App">
      <h1>Video Playlist</h1>

      {/* Add Video Form */}
      <div className="add-video">
        <input
          type="text"
          placeholder="Video Title"
          value={newVideo.title}
          onChange={(e) => setNewVideo({ ...newVideo, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Video URL"
          value={newVideo.url}
          onChange={(e) => setNewVideo({ ...newVideo, url: e.target.value })}
        />
        <button onClick={handleAddVideo}>Add Video</button>
      </div>

      {/* Display Playlist */}
      <div className="playlist">
        {playlist.map((video) => (
          <div key={video.id} className="video-item">
            <h3>{video.title}</h3>
            <iframe
              width="400"
              height="300"
              src={video.url}
              title={video.title}
              frameBorder="0"
              allowFullScreen
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
