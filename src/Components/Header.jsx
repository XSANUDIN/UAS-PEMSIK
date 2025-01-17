

import React from "react";

const Header = () => {
  return (
    <>
    <header
    id="up"
    className="bg-fixed bg-no-repeat bg-center bg-cover min-h-screen relative"
    style={{ backgroundImage: 'url(/lavamerapi.jpeg)' }}
    >
    <div className="h-screen bg-opacity-50 bg-black flex items-center justify-center">
        <div className="mx-2 text-center">
        <h1 className="text-gray-100 font-extrabold text-4xl xs:text-5xl md:text-6xl p-3">Ingpo Merapi</h1>
        <h2 className="text-gray-200 font-semibold text-2xl xs:text-2xl md:text-3xl leading-tight">Ingpo terbaru mengenai Merapi</h2>
        <div className="inline-flex">
 
        </div>
        </div>
    </div>
    </header>

    </>
  );
};

export default Header;
