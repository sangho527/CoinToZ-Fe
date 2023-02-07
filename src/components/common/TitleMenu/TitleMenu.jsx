import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userState } from '../../../functions/GlobalState';
import AccountPopover from './profileSelect';


const TitleMenu = () => {
  const navigate = useNavigate();

  const user = useRecoilValue(userState);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand style={{ margin: '10px' }}>
          <Nav.Link onClick={() => { navigate('/') }}>
            CoinOne
          </Nav.Link>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => { navigate('/upbitMainPage') }}>거래소</Nav.Link>
          <Nav.Link onClick={() => { navigate('/diary') }}>매매 일지</Nav.Link>
          <Nav.Link onClick={() => { navigate('/test') }}>커뮤니티</Nav.Link>
        </Nav>
        <Nav style={{ margin: '10px' }}>
          {user ? (
            <>
              <AccountPopover />
            </>
          ) : (
            <>
              <Nav.Link onClick={() => { navigate('/join') }}>회원가입</Nav.Link>
              <Nav.Link onClick={() => { navigate('/login') }}>로그인</Nav.Link>
            </>)}
        </Nav>
      </Navbar>
    </>
  );
};

export default TitleMenu;