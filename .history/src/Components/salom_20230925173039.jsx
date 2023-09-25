import React, { useState } from 'react';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setSelectedFile(file);

      // Tanlangan faylni o'qish uchun FileReader ishlatiladi
      const reader = new FileReader();
      reader.onload = (e) => {
        // Fayl o'qilganda, urni rasmlash uchun tayyor bo'lgan URL ni olishimiz mumkin
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <h1>Faylni urniga rasm tushish</h1>
      <input type="file" onChange={handleFileChange} />

      {/* Tanlangan fayl urni */}
      {imagePreview && <img src={imagePreview} alt="Tanlangan rasm" />}

      {/* Tanlangan faylning ma'lumotlari */}
      {selectedFile && (
        <div>
          <h2>Tanlangan Fayl:</h2>
          <p>Nomi: {selectedFile.name}</p>
          <p>Hajmi: {selectedFile.size} bayt</p>
          <p>Fayl turi: {selectedFile.type}</p>
        </div>
      )}
    </div>
  );
}

export default App;
