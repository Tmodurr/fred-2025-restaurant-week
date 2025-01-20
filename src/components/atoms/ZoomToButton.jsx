import React from 'react';
import { FaMapMarkedAlt } from "react-icons/fa";
import { MdOutlineDirections } from "react-icons/md";

const ZoomToButton = ({ onClick }) => {
  return (
    <div style={styles.container}>
      <FaMapMarkedAlt  style={styles.icon} onClick={onClick} />
      <MdOutlineDirections style={styles.icon} onClick={onClick} />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    padding: '10px',
    // border: '1px solid #ddd',
    // borderRadius: '8px',
    width: 'fit-content',
    // boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  icon: {
    fontSize: '24px',
    color: '#ff6600',
    paddingLeft: ".5rem",
  }
};

export default ZoomToButton;
