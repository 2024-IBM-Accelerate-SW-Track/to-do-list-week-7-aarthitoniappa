import React, { useState } from 'react';
import Button from '@mui/material/Button';
import './About.css';
import profile from '../assets/profile.jpg';
import profile1 from '../assets/profile1.jpg';
import profile2 from '../assets/profile2.jpg';
import profile3 from '../assets/profile3.jpg';
import profile4 from '../assets/profile4.jpg';

const images = [profile, profile1, profile2, profile3, profile4];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleButtonClick = () => {
    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  };

  return (
    <div>
      <div className="split left">
        <div className="centered">
          <img
            className="profile_image"
            src={images[currentIndex]}
            alt="Profile Pic"
            onClick={handleNext} // Add onClick handler to change picture
            style={{ cursor: 'pointer' }} // Add cursor pointer to indicate clickable image
          />
          <div>
            <Button
              variant="contained"
              color="primary"
              onClick={handlePrevious}
              style={{ marginRight: '10px' }}
              data-testid="new-item-button"
            >
              Get to Know Me
            </Button>
          </div>
        </div>
      </div>
      <div className="split right">
        <div className="centered">
          <div className="name_title">Aarthi</div>
          <div className="brief_description">
            I love pranks!
          </div>
          <Button
            variant="contained"
            color="primary"
            onClick={handleButtonClick}
            data-testid="new-item-button"
          >
            Free Chipotle Gift Card
          </Button>
          <img
            src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjd0dGNoMzdoMGZjMGF6dGo3bHNmcjhpYjZqNW82N3F1Z3BwdXN1dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lXiRm5H49zYmHr3i0/giphy.gif"
            alt="Funny GIF"
            style={{ marginTop: '20px', width: '100%', maxWidth: '400px' }}
          />
          <div className="ps">
            A picture is worth a thousand words...
            Click through to learn about me :)
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
