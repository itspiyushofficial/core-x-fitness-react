import { useState, useRef } from "react";
import "../styles/style.css";

import weight1 from "../Images/weight-gain.webp";
import cardio1 from "../Images/cardio.webp";
import diet1 from "../Images/weight-gain-diet.jpg";
import machine1 from "../Images/imported-machines.jpg";
import gymVideo from "../Images/gym-video.mp4";

const galleryItems = [
  { id: 1, type: "weight", src: weight1 },
  { id: 2, type: "cardio", src: cardio1 },
  { id: 3, type: "diet", src: diet1 },
  { id: 4, type: "machine", src: machine1 },
  { id: 5, type: "video", src: gymVideo }
];

const Gallery = () => {
  const [filter, setFilter] = useState("all");
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const filteredItems =
    filter === "all"
      ? galleryItems
      : galleryItems.filter(item => item.type === filter);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setPlaying(true);
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    videoRef.current.muted = !muted;
    setMuted(!muted);
  };

  const goFullscreen = () => {
    videoRef.current.requestFullscreen();
  };

  return (
    <section className="gallery-section">
      <h2>Gallery</h2>

      {/* FILTERS */ }
      <div className="gallery-filters">
        {["all", "weight", "cardio", "diet", "machine", "video"].map(cat => (
          <button
            key={cat}
            className={filter === cat ? "active" : ""}
            onClick={() => setFilter(cat)}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="gallery-grid">
        {filteredItems.map(item =>
          item.type === "video" ? (
            <div key={item.id} className="gallery-card video-card">
              <video
                ref={videoRef}
                src={item.src}
                muted={muted}
                playsInline
                onClick={togglePlay}
              />

              {!playing && (
                <div className="play-overlay" onClick={togglePlay}>
                  ▶
                </div>
              )}

              <div className="video-controls">
                <button onClick={togglePlay}>
                  {playing ? "❚❚" : "▶"}
                </button>
                <button onClick={toggleMute}>
                  {muted ? "🔇" : "🔊"}
                </button>
                <button onClick={goFullscreen}>⛶</button>
              </div>
            </div>
          ) : (
            <div key={item.id} className="gallery-card">
              <img src={item.src} alt="Gallery" />
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Gallery;
