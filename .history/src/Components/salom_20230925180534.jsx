import React, { useRef } from 'react';
import './navbar.css'
function Salom() {
    const fileInputRef = useRef(null);
    const imageRef = useRef(null);

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                imageRef.current.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <input
                type="file" style={{ display: 'none' }}
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
