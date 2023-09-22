import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import s from './SearchPage.module.css';

// services and utils import
import SongsStore from 'store/SongsStore';

// components import
import SearchBar from 'components/searchbar/SearchBar';
import SearchItemsList from 'components/search/search-items-list/SearchItemsList';
import SpinnerLayout from 'layouts/spinner-layout/SpinnerLayout';
import PageLayout from 'layouts/page-layout/PageLayout';

function SearchPage() {
  const { currentQuery, isLoading, itemsList } = SongsStore;
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const q = searchParams.get('q');

  const searchBarOnSubmit = (value) => navigate(`/search/?q=${value}`);

  useEffect(() => {
    if (currentQuery?.trim() !== q?.trim()) {
      SongsStore.searchAndLoad(q);
    }
    // eslint-disable-next-line
  }, [q]);

  if (isLoading) return <SpinnerLayout />;

  return (
    <PageLayout pageTitle={`Search`}>
      <div className={s.main_section}>
        <div className={s.searchbar_container}>
          <SearchBar defaultValue={q} onSubmit={searchBarOnSubmit} />
        </div>
        {itemsList.length !== 0 ? (
          <SearchItemsList items={itemsList} />
        ) : (
          <div className={s.empty_container}>
            <p className={s.empty_text}>
              Sorry, could not find any result for "{currentQuery}"
            </p>
          </div>
        )}
      </div>
    </PageLayout>
  );
}

export default observer(SearchPage);
