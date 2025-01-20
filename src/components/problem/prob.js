import React from "react";
import "./prob.css"; // Ensure this file contains the CSS below

const Problem = () => {
  return (
<div className="container">
<div className="heading-prob">
    <h1>Solutions</h1>
    </div>
    <div className="problem-cards-inside">
      <div className="scene">
        <div className="items items-2">
          <div className="item font">Smart Traffic Control"</div>
          <div className="item back">IoT devices in vehicles will ensure optimal traffic flow by monitoring and coordinating vehicle positions in real-time, eliminating the need for traffic lights in less accident-prone areas.</div>
        </div>
      </div>
      <div className="scene">
        <div className="items items-3">
          <div className="item font">Dynamic Tolling System</div>
          <div className="item back">AI-powered cameras predict peak traffic hours and implement variable toll charges, generating funds to improve infrastructure and reduce congestion in critical areas like Mundka.</div>
        </div>
      </div>
      <div className="scene">
        <div className="items items-4">
          <div className="item font">Rewarding Green Choices</div>
          <div className="item back">
            <div className="text-rotate">Incentives such as discounts and rewards will be provided for individuals using public transport, carpooling, cycling, or walking to reduce the overall number of vehicles on the road.</div>
          </div>
        </div>
      </div>
      <div className="scene">
        <div className="items items-5">
          <div className="item font">Promoting Cycling</div>
          <div className="item back">
            <div className="text-rotate">Encouraging cycling as a last-mile option with more cycle stands near metro stations and neighborhoods, creating a healthier and greener commuting alternative</div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Problem;
