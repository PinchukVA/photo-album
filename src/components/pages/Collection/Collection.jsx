import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import './Collection.less';
import loader from '../../../static/images/svg/loader.svg';
import { getInfoCollection } from '../../../api/collectionAPI';

export default function Collection(props) {
  const { collectionId } = useParams();
  const dispatch = useDispatch();
  const appState = useSelector((state) => state.Reducer);
  const {
  isFetching, keyAPI, userId, collectionTitle, collectionDescription, collectionPhoto
  } = appState;

  const renderColletions = (arr) => {
    const result = arr.map(item=><img key={item.id} src={item.url_m} alt={item.title || item.id }></img>)
    return result
  };

  useEffect(() => {
    dispatch(getInfoCollection(collectionId, keyAPI, userId));
  }, []);

  return (
    <>
    <section className='collection'>
      <div className='collection__return'>
        <button onClick={()=>props.history.goBack()} className='return__button'><ArrowBackIosIcon/> Return back to collections</button>
      </div>
      <div className='collection__info'>
        <h2>{collectionTitle}</h2>
        <p>{collectionDescription}</p>
      </div>
      <div className='collection__photos'>
        {
        isFetching === false
        ? <div className='collection__gallery'>
            {renderColletions(collectionPhoto)}
          </div>
        : <img className='main__loader' src={loader} />
        }
      </div>
    </section>
    
    </>
  );
}
