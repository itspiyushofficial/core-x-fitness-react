import { useState } from "react";
import "../styles/style.css";

import weight1 from "../Images/weight-gain.webp";
import cardio1 from "../Images/cardio.webp";
import diet1 from "../Images/weight-gain-diet.jpg";
import machine1 from "../Images/imported-machines.jpg";
import photos from "../Images/gallery-photos.jpg";

const galleryItems = [
  { id: 1, type: "weight", src: weight1 },
  { id: 2, type: "cardio", src: cardio1 },
  { id: 3, type: "diet", src: diet1 },
  { id: 4, type: "machine", src: machine1 },
  { id: 5, type: "photos", src: photos }
];

const Gallery = () => {
  const [filter, setFilter] = useState("all");

  const filteredItems =
    filter === "all"
      ? galleryItems
      : galleryItems.filter(item => item.type === filter);

  return (
    <section className="gallery-section">
      <h2>Gallery</h2>

      {/* FILTERS */ }
      <div className="gallery-filters">
        {["all", "weight", "cardio", "diet", "machine", "photos"].map(cat => (
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
        {filteredItems.map(item => (
          <div key={item.id} className="gallery-card">
            <img src={item.src} alt="Gallery" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
