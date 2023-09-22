import React, { useEffect } from 'react';
import s from './PageLayout.module.css';

// components import
import Header from 'components/common/header/Header';
import Footer from 'components/common/footer/Footer';

function PageLayout({ children, pageTitle = 'Findaverse' }) {
  useEffect(() => {
    document.title = pageTitle.trim();
  });

  return (
    <div className={s.page_container}>
      <Header />
      <div className={s.main_section}>{children}</div>
      <Footer />
    </div>
  );
}

export default PageLayout;
