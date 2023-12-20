import React from 'react'

const Header = ({ title }) => {
  const headerStyle = {
    backgroundColor: 'blue',
    color: '#fff'
  } 

  return (
    <header style={headerStyle}>
        <h1>{title}</h1>
    </header>
  )
}

Header.defaultProps = {
  title:'Default title'
}

export default Header