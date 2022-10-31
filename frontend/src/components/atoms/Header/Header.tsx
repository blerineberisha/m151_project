import React from 'react'
import './Header.css'
import LoginIcon from '@mui/icons-material/Login';
import HomeIcon from '@mui/icons-material/Home';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import FlagIcon from '@mui/icons-material/Flag';
import GroupIcon from '@mui/icons-material/Group';

const Header = () => {
  return (
    <div id="header">
      <a href="/">
        <HomeIcon id="home" className='icons' />
      </a>
      <a href="/login">
        <LoginIcon id="icon" className='icons' />
      </a>
      <a href="/all">
        <ImportContactsIcon id="icon" className='icons' />
      </a>
      <a href="/towns">
        <LocationCityIcon id="icon" className='icons' />
      </a>
      <a href="/countries">
        <FlagIcon id="icon" className='icons' />
      </a>
      <a href="/users">
        <GroupIcon id="icon" className='icons' />
      </a>
    </div>
  )
}
export default Header;