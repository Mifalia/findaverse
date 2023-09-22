import React from 'react';
import s from './Button.module.css';

function Button({ children, onClick = () => {} }) {
  return (
    <button className={s.button_container} onClick={() => onClick()}>
      {children}
    </button>
  );
}

export default Button;
