import React from 'react';
import s from './Logo.module.css';

function Logo() {
  return (
    <div className={s.logo_container}>
      <p className={s.logo_text}>
        <span className='text-primary'>F</span>ind<span className='text-secondary'>AV</span>erse
      </p>
    </div>
  );
}

export default Logo;
