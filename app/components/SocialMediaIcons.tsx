// components/SocialMediaIcons.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faWhatsapp, faYoutube, faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';
// import { faPhone } from '@fortawesome/free-solid-svg-icons';

const SocialMediaIcons = () => {
    return (
        <div className="flex space-x-4">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" className='iconInstagram' />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} size="2x" className='iconFacebook' />
            </a>
            <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} size="2x" className='iconWhatsapp' />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} size="2x" className='iconYoutube' />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} size="2x" className='iconTwitter' />
            </a>
            <a href="https://www.discord.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faDiscord} size="2x" className='iconDiscord' />
            </a>
            <a href="tel:+1234567890">
                {/* <FontAwesomeIcon icon={faPhone} size="2x" className='icon' /> */}
            </a>
        </div>
    );
};

export default SocialMediaIcons;
