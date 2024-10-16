import React from "react";
import "../App.css";
import trade from "../images/Rectangle 3.png";
import risk from "../images/l1NtBTj8px6kzRLIscIs56ETWRE.svg fill.png"

const Container = () => {
  return (
    <div className="grid-container">
      <div className="part-one">
              <div className="grid-item trade">
                <img className="trade-img" src={trade} alt="trade"  data-aos='fade-down-right'/>
                <h2 data-aos='fade-up' >Trade Optimizer</h2>
                <p data-aos='fade-up'>
                  Find the right moments to buy or sell, with personalized trade
                  suggestions designed to help you make the most of every opportunity.
                </p>
              </div>
              <div>
              <div className="grid-item market" data-aos='fade-down'>
                <h2>Market Insight</h2>
                <p>
                  Stay ahead of the market. Get real-time updates on market trends,
                  track top traders' movements, and spot signals from key influencers.
                </p>
              </div>
              <div className="grid-item market-2"></div>
              </div>
              <div className="grid-item risk">
                <img src={risk} alt="risk" className="risk-img"  data-aos='fade-down-left'/>
                <div className="risk-ex">
                <h2 data-aos='fade-up'>Risk Guard</h2>
                <p data-aos='fade-up'>
                  Get alerts on market swings and potential risks before they impact
                  your portfolio. This agent helps you navigate volatility and stay
                  prepared for anything.
                </p>
                </div>
              </div>
      </div>
      <div className="part-2">
              <div className="grid-item portfolio-sync"  data-aos='fade-right'>
                <h2>Portfolio Sync</h2>
                <p>
                  Easily manage your portfolio. You'll always know what you own, how
                  it's performing, and where it's headed.
                </p>
              </div>
              <div className="grid-item opportunity-scout"  data-aos='fade-left'>
                <h2>Opportunity Scout</h2>
                <p>
                  Find exciting new projects, events and tokens that others might be
                  missing. Identifying promising opportunities early, so you never miss
                  out on the next big thing.
                </p>
              </div>
              </div>
    </div>
  );
};

export default Container;
