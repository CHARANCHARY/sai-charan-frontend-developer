
import React from "react";
import "../App.css";
import graph from "../images/graph.png"
import wallet from "../images/wallet.png"
import tools from "../images/Tools.png"
import Future from "../images/Future Technology.png"
const AboutEthAi = () => {
  return (
    <div className="about-container">
      <section className="about-ethai">
        <h1>About EthAi</h1>
        <p>
          At EthAi, we're all about making crypto trading easier and more
          intuitive. We provide tools that help traders keep up with all new
          market trends, track top traders' movements.
        </p>
        <button className="read-me shadow-inner mt-5 shadow-[#4CDDFD] bg-[#CDFCFF] text-[#0B2A2D] border border-white/80 rounded-[12px] px-[20px] py-[10px] h-[50px] font-bold cursor-pointer hover:bg-[#CDFCFF] transition duration-300 ease-in-out">Read more</button>
      </section>

      <div className="about-grid">
        <div className="about-box">
          <img src={graph} alt="icon" />
          <h3>Stay Ahead</h3>
          <p>No more guesswork—get clear, trustable insights.</p>
        </div>
        <div className="about-box">
          <img src={wallet} alt="icon" />
          <h3>Know Your Assets</h3>
          <p>Always stay on top of how your investments are performing.</p>
        </div>
        <div className="about-box">
          <img src={tools} alt="icon" />
          <h3>Simple, Not Overwhelming</h3>
          <p>
            Our tools are designed to make complex market analysis easy to
            understand and act on.
          </p>
        </div>
        <div className="about-box">
          <img src={Future} alt="icon" />
          <h3>Future-Proof</h3>
          <p>
            We're constantly improving, adding new features to help you make the
            most informed decisions possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutEthAi;
