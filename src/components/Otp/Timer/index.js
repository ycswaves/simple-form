import React, { Component } from 'react';
import './timer.scss';

export class Timer extends Component {
  state = {
    seconds: this.props.count || 30
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      const { seconds } = this.state;
      if (seconds > 0) {
        this.setState({seconds: seconds - 1})
      } else {
        this.props.timeout();
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }
  
  render() {
    const { seconds } = this.state;

    return (
      <div className="timer">
        <p>
          Request New Code in <br />
          00:{seconds < 10 ? `0${seconds}` : seconds}
        </p>
      </div>
    )
  }
}
