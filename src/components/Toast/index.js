import React, { Component } from 'react';
import './toast.scss';

export class Toast extends Component {
  timer = null;

  state = {
    toBeDismissed: false
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.dismiss();
    }, 4000); //4s because toast appear with 1s delay
  }

  dismiss = () => {
    this.setState({toBeDismissed: true});
    setTimeout(this.props.dismiss, 301);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    const { toBeDismissed } = this.state;
    return (
      <div className={`toast ${toBeDismissed? 'toast-to-be-dismissed' : ''}`}>
        {this.props.children}
        <span className="toast__close" onClick={this.dismiss}>&#10005;</span>
      </div>
    )
  }
}
