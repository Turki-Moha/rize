"use client"
import React, { useState } from 'react';
import { Home, Search, MessageSquare, Grid, Plus } from 'lucide-react';
import Image from 'next/image';
const BottomNav = () => {
    const tab = ["Home", "Search", "Chat", "Menu"]
    const tabIcon = [<Home />, <Search />, <MessageSquare size={36} />, <Grid size={36} />]
    const [isActive, setIsActive] = useState(0);
    return (
        <nav className="absolute bottom-0 left-0 right-0 p-4 bg-white-750" >

            <div className="flex justify-between items-center max-w-screen-sm mx-auto relative">
                {tab.map((item, index) => {
                    return (
                        <NavItem
                            key={index}
                            icon={tabIcon[index]}
                            label={item}
                            isActive={index === isActive}
                            onClick={() => setIsActive(index)}
                        />
                    );
                })}
                {/* Floating Action Button */}
                <div className="absolute left-1/2 -translate-x-1/2 -top-8">
                    <button className="bg-cyan-300 text-white-850 p-4 rounded-full shadow-lg transition-colors duration-300 w-16 h-16">
                        {<Image className="m-auto" src="/logo.png" width={24} height={24} alt='' />}
                    </button>
                </div>
            </div>
        </nav>
    );
}; ``

const NavItem = ({ icon, label, isActive = false, onClick }: {
    icon: any, label: string, isActive?: boolean, onClick?: () => void
}) => {
    return (
        <button className={`flex flex-col items-center ${isActive ? 'text-white-750' : 'text-white-500'}`} onClick={onClick}>
            <div className={`p-4 rounded-full ${isActive ? 'bg-cyan-300' : 'text-white-500'}`}>
                <div>
                    {icon}
                </div>
            </div>
            <span className={`text-xs ${isActive ? 'opacity-0' : ''}`}>{label}</span>
        </button>
    );
};

export default BottomNav;