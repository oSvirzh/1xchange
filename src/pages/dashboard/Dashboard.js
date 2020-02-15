import React, { PureComponent, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Header from '../../components/layout/dashboard/Header';
import { Markets } from './components/Markets';
import styled from 'styled-components';
import OrderBook from '../../components/layout/dashboard/OrderBook.';
import TradeHistory from '../../components/layout/dashboard/TradeHistory';
import OpenOrders from '../../components/layout/dashboard/OpenOrders';
import Modal from '../../components/elements/modal/SelectCurrency';
import { coinmarketcapActions } from '../../store/rootActions';
import { TradingView } from './components/TradingView';
import MakeOrder from '../../components/layout/dashboard/MakeOrder';

const instance = axios.create({
  baseURL: 'https://sandbox-api.coinmarketcap.com/v1',
  timeout: 1000,
  headers: { 'X-CMC_PRO_API_KEY': '128470e3-649c-49bb-920b-aca73ef611d5' },
});

export class DashboardLayout extends PureComponent {
  state = {
    data: [
      [
        '2019-08-18T23:59:59.999Z',
        10233.0062966,
        10487.070244,
        10119.0946079,
        10345.8103795,
      ],
    ],
  };

  get chartOptions() {
    return {
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
          data: this.state.data,
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
    };
  }

  render() {
    return (
      <Styled.Container>
        <Header />
        <Modal isShowed />
        <Markets />
        <Styled.Body>
          <OrderBook />
          <Styled.TradingView>
            <TradingView currencyId="1" />
            <OpenOrders />
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
    flex: 1 0 auto;
  `,
};

export const Dashboard = connect(
  (state) => ({
    quotes: state.coinmarketcap.historical.quotes,
  }),
  {
    getHistorical: coinmarketcapActions.getHistorical,
  }
)(DashboardLayout);
