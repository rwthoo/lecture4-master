import React from 'react';
import './button.css';

export const Button = (props) => (
  <button className={'button ' + props.className}>{props.children}</button>
);
