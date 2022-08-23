import React from 'react';
import './btn.scss';

const BareBtn = ({ text, action, width, height }) => {
  return (
    <button
      className='bare-btn'
      style={{ width: width, height: height }}
      onClick={action}
    >
      {text}
    </button>
  );
};

export default BareBtn;
