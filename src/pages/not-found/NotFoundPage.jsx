import React, { useEffect } from 'react';
import s from './NotFoundPage.module.css';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  useEffect(() => {
    document.title = '404 not found';
  }, []);

  return (
    <div className={s.page_container}>
      <h1 className={s.heading}>404 Not Found</h1>
      <p className={s.description}>
        Sorry, we couldn't find the page you're looking for !
      </p>
      <p className={s.link_container}>
        <Link to={`/`}> Go back home </Link>
      </p>
    </div>
  );
}

export default NotFoundPage;
