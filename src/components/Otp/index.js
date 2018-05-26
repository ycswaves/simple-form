import React, { Component } from 'react';
import { Titlebar } from 'components/Titlebar';
import './otp.scss';
import { Pin } from './Pin';
import { Timer } from './Timer';

export class Otp extends Component {
  state = {
    misMatch: false,
    requesting: false,
  }

  timeout = () => {
    this.setState({requesting: false});
  }
  
  startTimer = () => {
    this.setState({requesting: true});
  }

  render() {
    return (
      <div className="otp-page">
        <Titlebar title="Activate via OTP" />
        <p className="otp-page__instruction">
          Enter the 4-digit code sent to <br/>
          +62 81281231234
        </p>
        <Pin size={4} />
        <div className="otp-page__resend">
          <p>Didn't receive it?</p>
          {
            this.state.requesting ? 
            <Timer timeout={this.timeout} /> : <a onClick={this.startTimer}>Request New Code</a>
          }
        </div>
      </div>
    )
  }
}
