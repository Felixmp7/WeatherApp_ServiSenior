import React from "react";
import PropTypes from "prop-types";
import './Footer.css'

const FooterActions = ({ children }) => {
  return <div className="containerFooter">{children}</div>;
};

FooterActions.propTypes = {
  children: PropTypes.node,
};

export default FooterActions;
