import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Solution from "../solution/sol";
import Problem from "../problem/prob";
import data from "../../assets/images/data.png";
import iot from "../../assets/images/iot.png";
import proof from "../../assets/images/proof.png";
import commute from "../../assets/images/commute.png";
import './home.css';

const Home = () => {
  const metrics = [
    {
      number: 11,
      suffix: "M",
      title: "Vehicles on the Roads",
      description: "Delhi's roads are overwhelmed with over 11 million registered vehicles, leading to constant gridlock, pollution, and stress.",
    },
    {
      number: 90,
      suffix: "min",
      title: "Wasted Daily",
      description: "On average, commuters spend 90 minutes stuck in traffic, reducing productivity and increasing frustration.",
    },
    {
      number: 40,
      suffix: "%",
      title: "Delhi's Air Pollution",
      description: "Vehicular emissions contribute to 40% of the city's air pollution, posing serious health risks to the public.",
    },
    {
      number: 50000,
      suffix: "Cr",
      title: "Annual Economic Losses",
      description: "Extended travel times and traffic inefficiencies are costing the city billions annually, affecting businesses and residents alike.",
    },
  ];

  return (
    <div className="app">
      {/* Hero Section */}
      <div className="hero">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="hero-title">Reimagining Delhi’s Traffic: A Smarter and Quicker Future</h1>
          <p className="hero-subtitle">
            Transforming commuting through innovative technology and sustainable solutions to reduce congestion, improve air quality, and make travel time more productive.
          </p>
          <button className="cta-btn">Learn More</button>
        </motion.div>
      </div>

      {/* Metrics Section with Animated Numbers */}
      <section className="metrics-section">
        {metrics.map((metric, index) => (
          <div key={index}>
            <AnimatedNumber number={metric.number} suffix={metric.suffix} />
            <h2>{metric.title}</h2>
            <p>{metric.description}</p>
          </div>
        ))}
      </section>

      {/* Problem Section */}
      <Problem />
      <div className="features">
        <h1 className="section-title">Our Key Solutions</h1>
        <div className="cards-container">
          <motion.div
            className="feature-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={commute}
              alt="AI Traffic Management"
            />
            <h3>Integration for a Smooth Commute</h3>
            <p>
              Our vision includes an integrated transport system, where both public and private transit options work together seamlessly, ensuring a hassle-free commute for all.
            </p>
          </motion.div>

          <motion.div
            className="feature-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={data}
              alt="Smart Parking"
            />
            <h3>Smart Urban Planning Powered by Data</h3>
            <p>
              Geospatial mapping and AI technologies will guide urban planning, preventing traffic hotspots and enabling efficient resource allocation to improve commuting experiences.
            </p>
          </motion.div>

          <motion.div
            className="feature-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={iot}
              alt="Eco-Friendly Transport"
            />
            <h3>Revolutionizing Traffic Flow with IoT and Smart Cars</h3>
            <p>
              Our solution leverages IoT devices installed in every vehicle to optimize traffic flow. Each car is positioned between two other vehicles, minimizing gaps and preventing congestion. When the distance between cars fluctuates, the system triggers an alarm, maintaining optimal spacing. Over time, smart cars can also be trained to respond intelligently to real-time traffic conditions, further enhancing the system’s efficiency.
            </p>
          </motion.div>

          <motion.div
            className="feature-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={proof}
              alt="Eco-Friendly Transport"
            />
            <h3>Reducing Overcrowding with Parking Proof</h3>
            <p>
              To tackle the growing number of vehicles, vehicle buyers will be required to provide proof of parking availability or a long-term rental agreement, ensuring fewer vehicles on the roads.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Solution Section */}
      <Solution />

      {/* Features Section */}
    </div>
  );
};

// Component to animate numbers with suffix (e.g., "M", "min")
const AnimatedNumber = ({ number, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        const increment = Math.ceil(number / 100); // Adjust this for a smoother or faster effect
        return prevCount + increment <= number ? prevCount + increment : number;
      });
    }, 30); // Update every 30ms for smooth transition

    return () => clearInterval(interval);
  }, [number]);

  return <h1>{count}{suffix}{count < number && "+"}</h1>;
};

export default Home;
