import React, { Component } from 'react';
import { Navbar } from 'components/Navbar';
import { Toast } from 'components/Toast';
import { Tooltip } from 'components/Tooltip';

import './header.scss';

export class Header extends Component {
  state = {
    showToast: true,
    showTip: false,
  }

  dismissToast = () => {
    this.setState({showToast: false, showTip: true});
  }
  render() {
    const { showTip, showToast } = this.state;
    return (
      <div className="wallet-header">
        <Navbar>
          <div>
            GrabPay<br /><span className="subtitle">by OVO</span>
          </div>
        </Navbar>
        <div className="tooltip-container">
        {showTip &&
          <Tooltip>
            <p>Check your payment methods here.</p>
          </Tooltip>}
        </div>
        {showToast && 
          <Toast dismiss={this.dismissToast}>
            <span className="wallet-activated-icon"/>
            <p className="wallet-activated-text">
              All set! You can start using your balance now.
            </p>
          </Toast>}
        <div className="balance">
          <span className="currency">idr</span>
          <span className="value">50.000</span>
          <span className="info" />
        </div>
        <div className="rewards">
          <span className="icon" />
          <span className="value">400 points</span>
          <span className="details" >&gt;</span>
        </div>
      </div>
    )
  }
}
