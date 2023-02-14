import React , { useEffect, useState }from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import styles from "./Payment.css";
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { Button } from '@mui/material';
import styled from 'styled-components';
import Api from '../../../functions/customApi';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}


export default function PaymentTab() {
  const [value, setValue] = React.useState(0);
  const [market, setMarket] = useState([]);
  const theme = useTheme();

  useEffect(() => {
    axios.get('api/v1/upbit/getMarket') 
        .then((response) => {
          console.log(response)
          setMarket(response.data);
          // console.log(market);
        })
        .catch(function(error){
            console.log(error);
        })
  }, []);

  const Boxs = styled(Box)`
  padding-bottom: 40px !important;
`;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const orderData = {
      market: data.get('market'),
      ord_type: data.get('orderType'),
      price: data.get('price'),
      volume: data.get('volume'),
    };
    orderData.side = 'bid';

    {
      onhandlePost(orderData);
    }
    console.log(orderData);
  }

  const handleSubmit_2 = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const orderData = {
      market: data.get('market'),
      ord_type: data.get('orderType'),
      price: data.get('price'),
      volume: data.get('volume'),
    };
    orderData.side = 'ask';

    {
      onhandlePost_2(orderData);
    }
    console.log(orderData);
  }

  const onhandlePost = async (data) => {
    const { market, ord_type, price, side, volume } = data;
    const postData = { market, ord_type, price, side, volume };

    Api.post('/api/v1/upbit/order', postData)
        .then(response => {
            alert('매수가 완료되었습니다.');
            console.log("매수가 완료되었습니다" + postData);
        })
        .catch(error => {
          const message = JSON.parse(error.response.data.split(': ')[1])[0].error['message']
          console.log(message);
          alert(message);
        });
  };

  const onhandlePost_2 = async (data) => {
    const { market, ord_type, price, side, volume } = data;
    const postData = { market, ord_type, price, side, volume };

    Api.post('/api/v1/upbit/order', postData)
        .then(response => {
            alert('매도가 완료되었습니다.');
            console.log("매도가 완료되었습니다" + postData);
        })
        .catch(error => {
            const message = JSON.parse(error.response.data.split(': ')[1])[0].error['message']
            console.log(message);
            alert(message);
        });
  };

  

  const ordType = [
    {
      value: 'limit',
      label: '지정가 주문',
    }
    ,{
      value: 'price',
      label: '시장가 주문'
    }
  ];
  const ordType_2 = [
    {
      value: 'limit',
      label: '지정가 주문',
    }
    ,{
      value: 'market',
      label: '시장가 주문'
    }
  ];


  return (
    <Box sx={{width: '100%'}}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="매수" {...a11yProps(0)} />
          <Tab label="매도" {...a11yProps(1)} />
        </Tabs>
        <Boxs component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <FormControl>
        <TabPanel value={value} index={0} dir={theme.direction}>
          <div className={"request"}>
              <TextField
                id="outlined-select-currency"
                select
                label="order-type"
                name="orderType"
                defaultValue="market"
                helperText="주문 타입을 선택해주세요."
              >
                {ordType.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                id="outlined-select-currency"
                select
                label="market"
                name="market"
                defaultValue="KRW-BTC"
                helperText="마켓(코인)을 선택해주세요."
              >
                {market.map((option) => (
                  <MenuItem key={option.market} value={option.market}>
                    {option.korean_name} ({option.market})
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                id="filled-required"
                label="주문량"
                name="volume"
                defaultValue=""
                variant="filled"
              />

              <TextField
                required
                id="filled-required"
                label="주문가격"
                name="price"
                defaultValue="5000"
                variant="filled"
              />

          </div>
          <div>
            <Button 
              type="submit"
              className={"bottomButton"}>
              매수하기
            </Button>
              {/* <button className={"bottomButton"}
              onClick={post_order}>
                  매수하기
              </button> */}
          </div>
        </TabPanel>
        </FormControl>
        </Boxs>
        <Boxs component="form" noValidate onSubmit={handleSubmit_2} sx={{ mt: 3 }}>
        <FormControl>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <div className={"request"}>
              <TextField
                id="outlined-select-currency"
                select
                label="order-type"
                name="orderType"
                defaultValue="price"
                helperText="주문 타입을 선택해주세요."
              >
                {ordType_2.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                id="outlined-select-currency"
                select
                label="market"
                name="market"
                defaultValue="KRW-BTC"
                helperText="마켓(코인)을 선택해주세요."
              >
                {market.map((option) => (
                  <MenuItem key={option.market} value={option.market}>
                    {option.korean_name}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                id="filled-required"
                label="주문량"
                name="volume"
                defaultValue=""
                variant="filled"
              />

              <TextField
                required
                id="filled-required"
                label="주문가격"
                name="price"
                defaultValue=""
                variant="filled"
              />

          </div>
          <div>
            <Button 
              type="submit"
              className={"bottomButton"}>
              매도하기
            </Button>
              {/* <button className={"bottomButton"}
              onClick={post_order}>
                  매수하기
              </button> */}
          </div>
        </TabPanel>
        </FormControl>
        </Boxs>
        
    </Box>
  );
}