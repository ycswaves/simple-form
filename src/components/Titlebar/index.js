import React from 'react';
import './titlebar.scss';

export const Titlebar = (props) => {
  return (
    <div className="titlebar">
      <span className="titlebar__close">&#10005;</span>
      <div>{props.title}</div>
    </div>
  )
}
