import React from 'react';
import s from './SearchItemsList.module.css';

// components import
import { Link } from 'react-router-dom';
import SearchItem from '../search-item/SearchItem';

function SearchItemsList({ items }) {
  return (
    <div className={s.list_container}>
      {items.map((item, index) => {
        const {
          song_art_image_thumbnail_url,
          title_with_featured,
          artist_names,
          id,
        } = item.result;

        return (
          <Link to={`/lyrics/${id}`}>
            <SearchItem key={index}>
              <SearchItem.Image src={song_art_image_thumbnail_url} />
              <SearchItem.Title>{title_with_featured}</SearchItem.Title>
              <SearchItem.Artist>{artist_names}</SearchItem.Artist>
            </SearchItem>
          </Link>
        );
      })}
    </div>
  );
}

export default SearchItemsList;
