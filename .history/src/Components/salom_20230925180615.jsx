import React, { useRef } from 'react';
import './navbar.css'
function Salom() {
   

    return (
        <div>
            <input
                type="file"
                style={{ display: 'none' }}
                ref={fileInputRef}
                onChange={handleFileChange}
            />
            <img
                src="default-image.png"
                alt="Selected Image"
                ref={imageRef}
                onClick={handleImageClick}
                style={{ cursor: 'pointer' }}
            />
        </div>
    );
}

export default Salom;
