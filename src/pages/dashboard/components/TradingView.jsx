import React, { PureComponent } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highstock';
import { connect } from 'react-redux';
import axios from 'axios';
import { coinmarketcapActions } from '../../../store/rootActions';

const instance = axios.create({
  baseURL: 'https://sandbox-api.coinmarketcap.com/v1',
  timeout: 1000,
  headers: { 'X-CMC_PRO_API_KEY': '128470e3-649c-49bb-920b-aca73ef611d5' },
});

export class TradingViewLayout extends PureComponent {
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

  componentDidMount() {
    this.props.getHistorical({ id: this.props.currencyId || 1 });
  }

  componentDidUpdate(prevProps) {
    const { quotes } = this.props;

    if (prevProps.quotes.length !== quotes.length) {
      let newData = quotes.map(({ quote }) => {
        return [
          quote.USD.timestamp,
          quote.USD.open,
          quote.USD.high,
          quote.USD.low,
          quote.USD.close,
        ];
      });

      this.setState({
        data: newData,
      });
    }
  }

  render() {
    return (
      <HighchartsReact
        highcharts={Highcharts}
        options={this.chartOptions}
        constructorType="stockChart"
      />
    );
  }
}

export const TradingView = connect(
  (state) => ({
    quotes: state.coinmarketcap.historical.quotes,
  }),
  {
    getHistorical: coinmarketcapActions.getHistorical,
  }
)(TradingViewLayout);
