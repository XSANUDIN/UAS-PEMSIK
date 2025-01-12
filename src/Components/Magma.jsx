import React from 'react';
import ReactDOM from 'react-dom';

const Magma = () => {
  return (
    <div>
      <h1>Volcano Reports</h1>
      <iframe
        src="https://magma.esdm.go.id/"
        width="100%"
        height="600px"
        title="Volcano Report"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default Magma