import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import './Collection.less';
import loader from '../../../static/images/svg/loader.svg';
import { getInfoCollection } from '../../../api/collectionAPI';
import {openSlider} from '../../../../redux/actions/Actions'
import  Slider from '../../slider/Slider'

export default function Collection(props) {
  const { collectionId } = useParams();
  const dispatch = useDispatch();
  const appState = useSelector((state) => state.Reducer);
  const {
    isSlider, isFetching, keyAPI, userId, collectionTitle, collectionDescription, collectionPhoto
  } = appState;

  const renderColletions = (arr) => {
    const result = arr.map((item,index)=><img key={item.id} onClick={()=>dispatch(openSlider(index))} src={item.url_m} alt={item.title || item.id }></img>)
    return result
  };

  useEffect(() => {
    dispatch(getInfoCollection(collectionId, keyAPI, userId));
  }, []);

  return (
    <>
     {
        isFetching === false
        ? <section className='collection'>
        <div className='collection__return'>
          <button onClick={()=>props.history.goBack()} className='return__button'><ArrowBackIosIcon/> Return back to collections</button>
        </div> 
        <div className='collection__info'>
          <h2>{collectionTitle}</h2>
          <p>{collectionDescription}</p>
        </div>
        {isSlider && <Slider/>}
        
        <div className='collection__photos'>
        <div className='collection__gallery'>
              {renderColletions(collectionPhoto)}
            </div>
        </div>
      </section>
        : <img className='main__loader' src={loader} />
        }
    
    
    </>
  );
}
