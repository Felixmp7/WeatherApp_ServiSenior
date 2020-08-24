import React from "react";
import PropTypes from "prop-types";
import './index.css'

const EditCustomerPage = ({ customerName, dni, age }) => {
  return (
    <div className="containerEditCustomer">
      <div className="modal">
        <h2>Edición del Cliente</h2>
        <div>
          <strong>Nombre:</strong>
          <i>{customerName}</i>
        </div>
        <div>
          <strong>DNI:</strong>
          <i>{dni}</i>
        </div>
        <div>
          <strong>Age:</strong>
          <i>{age}</i>
        </div>
      </div>
    </div>
  );
};

EditCustomerPage.propTypes = {
  customerName: PropTypes.string.isRequired,
  dni: PropTypes.string.isRequired,
  age: PropTypes.string,
};

export default EditCustomerPage;
