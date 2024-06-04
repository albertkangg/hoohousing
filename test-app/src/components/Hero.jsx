import React, { useState } from 'react';

const Hero = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        event.preventDefault();
        alert(`Searching for: ${searchTerm}`);
        // Implement your search logic or redirection here
    };

    return (
        <div className="bg-white p-5 rounded-lg shadow-md flex items-center justify-center">
            <form onSubmit={handleSearch} className="flex w-full max-w-3xl">
                <input
                    type="text"
                    placeholder="Search for apartments, neighborhoods..."
                    className="flex-grow p-4 rounded-l-lg focus:outline-none"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-8 rounded-r-lg hover:bg-blue-600 focus:outline-none"
                >
                    Search
                </button>
            </form>
        </div>
    );
};

export default Hero;