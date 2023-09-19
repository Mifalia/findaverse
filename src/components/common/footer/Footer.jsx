import React from 'react';
import s from './Footer.module.css';

function Footer() {
  return (
    <footer className={s.footer_container}>
      <p className={s.footer_text}>
        © Copyright 2023 - <span className={s.footer_text_highlight}>Mifalia Nathanaël</span> |
        All rights reserved |
      </p>
    </footer>
  );
}

export default Footer;
