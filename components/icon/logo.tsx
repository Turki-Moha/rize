import React from 'react';

const Logo: React.FC<{ color?: string }> = ({ color = '#000' }) => (
    <svg width="32" height="32" viewBox="0 0 47 75" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 45H44V74L24 45Z" fill="black" />
        <path d="M15 13.9215V33L35 8L30.2803 13.9215H15Z" fill="black" />
        <path d="M15.0264 33.0751V14.124H30.1963L34.882 8.24195L22.6383 0H0V75L19.2452 51.1859L15.0264 44.8749H24.3258L47 16.4124L40.3755 11.9428L15.0264 33.0751Z" fill="black" />
        <path d="M34.872 8.22324L15 33L40.37 11.9157L34.872 8.22324Z" fill="black" />
    </svg>

);

export default Logo;