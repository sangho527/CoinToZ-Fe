import React from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import mainPageBackgroundImage from '../../../assets/mainpage/mainpage_background_image.jpg'


function MainPage() {

    const styles = {
      item_chart: {
        backgroundColor: '#5784DB',
        color: 'white',
        height: '210px',
        '&:hover': {
          backgroundColor: '#5784DB',
          opacity: '0.7'
        }
      },
      item_trade: {
        backgroundColor: '#13358E',
        color: 'white',
        height: '100%',
        '&:hover': {
          backgroundColor: '#13358E',
          opacity: '0.7'
        }
      },
      item_community: {
        backgroundColor: '#41A1D8',
        color: 'white',
        height: '100%',
        '&:hover': {
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
      text_on_image: {
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
            <div style={styles.text_on_image}>
              <h1>홈페이지 소개글입니다</h1>
              <h3>홈페이지 소개글1</h3>
              <h3 style={{ color : 'blue', fontWeight: 'bold'}}><a href="#">실시간 차트</a></h3>
            </div>
            <div style={{margin: '0px'}}>
              <Grid container spacing={0}>
                <Grid item xs={12} sm={6} md={4}>
                  <Item sx={styles.item_chart}>
                    <br></br><br></br><br></br><br></br>
                    <h4 style={{ textAlign: 'center' }}><a href="#">실시간 차트</a></h4>
                  </Item>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Item sx={styles.item_trade}>
                    <br></br><br></br><br></br><br></br>
                    <h4 style={{ textAlign: 'center' }}><a href="#">거래하기</a></h4>
                  </Item>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Item sx={styles.item_community}>
                  <br></br><br></br><br></br><br></br>
                  <h4 style={{ textAlign: 'center' }}><a href="#">커뮤니티</a></h4>
                  </Item>
                </Grid>
              </Grid>
            </div>
        </>
    );
}
export default MainPage;
