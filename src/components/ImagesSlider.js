import React, { useEffect, useState } from 'react';
import pro1 from '../assets/project1.png';
import pro2 from '../assets/project2.png';
import pro3 from '../assets/project3.png';

const ImagesSlider = () => {
    const [selectedImages, setSelectedImages] = useState(0);
    const [allImages, setAllImages] = useState([pro1, pro2, pro3]);
    useEffect(() => {
        setInterval(() => {
            setSelectedImages(selectedImages => selectedImages < 3 ? 0 : selectedImages + 1)
        }, 2000);
    }, []);

    return (
        <div>
            <img width={810} height={400} src={allImages[selectedImages]} />
            <button onClick={() => {
                if (selectedImages > 0) {
                    setSelectedImages(selectedImages - 1)
                }
            }}>NEXT</button>

            <button onClick={() => {
                if (selectedImages < allImages.length - 1) {
                    setSelectedImages(selectedImages + 1)
                }
            }}>PREV</button>
        </div>
    );
}

export default ImagesSlider;