import React, { useState } from 'react';

function App() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    const previews = files.map((file) => URL.createObjectURL(file));

    setSelectedFiles([...selectedFiles, ...files]);
    setImagePreviews([...imagePreviews, ...previews]);
  };

  const handleImageClick = (index) => {
    const file = selectedFiles[index];
    if (file) {
      console.log('Faylni serverga yuborish: ', file);
    }
  };

  return (
    <div>
      <h1>Faylni tanlash va urniga tushish</h1>
      <input type="file" multiple onChange={handleFileChange} />

      {/* Tanlangan rasmlar */}
      {imagePreviews.map((preview, index) => (
        <div key={index}>
          <img
            src={preview}
            alt={`Tanlangan rasm ${index}`}
            onClick={() => handleImageClick(index)}
            style={{ cursor: 'pointer' }}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
