import React, { useRef } from 'react';

function Salom() {
  const fileInputRef = useRef(null);
  const imageRef = useRef(null);

  const handleImageClick = () => {
    // Trigger the file input dialog when the image is clicked
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    
    if (file) {
      // Display the selected image
      const reader = new FileReader();
      reader.onload = (e) => {
        imageRef.current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <h1>Image Selection and Display</h1>
      <input
        type="file"
        style={{ display: 'none' }}
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
      />
      <img
        src="default-image.png" // Default image source
        alt="Selected Image"
        ref={imageRef}
        onClick={handleImageClick}
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
}

export default Salom;
