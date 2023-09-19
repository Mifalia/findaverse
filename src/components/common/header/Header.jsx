import React from 'react';
import { Link } from 'react-router-dom';
import s from './Header.module.css';

// components import
import Logo from '../logo/Logo';
import { AiOutlineGithub } from 'react-icons/ai';
import { MdOutlineLightMode } from 'react-icons/md';

function Header() {
  return (
    <header className={s.header_container}>
      <div className={s.header_content}>
        <Link to={`/`}>
          <Logo />
        </Link>
        <p className={s.button_group}>
          <a href='#'>
            <AiOutlineGithub size={40} className={s.button} />
          </a>
          <MdOutlineLightMode size={40} className={s.button} />
        </p>
      </div>
    </header>
  );
}

export default Header;
