import React, { Component } from 'react';
import './tooltip.scss';

export class Tooltip extends Component {
  render() {
    return (
      <div className="tooltip">
        {this.props.children}
      </div>
    )
  }
}
