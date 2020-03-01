import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { colors } from '../../../styles/const';
import coin from '../../../assets/images/dashboard/bitcoin.svg';
import { Dropdown } from 'react-bootstrap';
import { connect } from 'react-redux';
import { coinmarketcapActions } from '../../../store/rootActions';
import { Button } from '../../../components/elements/buttons/Button';

class MarketsLayout extends Component {
  get Tabs() {
    const { currencyMap, markets, currentTab, setCurrentTab } = this.props;

    if (currencyMap.length === 0) return;

    return markets.map(({ currency }, index) => {
      return (
        <Styled.Market
          key={index}
          modifiers={[index === currentTab && 'active']}
          onClick={() => setCurrentTab(index)}
        >
          <Styled.MarketRow>
            <Dropdown>
              {index + 1}.
              <Styled.Coin src={coin} alt="coin" />
              <Styled.CoinName id="dropdown-basic">
                {currencyMap[currency].name}
              </Styled.CoinName>
              <Dropdown.Menu>{this.CurrencyList}</Dropdown.Menu>
            </Dropdown>
          </Styled.MarketRow>
          <Styled.MarketRow>
            <Styled.CoinCost>9400.00</Styled.CoinCost>
            <Styled.CoinRate>-2,5%</Styled.CoinRate>
          </Styled.MarketRow>
        </Styled.Market>
      );
    });
  }

  get CurrencyList() {
    const { currencyMap, updateMarketTab, currentTab } = this.props;
    if (currencyMap.length > 0)
      return currencyMap.map(({ id, name }) => {
        return (
          <Dropdown.Item
            key={id}
            onClick={() =>
              updateMarketTab({
                id: currentTab,
                currency: id,
              })
            }
          >
            {name}
          </Dropdown.Item>
        );
      });

    return null;
  }

  componentDidMount() {
    this.props.getCurrencyMap({ limit: 20 });
  }

  render() {
    const { addMarket } = this.props;
    return (
      <Styled.Wrapper>
        <Styled.Logo>Markets</Styled.Logo>
        <Styled.Markets>{this.Tabs}</Styled.Markets>
        <Button reverted cleanTopMargin onClick={() => addMarket()}>
          Add market
        </Button>
      </Styled.Wrapper>
    );
  }
}

const Modifiers = {
  active: () => css`
    background: rgba(58, 69, 97, 0.2);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.8);
    border-bottom: 2px solid #eda334;
  `,
};

const Styled = {
  Wrapper: styled.div`
    z-index: 3;
    padding: 0 20px;
    display: flex;
    align-items: center;
    background-color: ${colors.lightblue};
    //overflow: hidden;
  `,
  Logo: styled.div`
    margin-right: 20px;
    color: ${colors.white};
    font-size: 18px;
    line-height: 23px;
  `,
  Markets: styled.div`
    display: flex;
  `,
  Market: styled.div`
    padding: 15px 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    color: ${colors.white};

    ${applyStyleModifiers(Modifiers)};
  `,
  MarketRow: styled.div``,
  CoinName: styled(Dropdown.Toggle)`
    background: none;
    padding: 0;
    border: none;
    position: relative;
    margin-left: 6px;
    padding-right: 25px;

    &:after {
      content: '';
      position: absolute;
      right: 0px;
      width: 10px;
      height: 6px;
      top: 50%;
      transform: translateY(-50%);
      //background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNiIgdmlld0JveD0iMCAwIDEwIDYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDBMNSA2TDEwIDBIMFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=')
      //  no-repeat;
    }
  `,
  Coin: styled.img`
    margin-left: 6px;
  `,
  CoinCost: styled.span`
    font-size: 12px;
    line-height: 15px;
  `,
  CoinRate: styled.span`
    font-size: 12px;
    line-height: 15px;
    margin-left: 8px;
  `,
};

export const Markets = connect(
  (state) => ({
    currencyMap: state.coinmarketcap.currencyMap,
    markets: state.coinmarketcap.markets,
    currentTab: state.coinmarketcap.currentTab,
  }),
  {
    getCurrencyMap: coinmarketcapActions.getCurrencyMap,
    updateMarketTab: coinmarketcapActions.updateMarketTab,
    setCurrentTab: coinmarketcapActions.setCurrentTab,
    addMarket: coinmarketcapActions.addMarket,
  }
)(MarketsLayout);
