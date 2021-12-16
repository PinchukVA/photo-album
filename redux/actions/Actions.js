export const setCollection = (data) => ({
  type: 'GET_COLLECTION_FOR_PAGE',
  payload: data,
});
export const setPhotoToCollection = (data) => ({
  type: 'SET_PHOTO_TO_COLLECTION',
  payload: data,
});
export const setInfoToCollection = (data) => ({
  type: 'SET_INFO_TO_COLLECTION',
  payload: data,
});
export const setFetching = (bool) => ({
  type: 'SET_FETCHING',
  payload: bool,
});
export const setPages = (num) => ({
  type: 'SET_PAGES',
  payload: num,
});
export const setCurrentPage = (num) => ({
  type: 'SET_CURRENT_PAGE',
  payload: num,
});
export const openSlider = (num) => ({
  type: 'SLIDER_OPEN',
  payload: num,
});
export const closeSlider = () => ({
  type: 'SLIDER_CLOSE',
});
export const switchSlide = (str) => ({
  type: 'SWITCH_SLIDE',
  payload: str,
});
export const setErrorFetch = (bool) => ({
  type: 'SET_ERROR_FETCH',
  payload: bool,
});
export const sortOff = () => ({
  type: 'SORT_OFF',
});
export const sortOn = (arr) => ({
  type: 'SORT_ON',
  payload: arr,
});
export const setFiltrText = (str) => ({
  type: 'SET_FILTR_TEXT',
  payload: str,
});