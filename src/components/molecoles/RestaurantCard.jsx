import React from 'react';


const RestaurantCard = ({ title, tags, address, phone, website }) => {
  return (
    <div style={styles.card}>
      <h2 style={styles.title}>{title}</h2>
      <div style={styles.chips}>
        {tags.map((tag, index) => (
          <span key={index} style={styles.chip}>
            {tag}
          </span>
        ))}
      </div>
      <p style={styles.info}>
        {address} | {phone}
      </p>
      <div className='interaction__container' style={styles.interaction}>
        <a href={website} style={styles.link} target="_blank" rel="noopener noreferrer">
          Visit Website
        </a>
        <ZoomToButton />
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    maxWidth: '400px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    fontFamily: 'Poppins, sans-serif',
    margin: '10px auto',
    backgroundColor: '#fff',
  },
  interaction: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: '1.5rem',
    marginBottom: '10px',
    color: '#333',
  },
  chips: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
    marginBottom: '10px',
  },
  chip: {
    backgroundColor: '#ff6600',
    color: '#fff',
    padding: '5px 10px',
    borderRadius: '16px',
    fontSize: '0.9rem',
  },
  info: {
    fontSize: '1rem',
    color: '#555',
    marginBottom: '10px',
  },
  link: {
    fontSize: '1rem',
    color: '#007bff',
    textDecoration: 'none',
    fontWeight: 'bold',
  }
};

export default RestaurantCard;
