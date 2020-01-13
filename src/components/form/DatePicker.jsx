import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Dropdown } from './Dropdown';
import FormItem from "./FormItem";

export class DatePicker extends Component {
  constructor(props) {
    super(props);
    const { dayLabel, monthLabel, yearLabel, defaultDate } = props;

    this.state = {
      day: null,
      month: null,
      year: null,
      selectDay: defaultDate ? moment(defaultDate).date() : dayLabel,
      selectMonth: defaultDate ? moment(defaultDate).month() + 1 : monthLabel,
      selectYear: defaultDate ? moment(defaultDate).year() : yearLabel,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.state.selectDay !== nextState.selectDay ||
      this.state.selectMonth !== nextState.selectMonth ||
      this.state.selectYear !== nextState.selectYear
    );
  }

  componentWillMount() {
    let day = [],
      month = [],
      year = [];

    const pad = (n) => {
      return n < 10 ? '0' + n : n;
    };

    for (let i = 1; i <= 31; i++) {
      day.push(this.props.padDay ? pad(i) : i);
    }

    let monthIndex = 1;
    for (const monthName of moment.localeData().months()) {
      month.push(this.props.padMonth ? pad(monthIndex) : monthName);
      monthIndex++;
    }

    for (let i = this.props.maxYear; i >= this.props.minYear; i--) {
      year.push(i);
    }

    this.setState({
      day: day,
      month: month,
      year: year,
    });
  }

  changeDate(value, type) {
    this.setState({
      [type]: value,
    });
    this.checkDate(value, type);
  }

  getDate(date) {
    if (moment(date).isValid()) {
      return moment(date).format();
    } else {
      return undefined;
    }
  }

  checkDate(value, type) {
    let { selectDay, selectMonth, selectYear } = this.state;

    if (type === 'selectDay') {
      selectDay = value;
    } else if (type === 'selectMonth') {
      selectMonth = value;
    } else if (type === 'selectYear') {
      selectYear = value;
    }

    if (this.isSelectedAllDropdowns(selectDay, selectMonth, selectYear)) {
      const dateObject = {
        year: selectYear,
        month: selectMonth - 1,
        day: selectDay,
      };
      this.props.dateChange(this.getDate(dateObject));
    } else {
      this.props.dateChange(undefined);
    }
  }

  isSelectedAllDropdowns(selectDay, selectMonth, selectYear) {
    if (selectDay === '' || selectMonth === '' || selectYear === '') {
      return false;
    }
    return (
      selectDay !== this.props.dayLabel &&
      selectMonth !== this.props.monthLabel &&
      selectYear !== this.props.yearLabel
    );
  }

  mapValue = (values) => {
    return values.map((item) => ({ value: item, label: item }));
  };

  render() {
    const { day, month, year } = this.state;
    const mapedValues = {
      days: this.mapValue(day),
      months: this.mapValue(month),
      years: this.mapValue(year),
    };

    return (
      <FormItem {...this.props}>
        <Styled.Wrapper>
          <Styled.Dropdown>
            <Dropdown
              value={mapedValues.days[0]}
              onChange={({ value }) => this.changeDate(value, 'selectDay')}
              options={mapedValues.days}
            />
          </Styled.Dropdown>
          <Styled.Dropdown>
            <Dropdown
              value={mapedValues.months[0]}
              onChange={({ value }) => this.changeDate(value, 'selectMonth')}
              options={mapedValues.months}
            />
          </Styled.Dropdown>
          <Styled.Dropdown>
            <Dropdown
              value={mapedValues.years[0]}
              onChange={({ value }) => this.changeDate(value, 'selectYear')}
              options={mapedValues.years}
            />
          </Styled.Dropdown>
        </Styled.Wrapper>
      </FormItem>
    );
  }
}

DatePicker.propTypes = {
  dateChange: PropTypes.func,
  dayLabel: PropTypes.string,
  defaultDate: PropTypes.string,
  maxYear: PropTypes.number,
  minYear: PropTypes.number,
  mode: PropTypes.string,
  monthLabel: PropTypes.string,
  padDay: PropTypes.bool,
  padMonth: PropTypes.bool,
  selectDay: PropTypes.string,
  selectMonth: PropTypes.string,
  selectYear: PropTypes.string,
  useMonthNames: PropTypes.bool,
  yearLabel: PropTypes.string,
};

DatePicker.defaultProps = {
  dayLabel: 'day',
  minYear: 1916,
  maxYear: 2017,
  monthLabel: 'month',
  padDay: false,
  padMonth: true,
  selectDay: '',
  selectMonth: '',
  selectYear: '',
  yearLabel: 'year',
  useMonthNames: false,
};

const Styled = {
  Wrapper: styled.div`
    display: flex;
    width: 100%;
  `,
  Dropdown: styled.div`
    flex: 1;
    &:not(:first-child) {
      margin-left: 18px;
    }
  `,
};
