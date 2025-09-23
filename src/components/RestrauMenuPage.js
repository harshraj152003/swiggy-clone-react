// RestrauMenuPage.js
import React from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import resData from "../utils/mockData";

const RestrauMenuPage = () => {
  const { resId } = useParams();
  const navigate = useNavigate(); // Initialize navigate

  // Find the restaurant using the ID from the URL
  const restaurant = resData.restaurants.find((res) => res.info.id === resId);

  // If the restaurant is not found, display a message
  if (!restaurant) {
    return (
      <div>
        <h1 style={styles.notFoundTitle}>Restaurant not found!</h1>
        <button style={styles.backButton} onClick={() => navigate('/')}>
          Back to Home
        </button>
      </div>
    );
  }

  const { name, cloudinaryImageId, costForTwo, cuisines, avgRating, sla, totalRatingsString } = restaurant.info;
  // Use a larger image size for the full-screen hero section
  const imageUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/${cloudinaryImageId}`;

  // Inline CSS for the component
  const styles = {
    // Body styles to ensure full-width background and reset margins
    globalBodyStyle: `
      body {
        margin: 0;
        background-color: #f8f8f8; /* Light grey background for the whole page */
        font-family: 'Roboto', sans-serif; /* A more professional font */
        color: #333;
      }
    `,
    pageContainer: {
      minHeight: '100vh', // Ensure it takes full viewport height
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingBottom: '50px', // Space for fixed elements or just bottom padding
    },
    heroSection: {
      width: '100%',
      height: '350px', // Tall hero image
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      color: '#fff',
      textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
      position: 'relative', // Needed for overlay
    },
    heroOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.4)', // Dark overlay for text readability
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: '30px 20px',
    },
    heroTitle: {
      fontSize: '3.5rem',
      fontWeight: '700',
      marginBottom: '10px',
      textAlign: 'center',
    },
    heroCuisines: {
      fontSize: '1.5rem',
      textAlign: 'center',
      marginBottom: '10px',
    },
    detailsCard: {
      backgroundColor: '#fff',
      borderRadius: '10px',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
      margin: '-80px auto 40px auto', // Pulls the card up over the hero section
      padding: '30px 40px',
      maxWidth: '900px',
      width: '90%',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '20px',
      textAlign: 'center',
      position: 'relative',
      zIndex: 10, // Ensure it's above other elements
    },
    detailItem: {
      padding: '15px',
      borderRight: '1px solid #eee', // Separator
      '&:lastChildd': {
        borderRight: 'none',
      },
    },
    detailLabel: {
      fontSize: '0.9rem',
      color: '#777',
      marginBottom: '5px',
      fontWeight: '500',
    },
    detailValue: {
      fontSize: '1.2rem',
      fontWeight: '600',
      color: '#333',
    },
    mainContent: {
      maxWidth: '900px',
      width: '90%',
      backgroundColor: '#fff',
      borderRadius: '10px',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.05)',
      padding: '40px',
      marginTop: '20px',
    },
    sectionTitle: {
      fontSize: '2rem',
      fontWeight: '700',
      color: '#333',
      marginBottom: '25px',
      borderLeft: '5px solid #ff5a5f',
      paddingLeft: '15px',
      lineHeight: '1.2',
    },
    infoParagraph: {
      fontSize: '1.1rem',
      lineHeight: '1.6',
      marginBottom: '15px',
      color: '#555',
    },
    menuItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px 0',
      borderBottom: '1px solid #eee',
      '&:lastChild': {
        borderBottom: 'none',
      },
    },
    menuItemName: {
      fontSize: '1.3rem',
      fontWeight: '600',
    },
    menuItemPrice: {
      fontSize: '1.2rem',
      color: '#666',
      fontWeight: '500',
    },
    backButtonContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        padding: '30px 0',
    },
    backButton: {
      backgroundColor: '#ff5a5f',
      color: '#fff',
      padding: '15px 30px',
      fontSize: '1.1rem',
      fontWeight: '600',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease, transform 0.2s ease',
      boxShadow: '0 4px 10px rgba(255, 90, 95, 0.3)',
      '&:hover': {
        backgroundColor: '#e04a4e',
        transform: 'translateY(-2px)',
      },
      '&:active': {
        transform: 'translateY(0)',
      },
    },
    notFoundContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f8f8f8',
        fontFamily: 'Roboto, sans-serif',
        color: '#333',
        textAlign: 'center',
        padding: '20px',
    },
    notFoundTitle: {
        fontSize: '3rem',
        fontWeight: '700',
        color: '#ff5a5f',
        marginBottom: '30px',
    }
  };

  return (
    <div style={styles.pageContainer}>
      <style>{styles.globalBodyStyle}</style> {/* Apply global body styles */}

      <div style={styles.heroSection}>
        <div style={styles.heroOverlay}>
          <h1 style={styles.heroTitle}>{name}</h1>
          <p style={styles.heroCuisines}>{cuisines.join(", ")}</p>
        </div>
      </div>

      <div style={styles.detailsCard}>
        <div style={styles.detailItem}>
          <div style={styles.detailLabel}>Rating</div>
          <div style={styles.detailValue}>⭐ {avgRating} ({totalRatingsString})</div>
        </div>
        <div style={styles.detailItem}>
          <div style={styles.detailLabel}>Cost for Two</div>
          <div style={styles.detailValue}>{costForTwo}</div>
        </div>
        <div style={styles.detailItem}>
          <div style={styles.detailLabel}>Delivery Time</div>
          <div style={styles.detailValue}>{sla.slaString}</div>
        </div>
        <div style={styles.detailItem}>
          <div style={styles.detailLabel}>Availability</div>
          <div style={styles.detailValue}>
            {restaurant.info.isOpen ? "Open" : "Closed"}
            {restaurant.info.isOpen && ` until ${new Date(restaurant.info.availability.nextCloseTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`}
          </div>
        </div>
      </div>

      <div style={styles.mainContent}>
        <h2 style={styles.sectionTitle}>About {name}</h2>
        <p style={styles.infoParagraph}>
          Experience the best of {name}'s culinary delights. Specializing in {cuisines.join(', ')}, we offer a unique blend of flavors crafted with passion and the freshest ingredients. Perfect for a quick bite or a memorable dining experience.
        </p>

        <h2 style={styles.sectionTitle}>Our Menu</h2>
        <ul style={{ listStyle: 'none', padding: '0' }}>
          {/* Placeholder for menu items. In a real app, this would be dynamic data. */}
          <li style={styles.menuItem}>
            <span style={styles.menuItemName}>Chef's Special Pasta</span>
            <span style={styles.menuItemPrice}>₹350</span>
          </li>
          <li style={styles.menuItem}>
            <span style={styles.menuItemName}>Signature Burger</span>
            <span style={styles.menuItemPrice}>₹280</span>
          </li>
          <li style={styles.menuItem}>
            <span style={styles.menuItemName}>Classic Margherita Pizza</span>
            <span style={styles.menuItemPrice}>₹420</span>
          </li>
          <li style={styles.menuItem}>
            <span style={styles.menuItemName}>Fresh Garden Salad</span>
            <span style={styles.menuItemPrice}>₹200</span>
          </li>
          <li style={styles.menuItem}>
            <span style={styles.menuItemName}>Decadent Chocolate Cake</span>
            <span style={styles.menuItemPrice}>₹180</span>
          </li>
        </ul>
      </div>

      <div style={styles.backButtonContainer}>
        <button style={styles.backButton} onClick={() => navigate('/')}>
          Order Something Else / Back to Home
        </button>
      </div>
    </div>
  );
};

export default RestrauMenuPage;