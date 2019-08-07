import React, { Component } from 'react'
import storeProvider from './storeProvider';

class Timestamp extends Component {
  timeDisplay = timestamp => timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.timeDisplay(this.props.timeStamp) != this.timeDisplay(this.props.timeStamp)
    )
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('updating timesamp')
  }
  render() {
    return (
      <div>
        {this.props.timeStamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
      </div>
    )
  }
}

function extraProps(store) {
  return {
    timeStamp: store.getState().timestamp
    }
};

export default storeProvider(extraProps)(Timestamp);
