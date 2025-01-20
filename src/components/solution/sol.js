import React, { useState } from "react";
import "./sol.css"; 
import goodbye from "../../assets/images/goodbye.png"
import air from "../../assets/images/air.png"
import time from "../../assets/images/time.png"
import sustain from "../../assets/images/sustain.png"

const Card = ({ imageUrl, title, detail }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="card">
      <input
        id={`card-${title}`}
        type="checkbox"
        checked={isExpanded}
        onChange={() => setIsExpanded(!isExpanded)}
      />
      <label className="tgl-btn" htmlFor={`card-${title}`}>
        <span></span>
      </label>
      <div className="tgl-view">
        <div className="card-image">
          <img src={imageUrl} alt={title} />
        </div>
        <h2 className="card-title">{title}</h2>
        <p className="card-detail">{detail}</p>
      </div>
    </div>
  );
};

const Solution = () => {
  const cardsData = [
    {
      imageUrl: goodbye,
      title: "Say Goodbye to Traffic",
      detail: "Our solution will ensure smoother commutes with reduced congestion, optimizing travel times and minimizing delays.",
    },
    {
      imageUrl: air,
      title: "Cleaner, Healthier Air",
      detail: "With fewer vehicles on the road and greener alternatives, air quality in Delhi will improve, leading to fewer respiratory and cardiovascular diseases.",
    },
    {
      imageUrl: time,
      title: "Saving Time",
      detail: "By reducing time spent in traffic, commuters can focus on work, leisure, or other productive activities",
    },
    {
        imageUrl: sustain,
        title: "Core Sustainability",
        detail: "Our initiative promotes greener transport options like cycling and public transport, making commuting eco-friendly and sustainable.",
      },
  ];

  return (
    <div className="container">
      <h1>Core Benefits</h1>
      <div className="grid">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            imageUrl={card.imageUrl}
            title={card.title}
            detail={card.detail}
          />
        ))}
      </div>
    </div>
  );
};

export default Solution;
