import React from 'react';
import './Media.css';

const Media = () => {
  const mediaItems = [
    {
      title: 'Scenario Photo',
      description: 'Browse through stunning photos of our travel destinations.',
      image: '/path/to/photo-gallery.jpg',
      link: '/gallery',
    },
    {
      title: 'Scenario Video',
      description: 'Watch captivating videos showcasing our travel experiences.',
      image: '/path/to/video-gallery.jpg',
      link: '/videos',
    },
    {
        title: 'Traveller Photo',
        description: 'Watch captivating videos showcasing our travel experiences.',
        image: '/path/to/video-gallery.jpg',
        link: '/videos',
      },
      {
        title: 'Traveller Dancing Video',
        description: 'Watch captivating videos showcasing our travel experiences.',
        image: '/path/to/video-gallery.jpg',
        link: '/videos',
      },
    // Add more media items as needed
  ];

  return (
    <div className="media-container">
      <h1 className="media-heading">Media</h1>
      <div className="media-grid">
        {mediaItems.map((item, index) => (
          <a href={item.link} className="media-item" key={index}>
            <img src={item.image} alt={item.title} />
            <h2 className="media-title">{item.title}</h2>
            <p className="media-description">{item.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Media;
