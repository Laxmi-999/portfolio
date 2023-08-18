import React, {useState} from 'react';
import './MediaImgGrid.css';


const ImageGrid = ({ imageList, className }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageUrl) => {
  setSelectedImage(imageUrl);
};

const handleBackClick = () => {
setSelectedImage(null);
};
  return (
    <div className={`image-grid-container ${className}`}>
      <div className='image-grid'>
        {imageList.map((imageUrl, index) => (
          <div
            key={index}
            className='image-item'
            onClick={() => handleImageClick(imageUrl)}>
            <img src={imageUrl} alt={`Image ${index}`} style = {{
            cursor:'pointer'}}/>
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className='selected-image'>
          <img src={selectedImage} alt='Selected Image' />
          <button className='back-button' onClick={handleBackClick}  >
          <span className='back-icon'>&larr;</span>
          </button>
         </div>
      )}
    </div>
  );
};

export default ImageGrid;
