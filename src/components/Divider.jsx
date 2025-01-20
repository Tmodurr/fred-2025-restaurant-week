import React from 'react';

const Divider = () => {
  const dividerStyle = {
    border: 'none',
    borderTop: '1px dashed lightgray',
    width: '100%',
    height: '0',
    margin: '1rem 0',
    background: 'repeating-linear-gradient(to right, lightgray 0, lightgray 20px, transparent 5px)',
  };

  return <hr style={dividerStyle} />;
};

export default Divider;
