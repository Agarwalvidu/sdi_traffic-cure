// ProfilePage.jsx
import React from "react";

const ProfilePage = () => {
  const userName = "John Doe"; // Replace with dynamic user data if available.
  const stats = {
    totalDistance: "1200 km",
    rewards: "₹500",
    carbonSavings: "150 kg CO2",
  };
  const recentTrips = [
    { date: "Jan 15, 2025", route: "City Center to Airport", mode: "Public Transport" },
    { date: "Jan 10, 2025", route: "Home to Mall", mode: "Carpool" },
  ];
  const suggestions = [
    "Use Route B to avoid traffic congestion at Route A during peak hours.",
    "Consider cycling for your next short-distance trip!",
  ];

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Welcome, {userName}</h1>
      </header>
      <div style={styles.content}>
        <div style={styles.section}>
          <div style={styles.profileInfo}>
            <img
              src="profile.jpg"
              alt="Profile"
              style={styles.profileImage}
            />
            <h2>{userName}</h2>
          </div>
        </div>
        <div style={styles.section}>
          <h3>Your Stats</h3>
          <div>Total Distance Traveled: <strong>{stats.totalDistance}</strong></div>
          <div>Total Rewards Earned: <strong>{stats.rewards}</strong></div>
          <div>Carbon Emissions Saved: <strong>{stats.carbonSavings}</strong></div>
        </div>
        <div style={styles.section}>
          <h3>Recent Trips</h3>
          {recentTrips.map((trip, index) => (
            <div key={index}>
              {trip.date}: {trip.route} - <strong>{trip.mode}</strong>
            </div>
          ))}
        </div>
        <div style={styles.section}>
          <h3>Suggestions</h3>
          {suggestions.map((suggestion, index) => (
            <div key={index}>{suggestion}</div>
          ))}
        </div>
      </div>
      <footer style={styles.footer}>
        <p>Contact Us | Privacy Policy | Terms & Conditions</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f4f4f4",
    margin: 0,
    padding: 0,
    minHeight: "100vh",
  },
  header: {
    backgroundColor: "#007bff",
    color: "white",
    padding: "20px",
    textAlign: "center",
  },
  content: {
    maxWidth: "800px",
    margin: "20px auto",
    padding: "20px",
    background: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  section: {
    marginBottom: "20px",
  },
  profileInfo: {
    textAlign: "center",
    marginBottom: "20px",
  },
  profileImage: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    marginBottom: "10px",
  },
  footer: {
    textAlign: "center",
    marginTop: "20px",
    padding: "10px",
    background: "#ddd",
    borderRadius: "4px",
  },
};

export default ProfilePage;