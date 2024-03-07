import React from 'react';
import './CoordinatorCarousel.css'; // Import the CSS file

const CoordinatorCarousel = ({ coordinators }) => {
  return (
    <div className="carousel-container">
      <input type="radio" id="item1" name="carousel" defaultChecked />
      <input type="radio" id="item2" name="carousel" />
      <input type="radio" id="item3" name="carousel" />
      <input type="radio" id="item4" name="carousel" />
      <input type="radio" id="item5" name="carousel" />

      <main id="carousel">
        {coordinators.map((coordinator, index) => (
          <div key={index} className={`item item${index + 1}`}>
            <img src={coordinator.imgSrc} alt={coordinator.name} />
            <div className="card-content">
              <h3>{coordinator.name}</h3>
              <p>{coordinator.roles.join(', ')}</p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default CoordinatorCarousel;
