import React from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import mainPageBackgroundImage from '../../../assets/mainpage/mainpage_background_image.jpg'
import styles from "./MainPage.css";


function MainPage() {

    const styles = {
      main_chart: {
        backgroundColor: '#5784DB',
        color: 'white',
        height: '210px',
        '&:hover': {
          backgroundColor: '#5784DB',
          opacity: '0.9'
        },
        '&:active': {
          backgroundColor: '#5784DB',
          opacity: '0.7'
        }
      },
      main_trade: {
        backgroundColor: '#13358E',
        color: 'white',
        height: '100%',
        '&:hover': {
          backgroundColor: '#13358E',
          opacity: '0.9'
        },
        '&:active': {
          backgroundColor: '#13358E',
          opacity: '0.7'
        }
      },
      main_community: {
        backgroundColor: '#41A1D8',
        color: 'white',
        height: '100%',
        '&:hover': {
          backgroundColor: '#41A1D8',
          opacity: '0.9'
        },
        '&:active': {
          backgroundColor: '#41A1D8',
          opacity: '0.7'
        }
      },
      main_background: {
        backgroundImage: `url(${mainPageBackgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '99.3vw',
        height: '89.5vh',
        opacity: '0.3'
      },
      main_background_color: {
        backgroundColor: 'blue',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%',
        opacity: '0.5'
      },
      main_text_on_image: {
        color: 'black',
        position: 'absolute',
        right: '10%',
        left: '10%',
        bottom: '35%'
      }
    };

    const Item = styled(Paper)(({ theme }) => ({
      ...theme.typography.body2,
      padding: theme.spacing(1),
      justifyItems: 'center',
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }));

    return (
        <>
            <div style={styles.main_background}>
              <div style={styles.main_background_color}/>
            </div>
            <div style={styles.main_text_on_image}>

              <div className="mainFont">Z세대들을 위한 커뮤니티 기반 가상화폐 관리 서비스</div>
              <div className="mainFont2">자신의 거래 수익률 확인, 매매일지 작성을 통해 슬기로운 투자를 할 수 있도록 도와주는 맞춤형 투자관리 홈페이지입니다.</div>
              <div className="mainFont3"><a href="payment">GET STARTED NOW</a></div>

            </div>
            <div>
              <Grid container spacing={0}>
                <Grid item xs={12} sm={6} md={4}>
                  <a href="upbitMainPage">
                    <Item sx={styles.main_chart}>
                      <br></br><br></br><br></br><br></br>
                      <h4 style={{ textAlign: 'center' }}><a href="upbitMainPage">실시간 차트</a></h4>
                    </Item>
                  </a>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <a href="payment">
                    <Item sx={styles.main_trade}>
                      <br></br><br></br><br></br><br></br>
                      <h4 style={{ textAlign: 'center' }}><a href="payment">거래하기</a></h4>
                    </Item>
                  </a>

                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <a href="community">
                    <Item sx={styles.main_community}>
                      <br></br><br></br><br></br><br></br>
                      <h4 style={{ textAlign: 'center' }}><a href="community">커뮤니티</a></h4>
                    </Item>
                  </a>
                </Grid>
              </Grid>
            </div>
        </>
    );
}
export default MainPage;