import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/layout/dashboard/Header';
import { Markets } from './components/Markets';
import styled from 'styled-components';
import OrderBook from '../../components/layout/dashboard/OrderBook';
import TradeHistory from '../../components/layout/dashboard/TradeHistory';
import OpenOrders from '../../components/layout/dashboard/OpenOrders';
import Modal from '../../components/elements/modal/SelectCurrency';
import { TradingView } from './components/TradingView';
import MakeOrder from '../../components/layout/dashboard/MakeOrder';

export class DashboardLayout extends PureComponent {
  render() {
    return (
      <>
        <Header />
        <Modal isShowed />
        <Markets />
        <Styled.Body>
          <OrderBook />
          <Styled.TradingView>
            <TradingView />
            <Styled.Row>
              <MakeOrder />
              <OpenOrders />
            </Styled.Row>
          </Styled.TradingView>
          <TradeHistory />
        </Styled.Body>
      </>
    );
  }
}

const Styled = {
  Body: styled.div`
    display: flex;
  `,
  TradingView: styled.div`
    flex: 1 0 auto;
  `,
  Row: styled.div`
    display: flex;
  `,
};

export const Dashboard = connect((state) => ({}))(DashboardLayout);
