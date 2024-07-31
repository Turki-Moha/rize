"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import games from "@/public/assets/images/pubg.png";
import { Eye, CalendarClock, MessageSquare, Search } from 'lucide-react';
import ClubIcon from "@/components/icon/club";
import MenuIcon from "@/components/icon/menu";
import HomeIcon from "@/components/icon/home";
import Logo from "@/components/icon/logo";

const SVGIcon = ({ path, size = 24, className = '' }: {
    path: string, size: number, className: string
}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d={path} />
    </svg>
);

const ImageGrid = ({ images }: { images: any }) => {
    const isSingleImage = images.length === 1;
    const isTwoImages = images.length === 2;

    return (
        <div
            className={`${isSingleImage ? 'flex items-center justify-center rounded-lg' : 'grid grid-cols-2 grid-rows-2'
                } border-2 border-white-700 rounded-lg w-14 h-14 ${isSingleImage ? 'p-1 ' : ''}`}
        >
            {images.map((image: string, i: number) => (
                <Image
                    key={i}
                    src={image}
                    width={32}
                    height={32}
                    alt=""
                    className={`${isSingleImage ? '' : 'rounded-full '} ${isSingleImage ? 'w-full h-full rounded-lg' : ''}`}
                />
            ))}
        </div>
    );
};

const RizeMenu = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [isBlock, setIsBlack] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeQuickAccessTab, setActiveQuickAccessTab] = useState(0);

    const tabs = [
        { icon: <HomeIcon />, label: 'Home' },
        { icon: <Search />, label: 'Search' },
        { icon: <MessageSquare />, label: 'Chat' },
        { icon: <MenuIcon />, label: 'Menu' },
    ];

    const quickAccessItems = [
        { label: 'Overview', icon: <Eye /> },
        { label: 'Events', icon: <CalendarClock /> },
        { label: 'My clubs', icon: <ClubIcon /> },
        { label: 'Message', icon: <MessageSquare /> },
    ];

    const gridImages = [
        [games, games, games, games],
        [games],
        [games, games],
        [games, games, games],
    ];
    useEffect(() => {
    }, [activeTab, isModalOpen]);
    const handleTabClick = (index: number) => {
        const newActiveTab = index;
        if (!isBlock) {
            setActiveTab(index);
        }

    };
    useEffect(() => {
        if (activeTab === 3) {
            setIsModalOpen(true);
            setIsBlack(true);
        }
        else {
            setIsModalOpen(false);
        }
    }, [activeTab]);
    return (
        <div className="relative h-screen bg-gray-900">
            {/* Bottom Navigation */}
            <nav className="fixed bottom-0 left-0 right-0 rounded-t-3xl">
                <div className='absolute bottom-0 left-0 right-0 -z-10 background-svg '>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="-4.5 0 20 7.4" width="100%" height="200">
                        <path d="M-7 8L-7 6C-7 6 -7 5 -5 5L2 5c1 0 2 0 2 1C4.032 7.479 6.967 7.538 7 6c0-1 1-1 2-1L16 5C18 5 18 5.5 18 6L18 8" fill="#1f2937" />
                    </svg> */}
                </div>
                <div className='grid grid-cols-2'>
                    <div className="flex [&>button]:px-3 justify-start align-top h-[60px]">
                        {tabs.slice(0, 2).map((tab, index) => (
                            <button
                                key={tab.label}
                                className={`flex flex-col items-center transition-all duration-700 w-[80px] ${activeTab === index ? 'text-white-750' : 'text-gray-400'}`}
                                onClick={
                                    () => handleTabClick(index)
                                }>
                                <div
                                    className={`rounded-full transition-transform duration-700  ${activeTab === index ? 'bg-cyan-300 p-3' : ''}`}
                                >
                                    {React.cloneElement(tab.icon, { color: activeTab === index ? '#242832' : '#9e9e9e' })}
                                </div>
                                {activeTab !== index && <span className="text-xs">{tab.label}</span>}
                            </button>
                        ))}
                    </div>
                    <div className="flex justify-end [&>button]:px-3">
                        {tabs.slice(2).map((tab, index) => (
                            <button
                                key={tab.label}
                                className={`flex flex-col items-center transition-all duration-700 w-[80px] ${activeTab === index + 2 ? 'text-white-750' : 'text-gray-400'}`}
                                onClick={() => handleTabClick(index + 2)}
                            >
                                <div
                                    className={`rounded-full transition-transform duration-700 ${activeTab === index + 2 ? 'bg-cyan-300 p-3' : ''}`}
                                >
                                    {React.cloneElement(tab.icon, { color: activeTab === index + 2 ? '#242832' : '#9e9e9e' })}
                                </div>
                                {activeTab !== index + 2 && <span className="text-xs">{tab.label}</span>}
                            </button>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Floating Action Button */}
            <button
                className="fixed flex bottom-8 left-1/2 w-16 h-16 items-center justify-center -translate-x-1/2 bg-cyan-300 text-gray-900 p-4 rounded-full shadow-lg z-20"
                onClick={
                    activeTab === 3 && isModalOpen
                        ? () => {
                            setIsModalOpen(false);
                            setActiveTab(-1);
                            setIsBlack(false);
                        }
                        : () => { }
                }
            >
                {activeTab === 3 && isModalOpen ? (
                    <SVGIcon path="M18 6L6 18M6 6l12 12" size={32} className="animate-rotate" />
                ) : (
                    <Logo/>
                )}
            </button>

            {/* Quick Access Menu Modal */}
            {isModalOpen && (
                <div className="fixed flex bottom-28 left-1/2 w-[600px] items-center justify-center -translate-x-1/2">
                    <div className="bg-gray-800 rounded-3xl p-6 w-full max-w-sm">
                        <h2 className="text-white text-xl font-semibold mb-4">Quick access menu</h2>
                        <div className="grid grid-cols-4 gap-4">
                            {gridImages.map((images, i) => (
                                <ImageGrid key={i} images={images} />
                            ))}
                        </div>
                        <hr className="top-shadow" />
                        <hr className="border-gray-700 my-4" />
                        <div className="flex justify-between items-center">
                            {quickAccessItems.map((item, index) => (
                                <button
                                    key={item.label}
                                    className={`flex flex-col items-center justify-center space-y-2 w-16 h-16 rounded-full transition-all duration-300`}
                                    onClick={() => setActiveQuickAccessTab(index)}
                                >
                                    <div className="w-6 h-6 flex items-center justify-center">
                                        {index === activeQuickAccessTab && <div className="gradient-bg absolute h-16 w-16 z-0 opacity-25"></div>}
                                        <div className="absolute flex items-center justify-center">
                                            {React.cloneElement(item.icon, { color: index === activeQuickAccessTab ? '#99f9ea' : '#9e9e9e' })}
                                        </div>
                                    </div>
                                    <span
                                        className={`text-xs transition-all duration-300 ${index === activeQuickAccessTab ? 'text-cyan-300' : 'text-gray-400'
                                            }`}
                                    >
                                        {item.label}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RizeMenu;