import React from 'react';
import s from './HomePage.module.css';

//components inmport
import Header from 'components/common/header/Header';
import Footer from 'components/common/footer/Footer';
import SearchBar from 'components/searchbar/SearchBar';

function HomePage() {
  return (
    <div className={s.page_container}>
      <Header />
      <div className={s.section_container}>
        <h1 className={s.title}>Welcome to Findaverse</h1>
        <p className={s.description}>
          Findaverse is simple web app for searching your fav songs lyrics
          online
        </p>
        <SearchBar />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
