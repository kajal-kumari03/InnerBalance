import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Hearder";
import  Footer from "../components/Footer";

const Home = () => {
  return (
    <>
    <Header />
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to InnerBalance</h1>
      <p style={styles.tagline}>Your mental wellness companion platform.</p>
 
      {/* <div style={styles.buttonContainer}>
        <Link to="/about">
          <button style={styles.button}>About</button>
        </Link>
        <Link to="/login">
          <button style={styles.button}>Login</button>
        </Link>
        <Link to="/signup">
          <button style={styles.button}>Signup</button>
        </Link>
      </div> */}
    </div>
    <Footer />
    </>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "1rem",
    color: "#2c3e50",
  },
  tagline: {
    fontSize: "1.2rem",
    marginBottom: "2rem",
    color: "#555",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    flexWrap: "wrap",
  },
  button: {
    padding: "0.7rem 1.5rem",
    fontSize: "1rem",
    cursor: "pointer",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#3498db",
    color: "#fff",
  },
};

export default Home;
