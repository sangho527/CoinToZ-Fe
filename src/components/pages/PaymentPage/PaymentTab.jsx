import * as React from 'react';
import {useState} from "react";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import styles from "./Payment.css";
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

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
  const [side, setSide] = useState('');
  const [ordType, setOrdType] = useState('');
  const [market, setMarket] = useState('');
  const [volume, setVolume] = useState('');
  const [price, setPrice] = useState('');
  const theme = useTheme();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const order = async () => {
    // axios
    //     .get('http://ec2-52-78-23-203.ap-northeast-2.compute.amazonaws.com:8080/getMarket', {
    //         // side: side,
    //         // ordType: ordType,
    //         // market: market,
    //         // volume: volume,
    //         // price: price,
    //     })
    //     .then(response => {
    //         console.log('User profile', response.data);
    //     })
    //     .catch(error => {
    //         console.log('주문이 취소되었습니다.', error.response.data);
    //     });
  }

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
        <TabPanel value={value} index={0} dir={theme.direction}>
        <div className={"request"}>
            <div className={"inputTitle"}>주문타입</div>
            <div className={"inputWrap"}>
                <input className={"input"}
                placeholder={"지정/시장/예약"}
                value={ordType}
                       onChange={(e)=>setOrdType(e.target.value)}
                />
            </div>

            <div className={"inputTitle"}>코인</div>
            <div className={"inputWrap"}>
                <input className={"input"}
                placeholder={"예) KRW=BTC"}
                value={market}
                       onChange={(e)=>setMarket(e.target.value)}
                />
            </div>

            <div className={"inputTitle"}>수량</div>
            <div className={"inputWrap"}>
                <input className={"input"}
                placeholder={"예) 1.00"}
                value={volume}
                       onChange={(e)=>setVolume(e.target.value)}
                />
            </div>

            <div className={"inputTitle"}>가격</div>
            <div className={"inputWrap"}>
                <input className={"input"}
                placeholder={"최소주문금액  5,000 KRW"}
                value={price}
                       onChange={(e)=>setPrice(e.target.value)}
                />
            </div>

        </div>
        <div>
            <button className={"bottomButton"}
            onClick={order}>
                매수하기
            </button>
        </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <div className={"request"}>
            <div className={"inputTitle"}>주문타입</div>
            <div className={"inputWrap"}>
                <input className={"input"}
                placeholder={"지정/시장/예약"}
                value={ordType}
                       onChange={(e)=>setOrdType(e.target.value)}
                />
            </div>

            <div className={"inputTitle"}>코인</div>
            <div className={"inputWrap"}>
                <input className={"input"}
                placeholder={"예) KRW=BTC"}
                value={market}
                       onChange={(e)=>setMarket(e.target.value)}
                />
            </div>

            <div className={"inputTitle"}>수량</div>
            <div className={"inputWrap"}>
                <input className={"input"}
                placeholder={"예) 1.00"}
                value={volume}
                       onChange={(e)=>setVolume(e.target.value)}
                />
            </div>

            <div className={"inputTitle"}>가격</div>
            <div className={"inputWrap"}>
                <input className={"input"}
                placeholder={"최소주문금액  5,000 KRW"}
                value={price}
                       onChange={(e)=>setPrice(e.target.value)}
                />
            </div>

        </div>
        <div>
            <button className={"bottomButton"}
            onClick={order}>
                매도하기
            </button>
        </div>
        </TabPanel>
    </Box>
  );
}