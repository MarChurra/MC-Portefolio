import React, { useState, useEffect, useRef } from 'react';
import animationData from '/src/assets/arrowDownCircle.json';
import Lottie from 'lottie-react';


function AnimatedIcon({ handleClick }) {
    const [isHovered, setIsHovered] = useState(false);
    const lottieRef = useRef(null)

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    useEffect(() => {
        if (isHovered) {
            lottieRef.current.play();
        } else {
            lottieRef.current.stop();
        }
    }, [isHovered]);

    return (
        <div
            className="arrow-icon fade-in"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            <Lottie
                lottieRef={lottieRef}
                animationData={animationData}
                loop={true}
            />
        </div>
    );
}

export default AnimatedIcon;
