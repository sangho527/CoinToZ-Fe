import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userState } from '../../../functions/GlobalState';
import AccountPopover from './profileSelect';
import { Typography } from '@mui/material';


const TitleMenu = () => {
  const navigate = useNavigate();

  const user = useRecoilValue(userState);

  return (
    <>
      <Navbar bg="dark" variant="dark">
      <Typography
            variant="h6"
            noWrap
            component=""
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
        <Navbar.Brand style={{ margin: '10px' }}>
          <Nav.Link onClick={() => { navigate('/') }}>
            CoinOne
          </Nav.Link>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => { navigate('/upbitMainPage') }}>Exchange</Nav.Link>
          <Nav.Link onClick={() => { navigate('/diary') }}>TradingDiary</Nav.Link>
          <Nav.Link onClick={() => { navigate('/community') }}>Community</Nav.Link>
        </Nav>
        <Nav style={{ margin: '10px'}}>
          {user ? (
            <>
              <AccountPopover />
            </>
          ) : (
            <>
              <Nav.Link onClick={() => { navigate('/join') }}>Join</Nav.Link>
              <Nav.Link onClick={() => { navigate('/login') }}>Login</Nav.Link>
            </>)}
        </Nav>
      </Navbar>
    </>
  );
};

export default TitleMenu;