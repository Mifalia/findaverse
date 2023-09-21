import React from 'react';
import s from './Header.module.css';

// components import
import { Link } from 'react-router-dom';
import { AiOutlineGithub } from 'react-icons/ai';
import { MdOutlineLightMode } from 'react-icons/md';
import Logo from '../logo/Logo';

function Header() {
  const githubLink = process.env.REACT_APP_GITHUB_REPO;

  return (
    <header className={s.header_container}>
      <div className={s.header_content}>
        <Link to={`/`}>
          <Logo />
        </Link>
        <p className={s.button_group}>
          <a href={githubLink}>
            <AiOutlineGithub size={40} className={s.button} />
          </a>
          <MdOutlineLightMode size={40} className={s.button} />
        </p>
      </div>
    </header>
  );
}

export default Header;
