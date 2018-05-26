import React, { Component } from 'react';
import { Navbar } from 'components/Navbar'
import './header.scss';

export class Header extends Component {
  render() {
    return (
      <div className="wallet-header">
        <Navbar>
          <div>
            GrabPay<br /><span className="subtitle">by OVO</span>
          </div>
        </Navbar>
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
