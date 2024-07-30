import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../../app.css';

function withPageTransition(WrappedComponent) {
    return function PageTransitionWrapper(props) {
        const [animationClass, setAnimationClass] = useState('fade-in');
        const location = useLocation();

        useEffect(() => {
            setAnimationClass('fade-in');
            return () => setAnimationClass('fade-out');
        }, [location.pathname]);

        return (
            <div className={animationClass}>
                <WrappedComponent {...props} />
            </div>
        );
    };
}

export default withPageTransition;
