import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './Main.scss';

import loader from '../../src/static/images/svg/loader.svg';
import CollectionCard from '../../src/components/index';
import { setCollection } from '../../redux/actions/Actions';
import { getCollectionOnPage } from '../../src/api/applicationAPI';

export default function Main() {
  const dispatch = useDispatch();
  const appState = useSelector((state) => state.Reducer);
  const { collectionsOnPage, page, isFetching } = appState;

  const renderColletions = (arr) => {
    const result = arr.map((item) => (
      <CollectionCard key={item.id} item={item}/>
    ));
    return result;
  };

  useEffect(() => {
    dispatch(getCollectionOnPage(page));
  }, []);
  return (<>
  {
     isFetching === false
       ? renderColletions(collectionsOnPage)
       : <img className='main__loader' src={loader} />
  }
  </>);
}
