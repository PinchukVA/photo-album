/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useDispatch } from 'react-redux';
import './ErrorFetch.less';

import {setErrorFetch} from '../../../redux/actions/Actions';
export default function ErrorFetch() {
  const dispatch =useDispatch()

  const reloadPage = () => {
    window.location.reload()
    dispatch(setErrorFetch(false))
  }
  
  return (
    <div className='error'>
       <h2> Ooops, something went wrong. Please, try again later </h2>
      <button onClick={() => reloadPage()}> Reload Page</button>
    </div>
  );
}
