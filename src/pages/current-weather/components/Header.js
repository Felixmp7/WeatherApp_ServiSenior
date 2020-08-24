import React from 'react'
import PropTypes from 'prop-types'

const Header = ({title}) => {
  return (
    <header>
      <h1 style={{
        color: '#f2f2f2',
        marginBottom: 20
      }}>{title}</h1>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
