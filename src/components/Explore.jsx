import React from 'react';
import "../App.css";


const DappSection = () => {
  return (
    <div className="explore-container">
      <div className="explore-content">
        <h2>Explore Our <span className="explore-highlight">dApp</span></h2>
        <p>
          EthAi is an AI-powered dApp designed to help traders make smarter, data-driven decisions. By tracking smart money flows, monitoring key wallets, and providing real-time market insights, EthAi empowers users to stay ahead of trends. The platform offers intuitive AI features for asset recommendations, market analysis, and personalized crypto Q&A, making it the ultimate tool for both novice and experienced traders.
        </p>
        <button className="shadow-inner shadow-[#4CDDFD] bg-[#CDFCFF] text-[#0B2A2D] border border-white/80 rounded-[12px] px-[20px] py-[10px] h-[50px] font-bold cursor-pointer hover:bg-[#CDFCFF] transition duration-300 ease-in-out">Open dApp</button>
      </div>
    </div>
  );
};

export default DappSection;
