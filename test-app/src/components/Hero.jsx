import React, { useState } from 'react';
import { hero } from '../assets';

const Hero = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        event.preventDefault();
        alert(`Searching for: ${searchTerm}`);
        setSearchTerm('');
        // Implement your search logic or redirection here
    };

    return (
        <section className="relative flex w-full h-screen mx-auto">
            <img
                src={hero}
                alt="hero"
                className="absolute w-full h-[70%] object-cover z-0 inset-0 opacity-75"
            />
            <div className="relative flex mt-[15%] items-center p-2 sm:p-4 md:p-6 lg:p-8 rounded-xl shadow-lg max-w-4xl mx-auto h-[5vh]">
                <form onSubmit={handleSearch} className="relative flex w-[700px] h-[50px]">
                    <input
                        type="text"
                        placeholder="Search for apartments, neighborhoods..."
                        className="flex-grow p-3 text-lg sm:text-xl md:text-2xl border-2 border-gray-300 focus:border-blue-500 rounded-l-xl focus:outline-none transition-colors w-[700px] h-[50px]"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="bg-[#B46F29] text-white font-bold text-[16px] px-8 rounded-r-lg hover:bg-blue-600 focus:outline-none"
                    >
                        Search
                    </button>
                </form>
            </div>
        </section>
        
    );
};

export default Hero;