import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import s from './SearchPage.module.css';

// services and utils import
import SongsStore from 'store/SongsStore';

// components import
import Footer from 'components/common/footer/Footer';
import Header from 'components/common/header/Header';
import SearchBar from 'components/searchbar/SearchBar';
import SearchItemsList from 'components/search/search-items-list/SearchItemsList';

function SearchPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const q = searchParams.get('q');

  const searchBarOnSubmit = (value) => navigate(`/search/?q=${value}`);

  useEffect(() => {
    SongsStore.searchAndLoad(q);
  }, [q]);

  if (SongsStore.isLoading) return <></>;

  return (
    <div className={s.page_container}>
      <Header />
      <div className={s.main_section}>
        <div className={s.searchbar_container}>
          <SearchBar defaultValue={q} onSubmit={searchBarOnSubmit} />
        </div>
        <SearchItemsList items={SongsStore.itemsList} />
      </div>
      <Footer />
    </div>
  );
}

export default observer(SearchPage);