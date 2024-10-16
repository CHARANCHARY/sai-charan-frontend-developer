
import React, { useState } from 'react';
import helloimage from "../images/page.png";
import Doodle from "../BgAnimation/bg";

function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
    return (
        <div className="h-screen font-sans">
            <div
               className="home-container absolute top-0 left-0 w-full h-full bg-cover bg-center -z-10"
            >
                 <Doodle />
            </div>

            (
    <nav className="flex justify-between px-[50px] py-[20px] z-10 text-white sticky top-0 border-white/10">
      {/* Left section (logo or title) */}
      <div className="text-2xl font-bold">
        {/* You can put your logo or title here */}
        Logo
      </div>

      {/* Navbar links for medium and larger screens */}
      <div className="hidden md:flex bg-[#0C2B2FB2] rounded-[48px] navbar flex gap-[80px] p-[20px] justify-center items-center">
        <a
          href="features"
          className="no-underline text-white hover:text-[#4CDDFD] transition duration-300 ease-in-out"
          aria-label="Features"
        >
          <h2 className="m-0">Features</h2>
        </a>
        <a
          href="#why-us"
          className="no-underline text-white hover:text-[#4CDDFD] transition duration-300 ease-in-out"
          aria-label="Why Us"
        >
          <h2 className="m-0">Why Us</h2>
        </a>
        <a
          href="#tokenomics"
          className="no-underline text-white hover:text-[#4CDDFD] transition duration-300 ease-in-out"
          aria-label="Tokenomics"
        >
          <h2 className="m-0">Tokenomics</h2>
        </a>
        <a
          href="#roadmap"
          className="no-underline text-white hover:text-[#4CDDFD] transition duration-300 ease-in-out"
          aria-label="Roadmap"
        >
          <h2 className="m-0">Roadmap</h2>
        </a>
      </div>

      {/* Right section (buttons) */}
      <div className="hidden md:flex gap-[20px] relative">
        <button
          className="border-none px-[20px] h-[50px] text-white font-bold cursor-pointer hover:bg-[#4CDDFD] transition duration-300 ease-in-out"
          aria-label="Log In"
        >
          Log In
        </button>
        <button
          className="shadow-inner shadow-[#4CDDFD] bg-[#CDFCFF] text-[#0B2A2D] border border-white/80 rounded-[12px] px-[20px] py-[10px] h-[50px] font-bold cursor-pointer hover:bg-[#CDFCFF] transition duration-300 ease-in-out"
          aria-label="Whitepaper"
        >
          Whitepaper
        </button>
      </div>

      {/* Hamburger icon for mobile */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white p-2">
          {/* Hamburger Icon */}
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
      </div>
    </nav>

    {/* Mobile Menu */}
    <div
      className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-[#0C2B2FB2] rounded-b-lg absolute top-[60px] left-0 w-full`}
    >
      <a
        href="features"
        className="block text-white text-center p-4 hover:text-[#4CDDFD]"
        aria-label="Features"
      >
        Features
      </a>
      <a
        href="#why-us"
        className="block text-white text-center p-4 hover:text-[#4CDDFD]"
        aria-label="Why Us"
      >
        Why Us
      </a>
      <a
        href="#tokenomics"
        className="block text-white text-center p-4 hover:text-[#4CDDFD]"
        aria-label="Tokenomics"
      >
        Tokenomics
      </a>
      <a
        href="#roadmap"
        className="block text-white text-center p-4 hover:text-[#4CDDFD]"
        aria-label="Roadmap"
      >
        Roadmap
      </a>

      {/* Add mobile buttons if needed */}
    </div>

            <div
                className="home-content tracking-wider font-1000 flex flex-col items-center justify-center h-[calc(100vh-120px)] text-center z-10 text-white"
            >
                <h1 className="text-[56px]">
                    When Innovation
                </h1>

                <h1 style={{ fontSize: "56px",  textAlign: "center", gap: "10px" }}>
                    <span className="mr-3">Meets</span>
                    <span style={{ backgroundColor: "#B0F9FF", padding: "0 20px", borderRadius: "80px",color: "#0B2A2D"}}>
                        Investment
                    </span>
                </h1>

                <p className='text-[24px] my-[20px] opacity-80 text-[#B0FAFFB2]' >
                    Empowering Trading Through Advanced Technology
                </p>

                <button
                   className="bg-[#0C2B2FB2] border-2 border-[#8BF9E833] rounded-[24px] px-[40px] py-[15px] text-white text-[18px] font-500 cursor-pointer"

                >
                    Open dApp
                </button>
            </div>

            <div
                style={{
                    position: "absolute",
                    bottom: "20px",
                    right: "20px",
                    zIndex: 1,
                }}
            >
            </div>
        </div>
    );
}

export default Navbar;
