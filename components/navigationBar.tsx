"use client"
import React, { useEffect, useState } from 'react';
import { Home, Search, MessageSquare, LayoutGrid, X } from 'lucide-react';
import Club from "@/public/assets/icons/club.svg"
import Events from "@/public/assets/icons/events.svg"
import Overview from "@/public/assets/icons/overview.svg"
import Logo from "@/public/assets/icons/logo.svg"
import games from "@/public/assets/images/pubg.png"
import Image from 'next/image';

const ImageGrid = ({ images }) => {
    const isSingleImage = images.length === 1;
    const isTwoImages = images.length === 2;

    return (
        <div
            className={`${isSingleImage ? 'flex items-center justify-center rounded-lg' : 'grid grid-cols-2 grid-rows-2'
                } border-2 border-white-700 rounded-lg w-14 h-14 ${isSingleImage ? 'p-1 ' : ''
                }`}
        >
            {images.map((image, i) => (
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
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeQuickAccessTab, setActiveQuickAccessTab] = useState(0);

    const tabs = [
        { icon: Home, label: 'Home' },
        { icon: Search, label: 'Search' },
        { icon: MessageSquare, label: 'Chat' },
        { icon: LayoutGrid, label: 'Menu' },
    ];

    const quickAccessItems = [
        { label: 'Overview', icon: Overview },
        { label: 'Events', icon: Events },
        { label: 'My clubs', icon: Club },
        { label: 'Message', icon: <MessageSquare /> },
    ];

    const gridImages = [
        [games, games, games, games],
        [games],
        [games, games],
        [games, games, games],
    ];
    useEffect(() => {
    }, [activeTab, isModalOpen])
    return (
        <div className="relative h-screen bg-gray-900">
            {/* Bottom Navigation */}
            <nav className="fixed bottom-0 left-0 right-0 bg-gray-800 rounded-t-3xl">
                <div className="flex justify-between items-center p-2">
                    {tabs.map((tab, index) => (
                        <button
                            key={tab.label}
                            className={`flex flex-col items-center space-y-1 transition-all duration-700 ${activeTab === index ? 'text-white-750 ' : 'text-gray-400'
                                }`}
                            onClick={
                                index == 3
                                    ? () => {
                                        setIsModalOpen(true);
                                        setActiveTab(index);
                                    }
                                    : () => setActiveTab(index)
                            }
                        >
                            <div
                                className={`p-3 rounded-full transition-transform duration-700 ${activeTab === index ? 'bg-cyan-300 ' : ''
                                    }`}
                                onClick={index == 4 ? () => setIsModalOpen(true) : () => { }}
                            >
                                <tab.icon size={24} />
                            </div>
                            {activeTab !== index ? <span className="text-xs">{tab.label}</span> : <></>}
                        </button>
                    ))}
                </div>
            </nav>

            {/* Floating Action Button */}
            <button
                className="fixed flex bottom-14 left-1/2 w-16 h-16 items-center justify-center -translate-x-1/2 bg-cyan-300 text-gray-900 p-4 rounded-full shadow-lg z-20"
                onClick={
                    activeTab == 3 && isModalOpen
                        ? () => {
                            setIsModalOpen(false);
                            setActiveTab(-1);
                        }
                        : () => { }
                }
            >
                {activeTab == 3 && isModalOpen ? (
                    <X size={32} className="animate-rotate" />
                ) : (
                    <Image src={Logo} width={24} height={24} alt="" className="" />
                )}
            </button>

            {/* Quick Access Menu Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <div className="bg-gray-800 rounded-3xl p-6 w-full max-w-sm">
                        <h2 className="text-white text-xl font-semibold mb-4">
                            Quick access menu
                        </h2>
                        <div className="grid grid-cols-4 gap-4 mb-6">
                            {gridImages.map((images, i) => (
                                <ImageGrid key={i} images={images} />
                            ))}
                        </div>
                        <hr className="border-gray-700 my-4" />
                        <div className="flex justify-between items-center">
                            {quickAccessItems.map((item, index) => (
                                <button
                                    key={item.label}
                                    className={`flex flex-col items-center justify-center space-y-2 w-16 h-16 rounded-full transition-all duration-300`}
                                    onClick={() => setActiveQuickAccessTab(index)}
                                >
                                    <div className="w-6 h-6 flex items-center justify-center">
                                        {item.label !== 'Message' ? (
                                            <>
                                                {index === activeQuickAccessTab ? <div className="gradient-bg absolute h-16 w-16 z-0 opacity-25"></div> : <></>}
                                                <div className="absolute flex items-center justify-center">
                                                    <Image
                                                        src={item.icon}
                                                        width={24}
                                                        height={24}
                                                        alt=""
                                                        className={`transition-all duration-300 z-10 ${index === activeQuickAccessTab ? 'filter brightness-0 invert' : ''}`}
                                                    />
                                                </div>
                                            </>
                                        ) : (
                                            <>

                                                {index === activeQuickAccessTab ? <div className="gradient-bg absolute h-16 w-16 z-0 opacity-25"></div> : <></>}
                                                <MessageSquare
                                                    size={24}
                                                    className={`transition-all duration-300 ${index === activeQuickAccessTab ? 'text-cyan-300' : 'text-gray-400'
                                                        }`}
                                                />
                                            </>
                                        )}
                                    </div>
                                    <span className={`text-xs transition-all duration-300  ${index === activeQuickAccessTab ? 'text-cyan-300' : 'text-gray-400'
                                        }`}>
                                        {item.label}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
            <style jsx>{`
                .gradient-bg {
                    background-image: radial-gradient(circle, rgba(135,249,234,1) 0%, rgba(0,0,0,0) 50%);
                }
            `}</style>
        </div>
    );
};

export default RizeMenu;