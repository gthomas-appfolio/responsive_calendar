import { polyfill } from 'es6-promise';
polyfill();
import 'isomorphic-fetch';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import CalendarContainer from './containers/calendar_container';

import './app.css';

export default class ResponsiveCalendar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { store, options } = this.props;

    return (
      <Provider store={store}>
        <CalendarContainer {...options}/>
      </Provider>,
    );
  }
}
