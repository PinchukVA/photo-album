/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './SortButtons.less';
import {sortOff, sortOn, setFiltrText } from '../../../redux/actions/Actions'

export default function SortButtons() {
  const dispatch = useDispatch();
  const appState = useSelector((state) => state.Reducer);
  const {
    collectionsOnPage, filterText
  } = appState;

  function nameSort( a, b ) {
    if ( a.title._content < b.title._content ){
      return -1;
    }
    if ( a.title._content > b.title._content ){
      return 1;
    }
    return 0;
  }

  const sortByName = (arr) =>{
    const collectionCopy = JSON.parse(JSON.stringify(arr));
    const result = collectionCopy.sort(nameSort)
    dispatch(sortOn(result))
  }

  const handleChangeFiltrText = (e) => {
    dispatch(setFiltrText(e.target.value));
  };

  const handleFiltrList = (e) => {
    e.preventDefault();
    if (!filterText) {
      dispatch(sortOff());
      return;
    }
    const copyFilterText = filterText;
    const copyCollection = JSON.parse(JSON.stringify(collectionsOnPage));
    const filterArray = copyCollection.filter((item) =>
      item.title._content.toUpperCase().includes(copyFilterText.toUpperCase())
    );
    dispatch(sortOn(filterArray))
  };

  const handleBlur = (e) => {
    if (e.target.value === '') {
      dispatch(sortOff());
      return;
    }
  };

  return (
    <section className='sort'>
      <div className='sort__group'>
      <span>Sort by:</span>
      <button onClick={()=>dispatch(sortOff())}>Default</button>
      <button onClick={()=>sortByName(collectionsOnPage)}>Name</button>
      </div>
      
      <form onSubmit={handleFiltrList} className='sort__form'>
        <input
          className='sort__name'
          type='text'
          placeholder='Write substr'
          onChange={handleChangeFiltrText}
          onBlur={handleBlur}
        />
        <input 
          type='submit' 
          value='Filter by name' 
          className='sort__btn'
        />
      </form>
    </section>
  );
}