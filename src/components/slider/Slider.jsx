import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CloseIcon from '@material-ui/icons/Close';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';


import './Slider.less';
import { closeSlider, switchSlide } from '../../../redux/actions/Actions';

export default function Slider() {
  const dispatch = useDispatch();
  const appState = useSelector((state) => state.Reducer);
  const {
    sliderStartIndex, collectionPhoto
  } = appState;

  const renderImage = (arr, ind) => {
    return (
      <div className="slider__wrap">
        <img
          className="slider__item"
          src={arr[ind].url_m}
          alt={arr[ind].title || ""}
        />
        <p>{arr[ind].title}</p>
      </div>
    );
  };

  return (
    <section className="slider">
      <div className="slider__close">
        <button className='slider__closeButton' onClick={()=>dispatch(closeSlider())} ><CloseIcon/></button>
      </div>
      <div className="slider__nav">
        <button
          disabled={sliderStartIndex === 0}
          onClick={()=>dispatch(switchSlide('prev'))}
        >
          <ChevronLeftIcon/>
        </button>
        {renderImage(collectionPhoto, sliderStartIndex)}
        <button
          disabled={sliderStartIndex === collectionPhoto.push() - 1}
          onClick={()=>dispatch(switchSlide('next'))}
        >
          <ChevronRightIcon/>
        </button>
      </div>
    </section>
  );
}