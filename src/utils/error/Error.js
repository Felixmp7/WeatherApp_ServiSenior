import React from 'react'
import './Error.css'

const Error = ({ message }) => {
  return (
      <h4 className="errorMessage">{message}</h4>
  );
};

export default Error;
