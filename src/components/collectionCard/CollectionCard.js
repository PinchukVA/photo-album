/* eslint-disable no-underscore-dangle */
import React from 'react';
import './CollectionCard.scss';

export default function CollectionCard(item) {
  const { title, primary_photo_extras } = item.item;

  return (
    <div className='card'>
      <div className='card__photo'>
        <img src={primary_photo_extras.url_m} alt={title._content} />
      </div>
      <div className='card__name'>
        <h3>{title._content}</h3>
      </div>
    </div>
  );
}
