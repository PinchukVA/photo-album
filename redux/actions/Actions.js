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