import React from 'react';
import s from './SearchItem.module.css';

// composition subcomponent
const Image = ({ src }) => (
  <p className={s.card_image_container}>
    <img src={src} alt='Cover Thumbnail' className={s.card_image} />
  </p>
);

// composition subcomponent
const Title = ({ children }) => <p className={s.card_title}> {children} </p>;

// composition subcomponent
const Artist = ({ children }) => <p className={s.card_artist}> {children} </p>;

// main component
function SearchItem({ children }) {
  return <div className={s.card_container}>{children}</div>;
}

SearchItem.Image = Image;
SearchItem.Title = Title;
SearchItem.Artist = Artist;

export default SearchItem;
