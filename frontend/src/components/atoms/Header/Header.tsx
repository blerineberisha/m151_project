import React from 'react'
import './Header.css'
import LoginIcon from '@mui/icons-material/Login';
import HomeIcon from '@mui/icons-material/Home';

const Header = () => {
  return (
    <div id="header">
      <a href="/">
        <HomeIcon id="home" className='icons' />
      </a>
      <a href="/login">
        <LoginIcon id="icon" className='icons' />
      </a>
    </div>
  )
}
export default Header;