import React from 'react'

const Header = (props) => {
  return (
    <div>
      <div className='logo'>{props.logotext}</div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Header
