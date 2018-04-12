import React from 'react';
export const Checkbox = (props) => (
  <input
    type="checkbox"
    value={props.value}
    onChange={props.onChange}
  />
);
