/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Link } from 'react-router-dom'

import './CollectionCard.less';


export default function CollectionCard(item) {
  const { title, primary_photo_extras, id } = item.item;
  return (
    <div className='card'>
      <Link to={`/card/${id}`}>
        <div className='card__photo'>
        <img src={primary_photo_extras.url_m} alt={title._content} />
        </div>
      </Link>
      
      <div className='card__name'>
        <h3>{title._content}</h3>
      </div>
    </div>
  );
}
