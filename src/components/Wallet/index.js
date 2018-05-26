import React, { Component } from 'react';
import { Header } from './Header';
import { Card } from 'components/Card';
import './wallet.scss';
export class Wallet extends Component {
  render() {
    return (
      <div className="wallet">
        <Header />
        <div className="wallet__container">
          <div className="overlap">
            <Card>
              <div className="ovo-topup">
                <img src="/images/ovo-topup-graphic.svg" alt="ovo-logo" />
                <div className="text">
                  Enjoy cashless payments and hassle-free rides!
                </div>
              </div>
              <hr />
              <div className="topup-link">Top Up Now</div>

            </Card>
            <div className="recent">
              <p className="title">Recent activity</p>
              <Card type="lower">
                <div className="tip">
                  <img src="/images/transaction.svg" alt="transaction" />
                  <p>Make a Transaction Today!</p>
                  <p className="tip__detail">
                    Your new transaction activity will appear here.
                  </p>
                </div>

              </Card>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
