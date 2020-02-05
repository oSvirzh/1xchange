import React, { PureComponent } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highstock';
import { connect } from 'react-redux';
import { actions } from '../../store/auth/actions';
import Header from '../../components/layout/dashboard/Header';
import styled from 'styled-components';
import TradeHistory from '../../components/layout/dashboard/TradeHistory';

import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://sandbox-api.coinmarketcap.com/v1',
  timeout: 1000,
  headers: { 'X-CMC_PRO_API_KEY': '128470e3-649c-49bb-920b-aca73ef611d5' },
});

export class DashboardLayout extends PureComponent {
  state = {
    chartOptions: {
      rangeSelector: {
        selected: 1,
      },

      title: {
        text: 'AAPL Stock Price',
      },

      series: [
        {
          type: 'candlestick',
          name: 'AAPL Stock Price',
          showInNavigator: false,
          data: [
            [1517581800000, 166, 166.8, 160.1, 160.5],
            [1517841000000, 159.1, 163.88, 156, 156.49],
            [1517927400000, 154.83, 163.72, 154, 163.03],
          ],
          dataGrouping: {
            units: [
              [
                'week', // unit name
                [1], // allowed multiples
              ],
              ['month', [1, 2, 3, 4, 6]],
            ],
          },
        },
      ],
    },
  };

  componentDidMount() {
    instance
      .get('/cryptocurrency/ohlcv/historical', {
        params: {
          id: 1,
          time_start: '2019-08-18T00:00:00.000Z',
          time_end: new Date(),
        },
      })
      .then(({data}) => {
        this.setState({
          options: {
            series: [
              {
                data: [],
              },
            ],
          },
        });
      })
      .catch(console.log);
  }

  render() {
    return (
      <Styled.Container>
        <Header />

        <Styled.Body>
          <Styled.TradingView>
            <HighchartsReact
              highcharts={Highcharts}
              options={this.state.chartOptions}
              constructorType="stockChart"
            />{' '}
          </Styled.TradingView>
          <TradeHistory />
        </Styled.Body>
      </Styled.Container>
    );
  }
}

const Styled = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    background: linear-gradient(
      325.95deg,
      #101728 -143.03%,
      #11192b -3.81%,
      #15213d 58.69%,
      #0c1834 131.65%
    );
    background-size: contain;
  `,
  Body: styled.div`
    display: flex;
  `,
  TradingView: styled.div`
    width: 100%;
  `,
};

export const Dashboard = connect(
  (state) => ({
    user: state.auth.user,
  }),
  { signOut: actions.signOut }
)(DashboardLayout);
