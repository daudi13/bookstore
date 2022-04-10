/* eslint-disable react/prop-types */
import React from 'react';
import './progress.css';

const Progress = ({ chapter }) => {
  const style = {
    strokeDashoffset: `calc(200 - (200 * ${chapter})/100)`,
  };

  return (
    <div className="percentage">
      <svg>
        <circle cx="30" cy="30" r="30" />
        <circle className="percent" style={style} cx="30" cy="30" r="30" />
      </svg>
    </div>
  );
};

export default Progress;
