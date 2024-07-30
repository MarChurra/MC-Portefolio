import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Media = () => {
    const location = useLocation();
    const [isLargeViewport, setIsLargeViewport] = useState(window.innerWidth >= 750);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeViewport(window.innerWidth >= 750);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const isMainPage = location.pathname === '/';

    if (isMainPage || isLargeViewport) {
        return (
            <address className='social-media'>
                <a target="_blank" className='social-link' href="https://api.whatsapp.com/send/?phone=351969728516&text&type=phone_number&app_absent=0">
                    <img className='social-img' src="/assets/icons/whatsapp.png" alt="WhatsApp contact" />
                </a>
                <a target="_blank" className='social-link' href="https://github.com/MarChurra">
                    <img className='social-img' src="/assets/icons/github.png" alt="Github link" />
                </a>
                <a target="_blank" className='social-link' href="https://www.linkedin.com/in/marcochurra/">
                    <img className='social-img' src="/assets/icons/linkedin.png" alt="LinkedIn Contact" />
                </a>
                <a target="_blank" className='social-link' href="mailto:mchurra@outlook.pt">
                    <img className='social-img' src="/assets/icons/mail.png" alt="Open a window to send an email directly to me" />
                </a>
            </address>
        );
    }

    return null;
};

export default Media;
