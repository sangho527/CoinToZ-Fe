import * as React from 'react';
import Title from './Title';
import Link from '@mui/material/Link';
import { ResponsivePie } from '@nivo/pie'
import { useNavigate } from 'react-router-dom';
import Api from '../../../functions/customApi';

export default function Deposits() {

  const navigate = useNavigate();

  const [bitCoinCnt,setBitCoinCnt] = React.useState(0);
  const [ethereumCnt,setEthereumCnt] = React.useState(0);
  const [rippleCnt,setRippleCnt] = React.useState(0);
  const [ADACnt,setADACnt] = React.useState(0);
  const [dogeCoinCnt,setDogeCoinCnt] = React.useState(0);
  const [etcCnt,setEtcCnt] = React.useState(0);


  const getCoinCount = async () => {
    await Api.get("/api/v1/diary/count")
      .then(function (response) {
        console.log(response.data.result)
        setBitCoinCnt(response.data.result.bitCoin);
        setEthereumCnt(response.data.result.ethereum);
        setRippleCnt(response.data.result.ripple);
        setADACnt(response.data.result.ada);
        setDogeCoinCnt(response.data.result.dogeCoin);
        setEtcCnt(response.data.result.etc);
      })
      .catch(function (err) {
        console.log(err);
        alert("코인 개수 조회 실패");
      })
  };

  React.useEffect(() => {
    getCoinCount();
  }, []);
  

  const data = [
    {
      "id": "비트코인",
      "label": "비트코인",
      "value": bitCoinCnt,
      "color": "hsl(309, 70%, 50%)"
    },
    {
      "id": "이더리움",
      "label": "이더리움",
      "value": ethereumCnt,
      "color": "hsl(124, 70%, 50%)"
    },
    {
      "id": "리플",
      "label": "리플",
      "value": rippleCnt,
      "color": "hsl(96, 70%, 50%)"
    },
    {
      "id": "에이다",
      "label": "에이다",
      "value": ADACnt,
      "color": "hsl(204, 70%, 50%)"
    },
    {
      "id": "도지코인",
      "label": "도지코인",
      "value": dogeCoinCnt,
      "color": "hsl(115, 70%, 50%)"
    },
    {
      "id": "기타",
      "label": "기타",
      "value": etcCnt,
      "color": "hsl(246, 100%, 50%)"
    }
  ];

  return (
    <React.Fragment>
      <Title>보유 코인</Title>
      <ResponsivePie
        data={data}
        margin={{ top: 20, right: 80, bottom: 30, left: 60 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: 'color',
          modifiers: [
            [
              'darker',
              0.2
            ]
          ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: 'color',
          modifiers: [
            [
              'darker',
              2
            ]
          ]
        }}
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            size: 4,
            padding: 1,
            stagger: true
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            rotation: -45,
            lineWidth: 6,
            spacing: 10
          }
        ]}
      
      />
      <div>
        <Link style={{float:'right'}} color="primary" onClick={()=>navigate('/test')}>
          자세히 보기
        </Link>
      </div>
    </React.Fragment>
  );
}