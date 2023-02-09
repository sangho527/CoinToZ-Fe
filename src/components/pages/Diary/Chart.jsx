import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';
import Api from '../../../functions/customApi';


export default function Chart() {
  const theme = useTheme();
  const [revenue1, setRevenue1] = React.useState(0);
  const [revenue2, setRevenue2] = React.useState(0);
  const [revenue3, setRevenue3] = React.useState(0);
  const [revenue4, setRevenue4] = React.useState(0);
  const [revenue5, setRevenue5] = React.useState(0);
  const [revenue6, setRevenue6] = React.useState(0);
  const [revenue7, setRevenue7] = React.useState(0);
  const [revenue8, setRevenue8] = React.useState(0);

  React.useEffect(() => {
    Api.get('api/v1/diary/revenue', {
      params: {
        startTime: 0,
        endTime: 2
      }
    }).then(response => setRevenue1(response.data.result))
      .catch(error => { console.log("error") })
  }, [])

  React.useEffect(() => {
    Api.get('api/v1/diary/revenue', {
      params: {
        startTime: 3,
        endTime: 5
      }
    }).then(response => setRevenue2(response.data.result))
      .catch(error => { console.log("error") })
  }, [])



  React.useEffect(() => {
    Api.get('api/v1/diary/revenue', {
      params: {
        startTime: 6,
        endTime: 8
      }
    }).then(response => setRevenue3(response.data.result))
      .catch(error => { console.log("error") })
  }, [])


  React.useEffect(() => {
    Api.get('api/v1/diary/revenue', {
      params: {
        startTime: 9,
        endTime: 11
      }
    }).then(response => setRevenue4(response.data.result))
      .catch(error => { console.log("error") })
  }, [])


  React.useEffect(() => {
    Api.get('api/v1/diary/revenue', {
      params: {
        startTime: 12,
        endTime: 14
      }
    }).then(response => setRevenue5(response.data.result))
      .catch(error => { console.log("error") })
  }, [])


  React.useEffect(() => {
    Api.get('api/v1/diary/revenue', {
      params: {
        startTime: 15,
        endTime: 17
      }
    }).then(response => setRevenue6(response.data.result))
      .catch(error => { console.log("error") })
  }, [])


  React.useEffect(() => {
    Api.get('api/v1/diary/revenue', {
      params: {
        startTime: 18,
        endTime: 20
      }
    }).then(response => setRevenue7(response.data.result))
      .catch(error => { console.log("error") })
  }, [])


  React.useEffect(() => {
    Api.get('api/v1/diary/revenue', {
      params: {
        startTime: 21,
        endTime: 23
      }
    }).then(response => setRevenue8(response.data.result))
      .catch(error => { console.log("error") })
  }, [])

  // Generate Sales Data
  function createData(time, amount) {
    return { time, amount };
  }

  const data = [
    createData('00:00', 0),
    createData('03:00', revenue1),
    createData('06:00', revenue2),
    createData('09:00', revenue3),
    createData('12:00', revenue4),
    createData('15:00', revenue5),
    createData('18:00', revenue6),
    createData('21:00', revenue7),
    createData('24:00', revenue8),
  ];

  return (
    <React.Fragment>
      <Title>하루 수익률</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="time"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: 'middle',
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              수익률
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}