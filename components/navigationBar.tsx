// "use client"
// import React, { useState } from 'react';
// import { Home, Search, MessageSquare, Grid, Plus } from 'lucide-react';
// import Image from 'next/image';
// const BottomNav = () => {
//     const tab = ["Home", "Search", "Chat", "Menu"]
//     const tabIcon = [<Home />, <Search />, <MessageSquare />, <Grid />]
//     const [isActive, setIsActive] = useState(0);
//     return (
//         <nav className="absolute bottom-0 left-0 right-0 p-2 bg-white-750" >

//             <div className="flex justify-between items-center max-w-screen-sm mx-auto relative">
//                 {tab.map((item, index) => {
//                     return (
//                         <NavItem
//                             key={index}
//                             icon={tabIcon[index]}
//                             label={item}
//                             isActive={index === isActive}
//                             onClick={() => setIsActive(index)}
//                         />
//                     );
//                 })}
//                 {/* Floating Action Button */}
//                 <div className="absolute left-1/2 -translate-x-1/2 -top-8">
//                     <button className="bg-cyan-300 text-white-850 p-4 rounded-full shadow-lg transition-colors duration-300 w-16 h-16">
//                         {<Image className="m-auto" src="/logo.png" width={24} height={24} alt='' />}
//                     </button>
//                 </div>
//             </div>
//         </nav>
//     );
// }; ``

// const NavItem = ({ icon, label, isActive = false, onClick }: {
//     icon: any, label: string, isActive?: boolean, onClick?: () => void
// }) => {
//     return (
//         <button className={`flex flex-col items-center ${isActive ? 'text-white-750 -mb-2' : 'text-white-500'}`} onClick={onClick}>
//             <div className={`p-4 rounded-full ${isActive ? 'bg-cyan-300' : 'text-white-500'}`}>
//                 <div>
//                     {icon}
//                 </div>
//             </div>
//             <span className={`text-xs ${isActive ? 'opacity-0' : ''}`}>{label}</span>
//         </button>
//     );
// };

// export default BottomNav;

// "use client"
// import React, { useState } from 'react';
// import { Home, Search, MessageSquare, Grid, Plus } from 'lucide-react';
// import Image from 'next/image';

// const BottomNav = () => {
//     const tab = ["Home", "Search", "", "Menu", "Chat"]; // Include FAB in the tab list
//     const tabIcon = [<Home />, <Search />, <Image className="m-auto" src="/logo.png" width={24} height={24} alt='' />, <MessageSquare />, <Grid />];
//     const [isActive, setIsActive] = useState(0);

//     return (
//         <nav className="absolute bottom-0 left-0 right-0 p-2 bg-white-750">
//             <div className="flex justify-between items-center max-w-screen-sm mx-auto">
//                 {tab.map((item, index) => {
//                     return (
//                         <NavItem
//                             key={index}
//                             icon={tabIcon[index]}
//                             label={item}
//                             isActive={index === isActive}
//                             onClick={() => setIsActive(index)}
//                         />
//                     );
//                 })}
//             </div>
//         </nav>
//     );
// };

// const NavItem = ({ icon, label, isActive = false, onClick }: {
//     icon: any, label: string, isActive?: boolean, onClick?: () => void
// }) => {
//     return (
//         <button className={`flex flex-col items-center ${isActive ? 'text-white-750 -mb-2' : 'text-white-500'}`} onClick={onClick}>
//             <div className={`p-4 rounded-full ${isActive ? 'bg-cyan-300' : 'text-white-500'}`}>
//                 <div>
//                     {icon}
//                 </div>
//             </div>
//             <span className={`text-xs ${isActive ? 'opacity-0' : ''}`}>{label}</span>
//         </button>
//     );
// };

// export default BottomNav;


"use client"
import React, { useState } from 'react';
import { Home, Search, MessageSquare, Grid } from 'lucide-react';
import Image from 'next/image';

const BottomNav = () => {
    const tab = ["Home", "Search", "Chat", "Menu"];
    const tabIcon = [<Home />, <Search />, <MessageSquare />, <Grid />];
    const [isActive, setIsActive] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <nav className="absolute bottom-0 left-0 right-0 p-2 bg-white-750 rounded-t-[32px] overflow-hidden">
                <div className="flex justify-between items-center max-w-screen-sm mx-auto">
                    {tab.map((item, index) => (
                        <NavItem
                            key={index}
                            icon={tabIcon[index]}
                            label={item}
                            isActive={index === isActive}
                            onClick={() => setIsActive(index)}
                        />
                    ))}
                </div>
            </nav>
            {/* Floating Action Button */}
            <div className="fixed bottom-16 left-1/2 transform -translate-x-1/2 z-50">
                <button
                    className="bg-cyan-300 text-white-850 p-4 rounded-full shadow-lg transition-colors duration-300 w-16 h-16"
                    onClick={openModal}
                >
                    <Image className="m-auto" src="/logo.png" width={24} height={24} alt='' />
                </button>
            </div>
            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white-750 p-4 m-4 rounded-lg shadow-lg max-w-sm w-full">
                        <h2 className="text-xl mb-4 text-white">Quick access menu</h2>
                        <ul>
                            <li className='grid grid-cols-2 grid-rows-2'>
                                <Image className="m-auto" src="/logo.png" width={24} height={24} alt='' />
                                <Image className="m-auto" src="/logo.png" width={24} height={24} alt='' />
                                <Image className="m-auto" src="/logo.png" width={24} height={24} alt='' />
                                <Image className="m-auto" src="/logo.png" width={24} height={24} alt='' />
                            </li>
                            <li className='grid grid-cols-2 grid-rows-2'>
                                <Image className="m-auto" src="/logo.png" width={24} height={24} alt='' />
                                <Image className="m-auto" src="/logo.png" width={24} height={24} alt='' />
                                <Image className="m-auto" src="/logo.png" width={24} height={24} alt='' />
                                <Image className="m-auto" src="/logo.png" width={24} height={24} alt='' />
                            </li>
                        </ul>
                        <button className="mt-4 p-2 bg-cyan-300 text-white-850 rounded" onClick={closeModal}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

const NavItem = ({ icon, label, isActive = false, onClick }: {
    icon: any, label: string, isActive?: boolean, onClick?: () => void
}) => {
    return (
        <button className={`flex flex-col items-center ${isActive ? 'text-white-750 -mb-2' : 'text-white-500'}`} onClick={onClick}>
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
