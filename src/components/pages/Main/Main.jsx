import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import './Main.less';

import loader from '../../../static/images/svg/loader.svg';
import CollectionCard from '../../collectionCard/CollectionCard';
import PaginationOutline from '../../pagination/PaginationOutline';
import SortButtons from '../../sortButtons/SortButtons';
import ErrorFetch from '../../errorFetch/ErrorFetch'
import {getCollectionOnPage} from '../../../api/applicationAPI';

export default function Main() {
  const dispatch = useDispatch();
  const appState = useSelector((state) => state.Reducer);
  const {currentPage = 1} = useParams();
  const {
    collectionsOnPage,
     isFetching, 
     keyAPI, 
     userId,
     totalPages,
     collectionSorted, 
     isSorted, 
     errorFetch
  } = appState;
  const collectionList = isSorted ? collectionSorted : collectionsOnPage
  
  const renderColletions = (arr) => {
    const result = arr.map((item) => (
      <CollectionCard key={item.id} item={item}/>
    ));
    return result;
  };

  useEffect(() => {
    dispatch(getCollectionOnPage(currentPage, keyAPI, userId));
  }, [currentPage]);

  return (<>
  {errorFetch && <ErrorFetch/>}
  {
     isFetching === false
       ?<div className='main__wraper'> 
          <SortButtons/>
          <div className='main__cards'>
            {renderColletions(collectionList)}
          </div>
          <PaginationOutline pages={totalPages} currentpage={+currentPage} />
        </div>
       : <img className='main__loader' src={loader} />
  }
  </>);
}