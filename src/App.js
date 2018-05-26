import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Otp } from 'components/Otp';
import { Wallet } from 'components/Wallet';

class App extends Component {

  render() {
    return (
      <div className="App">
        { this.props.isOtpValid ? <Wallet /> : <Otp /> }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
	isOtpValid: state.isOtpValid
});
export default connect(mapStateToProps)(App);
