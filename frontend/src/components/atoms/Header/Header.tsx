import React from 'react'
import './Header.css'
import LoginIcon from '@mui/icons-material/Login';
import HomeIcon from '@mui/icons-material/Home';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import FlagIcon from '@mui/icons-material/Flag';
import GroupIcon from '@mui/icons-material/Group';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    setOpen(false);
    window.location.href = "/"
    localStorage.removeItem('user');
  };
  if (localStorage.getItem('user') == null) {
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
        <a onClick={() => setOpen(true)}>
          <LocationCityIcon id="icon" className='icons' />
        </a>
        <a onClick={() => setOpen(true)}>
          <FlagIcon id="icon" className='icons' />
        </a>
        <a onClick={() => setOpen(true)}>
          <GroupIcon id="icon" className='icons' />
        </a>
        <a onClick={() => setOpen(true)}>
          <ShoppingCartIcon id="icon" className='icons' />
        </a>
        <Dialog
          open={open}
          keepMounted
          onClose={() => handleClose()}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{"Unauthorized :("}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Please login to access the data on this website.
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
    )
  }
  return (
    <>
      <div id="header">
        <a href="/">
          <HomeIcon id="home" className='icons' />
        </a>
        <a onClick={() => setOpen(true)}>
          <LoginIcon id="icon" className='icons' />
        </a>
        <Dialog
          open={open}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{"Logout"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Are you sure you want to log out?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>No</Button>
            <Button onClick={handleLogout}>Yes</Button>
          </DialogActions>
        </Dialog><a href="/all">
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
        <a href="/cart">
          <ShoppingCartIcon id="icon" className='icons' />
        </a>
      </div>
    </>
  )
}

export default Header;