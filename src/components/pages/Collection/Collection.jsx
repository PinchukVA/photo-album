import React from 'react';
import './Collection.less';

export default function Collection(props) {
  console.log('Hi wrom page Collection')
  return (
    <>
    <button onClick={()=>props.history.goBack()}>return back</button>
    <h1>HI Collection</h1>
    </>
  );
}
