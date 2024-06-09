import React, { useState, useEffect } from 'react';
import { hero } from '../assets';

const Hero = () => {
    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
    };
    function success(pos) {
        var crd = pos.coords;
        console.log("Your current position is:");
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
    }
    
    function errors(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    
    useEffect(() => {
        if (navigator.geolocation) {
        navigator.permissions
            .query({ name: "geolocation" })
            .then(function (result) {
            console.log(result);
            if (result.state === "granted") {
                //If granted then you can directly call your function here
                navigator.geolocation.getCurrentPosition(success, errors, options);
            } else if (result.state === "prompt") {
                //If prompt then the user will be asked to give permission
                navigator.geolocation.getCurrentPosition(success, errors, options);
            } else if (result.state === "denied") {
                //If denied then you have to show instructions to enable location
            }
            });
        } else {
        console.log("Geolocation is not supported by this browser.");
        }
    }, []);

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
                className="absolute w-full h-screen object-cover z-0 inset-0 brightness-50"
            />
            <h1 className="absolute my-[9%] flex justify-center font-bold text-white text-[72px] w-screen">Find Your New Home</h1>
            <p className="absolute flex my-[15%] justify-center font-bold text-white text-[32px] w-screen">Designed specifically for UVA students</p>
            <div className="relative flex mt-[20%] items-center p-2 sm:p-4 md:p-6 lg:p-8 rounded-xl max-w-4xl mx-auto h-[5vh]">
                <form onSubmit={handleSearch} className="relative flex w-[700px] h-[50px]">
                    <input
                        type="text"
                        placeholder="Search for apartments, neighborhoods..."
                        className="flex-grow p-3 text-lg sm:text-xl md:text-2xl border-2 border-gray-300 focus:border-[#EB9657] rounded-l-xl focus:outline-none transition-colors w-[700px] h-[50px]"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="bg-[#EB9657] text-white font-bold text-[16px] px-8 rounded-r-lg hover:bg-[#B46F29] focus:outline-none"
                    >
                        Search
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Hero;