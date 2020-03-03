import React, { PureComponent, createRef } from 'react';
import { connect } from 'react-redux';
import { coinmarketcapActions } from '../../../store/rootActions';
import coin from '../../../assets/images/dashboard/bitcoin.svg';
import { createChart } from 'lightweight-charts';
import { isEqual } from 'lodash';
import styled from 'styled-components';
import { SmallDropdown } from '../../../components/form/SmallDropdown';
import { chartTypes } from '../../../config/constants';

export class TradingViewLayout extends PureComponent {
  static defaultProps = {
    containerId: 'lightweight_chart_container',
  };

  chartTypes = [
    { label: 'Candlestick', value: chartTypes.Candlestick },
    { label: 'Range', value: chartTypes.Bars },
    { label: 'Line', value: chartTypes.Line },
  ];

  chart = null;
  mainSeries = null;
  volumeSeries = null;
  chartContainer = createRef();

  componentDidMount() {
    this.seriesTypes = {
      [chartTypes.Candlestick]: this.addCandlesticksSeries,
      [chartTypes.Bars]: this.addBarSeries,
      [chartTypes.Line]: this.addLineSeries,
    };

    this.seriesData = {
      [chartTypes.Candlestick]: this.mapDataToOHLCV,
      [chartTypes.Bars]: this.mapDataToOHLCV,
      [chartTypes.Line]: this.mapDataToLine,
    };
  }

  componentDidUpdate(prevProps) {
    const { quotes, markets, currentTab } = this.props;

    if (
      prevProps.currentTab !== currentTab ||
      prevProps.markets[currentTab].chartType !== markets[currentTab].chartType
    ) {
      this.createChart();
    }

    if (!isEqual(prevProps.quotes, quotes)) {
      this.updateChartData();
    }

    this.updateChartSize();
  }

  createChart = () => {
    const { markets, currentTab } = this.props;

    if (this.chart) {
      this.chart.remove();
      this.chart = null;
      this.mainSeries = null;
      this.volumeSeries = null;
    }

    const chart = createChart(this.props.containerId, {
      width: 0,
      height: 400,
      layout: {
        backgroundColor: '#22305A',
        textColor: 'rgba(255, 255, 255, 0.5)',
      },
    });

    const volumeSeries = chart.addHistogramSeries({
      color: 'rgba(255,255,255, 0.5)',
      priceFormat: {
        type: 'volume',
      },

      overlay: true,
      scaleMargins: {
        top: 0.85,
        bottom: 0,
      },
    });

    this.chart = chart;
    this.volumeSeries = volumeSeries;

    this.mainSeries = this.seriesTypes[markets[currentTab].chartType]();

    this.getHistorical();
  };

  getHistorical = () => {
    const {
      getHistoricalOHLCV,
      getHistoricalQuotes,
      markets,
      currentTab,
    } = this.props;

    if (markets[currentTab].chartType === chartTypes.Line)
      getHistoricalQuotes({ id: markets[currentTab].currency || 1 });
    else getHistoricalOHLCV({ id: markets[currentTab].currency || 1 });
  };

  updateChartSize = () => {
    if (this.chartContainer.current)
      this.chart.resize(400, this.chartContainer.current.clientWidth);
  };

  mapDataToOHLCV = () => {
    const { quotes } = this.props;
    return quotes.map(({ quote }) => {
      return {
        time: quote.USD.timestamp,
        open: quote.USD.open,
        high: quote.USD.high,
        low: quote.USD.low,
        close: quote.USD.close,
      };
    });
  };

  mapDataToLine = () => {
    const { quotes } = this.props;
    return quotes.map(({ quote }) => {
      return {
        time: quote.USD.timestamp,
        value: quote.USD.price,
      };
    });
  };

  updateChartData = () => {
    const { markets, currentTab, quotes } = this.props;
    const newData = this.seriesData[markets[currentTab].chartType]();
    console.log('newData', markets[currentTab].chartType);
    let volumeData = quotes.map(({ quote }) => {
      return {
        time: quote.USD.timestamp,
        value: quote.USD.high || quote.USD.price,
      };
    });

    this.mainSeries.setData(newData);
    this.volumeSeries.setData(volumeData);
  };

  addCandlesticksSeries = () =>
    this.chart.addCandlestickSeries({
      upColor: '#4EED34',
      downColor: '#ED4A34',
      borderDownColor: '#ED4A34',
      borderUpColor: '#4EED34',
      wickDownColor: '#FFFFFF',
      wickUpColor: '#FFFFFF',
    });

  addBarSeries = () =>
    this.chart.addBarSeries({
      thinBars: true,
      downColor: '#4EED34',
      upColor: '#ED4A34',
    });

  addLineSeries = () => this.chart.addLineSeries({});

  onChangeTabSeries = (data) => {
    const { updateMarketTab, currentTab } = this.props;
    updateMarketTab({ id: currentTab, chartType: data.value });
  };

  render() {
    return (
      <Styled.Wrapper ref={this.chartContainer}>
        <Styled.Header>
          <Styled.Coin src={coin} alt="coin" />
          <Styled.CoinName>40.021325</Styled.CoinName>
          <Styled.CoinPeriod>24h volume</Styled.CoinPeriod>
          <SmallDropdown
            options={this.chartTypes}
            value={this.chartTypes[1]}
            onChange={this.onChangeTabSeries}
          />
          <Styled.ChartType>Market chart</Styled.ChartType>
          <Styled.ChartType>Depth chart</Styled.ChartType>
        </Styled.Header>
        <div id={this.props.containerId} className={'LightweightChart'} />
      </Styled.Wrapper>
    );
  }
}

const Styled = {
  Wrapper: styled.div``,
  Header: styled.div`
    min-height: 44px;
    display: flex;
    align-items: center;
    padding: 6px 45px;
    background: #141e36;
  `,
  Coin: styled.img``,
  CoinName: styled.span`
    margin-left: 6px;
    font-size: 14px;
    line-height: 18px;
    color: #ffffff;
    font-weight: 600;
  `,
  CoinPeriod: styled.span`
    margin-left: 10px;
    font-size: 12px;
    line-height: 15px;
    color: #ffffff;
    opacity: 0.5;
  `,
  ChartType: styled.div`
    cursor: pointer;
    position: relative;
    padding: 4px 0px;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: #ffffff;

    &:first-of-type {
      margin-left: auto;
    }

    &:not(:first-of-type) {
      margin-left: 20px;
    }

    &::after {
      position: absolute;
      bottom: 0;
      right: 50%;
      transform: translateX(50%);
      content: '';
      width: 50px;
      height: 1px;
      background-color: #de5118;
    }
  `,
};

export const TradingView = connect(
  (state) => ({
    quotes: state.coinmarketcap.historical.quotes,
    currentTab: state.coinmarketcap.currentTab,
    currencyMap: state.coinmarketcap.currencyMap,
    markets: state.coinmarketcap.markets,
  }),
  {
    getHistoricalOHLCV: coinmarketcapActions.getHistoricalOHLCV,
    getHistoricalQuotes: coinmarketcapActions.getHistoricalQuotes,
    updateMarketTab: coinmarketcapActions.updateMarketTab,
  }
)(TradingViewLayout);
