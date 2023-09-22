import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { observer } from 'mobx-react';
import s from './LyricsPage.module.css';

import SongsStore from 'store/SongsStore';

// components import
import Header from 'components/common/header/Header';
import Footer from 'components/common/footer/Footer';
import Button from 'components/common/button/Button';
import SpinnerLayout from 'layouts/spinner-layout/SpinnerLayout';

function LyricsPage() {
  const { id } = useParams();

  const { current, currentQuery, isLoading } = SongsStore;

  useEffect(() => {
    if (parseInt(current.id) !== parseInt(id)) {
      SongsStore.findById(id);
    }
  }, [id]);

  const BackButton = () => (
    <div className={s.backButton_container}>
      <Link to={`/search/?q=${currentQuery}`}>
        <Button>Go back to search list</Button>
      </Link>
    </div>
  );

  if (isLoading) return <SpinnerLayout />;

  return (
    <div className={s.page_container}>
      <Header />
      <div className={s.main_section}>
        {currentQuery.trim() && <BackButton />}
        <div className={s.song_header_container}>
          <p className={s.song_header_image_container}>
            <img
              src={current.song_art_image_thumbnail_url}
              className={s.song_header_image}
              alt='Tumbnail Cover'
            />
          </p>
          <div className={s.song_header_info_container}>
            <p className={s.song_header_info_title}> {current.title} </p>
            <p className={s.song_header_info_album}>
              from {current.album && current.album.name}{' '}
            </p>
            <p className={s.song_header_info_artist}>
              by <span className='text-secondary'>{current.artist_names}</span>
            </p>
            <p className={s.song_header_info_date}>
              released on {current.release_date_for_display}
            </p>
          </div>
        </div>
        <div className={s.lyrics_container}>
          <h1 className={s.lyrics_heading}>Lyrics</h1>
          {current.lyrics &&
            current.lyrics.map((value, index) => (
              <p key={index} className={s.lyrics_p}>
                {value}
              </p>
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default observer(LyricsPage);
