import React from 'react';

const Statistics = ({ good, neutral, bad, total }) => (
  <div>
    <p>good:{good}</p>
    <p>neutral:{neutral}</p>
    <p>bad:{bad}</p>
    <p>total: {total}</p>
  </div>
);
export default Statistics;
