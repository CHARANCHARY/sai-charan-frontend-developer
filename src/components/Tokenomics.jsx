// Tokenomics.js
import React from "react";
import "../App.css";
import image from "../images/Group 18.png";
import video from "../BgAnimation/tokenomics.mp4"





const Tokenomics = () => {
  return (

    <div className="main-cont relative w-full h-screen bg-black bg-opacity-60 z-5">
           <video
              className="absolute top-0 left-0 w-full h-full object-cover z-0  video-part"
              src={video}
              autoPlay
              loop
              muted
            />
    
              <div className="relative z-10 flex flex-col items-center justify-center h-full tokenomics-container">
                <h1>Tokenomics</h1>

                <div className="tokenomics-content">



                <div className="chart-container"    data-aos='fade-down-right'>
                  <div className="chart">
                    {/* Chart Image */}
                    <img
                      src={image} 
                      alt="Chart"
                      className="chart-image"
                    />

                    {/* Arrow pointing to Liquidity Pool */}
                    <div className="arrow liquidity-arrow"></div>
                    <div className="label liquidity-label" data-aos='fade'>Liquidity Pool (90%)</div>

                    {/* Arrow pointing to Marketing */}
                    <div className="arrow marketing-arrow"></div>
                    <div className="label marketing-label">Marketing (5%)</div>

                    {/* Arrow pointing to Team */}
                    <div className="arrow team-arrow"></div>
                    <div className="label team-label">Team  (35%)</div>
                  </div>
                </div>







                  <div className="information">
                    <div className="information-team"  data-aos='fade-left'>
                      <table>
                        <tbody>
                          <tr>
                            <td>Name</td>
                            <td>:</td>
                            <td>EthAi</td>
                          </tr>
                          <tr>
                            <td>Token Name</td>
                            <td>:</td>
                            <td>$EthAi</td>
                          </tr>
                          <tr>
                            <td>Token Standard</td>
                            <td>:</td>
                            <td>ERC20</td>
                          </tr>
                          <tr>
                            <td>Blockchain</td>
                            <td>:</td>
                            <td>Ethereum</td>
                          </tr>
                          <tr>
                            <td>Total Supply</td>
                            <td>:</td>
                            <td>100 Million</td>
                          </tr>
                          <tr>
                            <td>Tax</td>
                            <td>:</td>
                            <td>5%/5%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="information-team-2"  data-aos='fade-left'>
                      <table>
                        <tbody>
                          <tr>
                            <td>Team</td>
                            <td>:</td>
                            <td >35%</td>
                          </tr>
                          <tr>
                            <td>Marketing</td>
                            <td>:</td>
                            <td>5%</td>
                          </tr>
                          <tr>
                            <td>Liquidity Pool</td>
                            <td>:</td>
                            <td>90%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

    </div>
  );
};

export default Tokenomics;
