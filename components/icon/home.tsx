import React from 'react';

const HomeIcon: React.FC<{ color?: string }> = ({ color = '#000' }) => (
    <svg width="20" height="23" viewBox="3 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.4012 8.58813L13.2483 2.08519C13.1166 1.96549 12.945 1.89916 12.7671 1.89917C12.5892 1.89918 12.4176 1.96551 12.286 2.08522L5.13398 8.58813C5.06025 8.65517 5.00134 8.73687 4.96103 8.828C4.92072 8.91913 4.8999 9.01768 4.8999 9.11733V17.3839C4.8999 17.5736 4.97526 17.7555 5.10939 17.8897C5.24353 18.0238 5.42545 18.0992 5.61515 18.0992H19.9201C20.1098 18.0992 20.2917 18.0238 20.4258 17.8897C20.56 17.7555 20.6353 17.5736 20.6353 17.3839V9.11736C20.6353 9.0177 20.6145 8.91915 20.5742 8.82801C20.5339 8.73687 20.475 8.65517 20.4012 8.58813Z" stroke={color} strokeWidth={2} stroke-linecap="round" stroke-linejoin="round" />
    </svg>



);

export default HomeIcon;