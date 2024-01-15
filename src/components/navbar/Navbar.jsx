import './navbar.css'
import { FaDiscord } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import { useEffect, useState } from 'react';
import Button from '../Button';

const Navbar = () => {
    const [isTrue, setIsTrue] = useState(0);

    useEffect(() => {

        const handleScroll = () => {
            const { scrollTop, scrollHeight } = document.documentElement;
            const scrollPercent = (scrollTop / (scrollHeight - window.innerHeight)) * 100;

            setIsTrue(scrollPercent);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, [])







    return (
        <div className="pt-5">
            <nav className={` ${isTrue ? 'fixed bg-gray-800 w-full py-3 top-0' : 'container mx-auto bg-white rounded-3xl py-3'} overflow-hidden flex justify-between items-center px-10  transition duration-500`}>
                <div>
                    <img className="w-16 rounded-full" src="https://i.ibb.co/bsTygYG/download-1.png" alt="" />
                </div>

                <div>
                    <ul className={`flex items-center gap-7 transition duration-300 font-semibold ${isTrue ? 'text-gray-100' : 'text-gray-600 translate-x-40'}`}>
                        <li className='hover:text-blue-500 hover:border-b cursor-pointer duration-300 transition hover:-translate-y-1'>About</li>
                        <li className='hover:text-blue-500 hover:border-b cursor-pointer  duration-300 transition hover:-translate-y-1'>Aggregator</li>
                        <li className='hover:text-blue-500 hover:border-b cursor-pointer  duration-300 transition hover:-translate-y-1'>Features</li>
                        <li className='hover:text-blue-500 hover:border-b cursor-pointer  duration-300 transition hover:-translate-y-1'>Roadmap</li>
                        <li className='hover:text-blue-500 hover:border-b cursor-pointer  duration-300 transition hover:-translate-y-1'>Contact us</li>
                    </ul>
                </div>
                <div className={`flex justify-between gap-x-14 transition duration-500 ${isTrue ? '' : 'translate-x-80'}`}>
                    <div className='flex gap-5 items-center'>
                        <FaDiscord className='cursor-pointer text-2xl text-[#7855f3]' />
                        <IoLogoTwitter className='cursor-pointer text-2xl text-[#7855f3]' />
                        <div className={`${isTrue ? '' : 'translate-x-20'} transition duration-500`}><Button btnText={'Combine'}></Button></div>
                    </div>
                    <Button btnText={'Platform'}></Button>
                </div>

            </nav>
        </div>
    );
};

export default Navbar;