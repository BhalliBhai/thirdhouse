// src/IntroVideo.js
import React, { useEffect, useRef } from 'react';
import Video from './IMG_4256.mov'; // Ensure this path is correct

const IntroVideo = ({ onVideoEnd }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            onVideoEnd();
        }, 5000);

        return () => clearTimeout(timer);
    }, [onVideoEnd]);

    const handleUserInteraction = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };


    return (
        <div style={styles.videoContainer} onClick={handleUserInteraction} onTouchStart={handleUserInteraction}>
            <video
                ref={videoRef}
                id="introVideo"
                autoPlay
                muted
                playsInline
                style={styles.video}
            >
                <source src={Video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

const styles = {
    videoContainer: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1000,  
        backgroundColor: 'black',
    },
    video: {
        width: '100%',
        height: '100%',
        // objectFit: 'cover',
    },
};

export default IntroVideo;
