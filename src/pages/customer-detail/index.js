import React from 'react'
import PropTypes from 'prop-types'

const ContactDetails = ({clientName, dni, age}) => {
  return (
    <div className="containerContactDetails">
      <h2>Datos del Cliente</h2>
      <div>
        <strong>Nombre:</strong>
        <i>{clientName}</i>
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
  )
}

ContactDetails.propTypes = {
  clientName: PropTypes.string.isRequired,
  dni: PropTypes.string.isRequired,
  age: PropTypes.string,
}

export default ContactDetails
