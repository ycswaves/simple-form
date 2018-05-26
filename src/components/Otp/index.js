import React, { Component } from 'react';
import { Titlebar } from 'components/Titlebar';
import './otp.scss';
import { Pin } from './Pin';

export class Otp extends Component {
  state = {
    misMatch: false
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
      </div>
    )
  }
}
