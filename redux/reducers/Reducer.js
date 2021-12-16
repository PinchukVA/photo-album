/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
/* eslint-disable default-param-last */
const initialState = {
  collectionsOnPage: [],
  isFetching: true,
  collectionTitle: '',
  collectionDescription: '',
  collectionPhoto: [],
  keyAPI: 'f6146b5aea320305af01030c6fc04c59',
  userId: '48600090482@N01',
  totalPages: null,
  isSlider:false,
  sliderStartIndex:0,
  isSorted: false,
  collectionSorted: [],
  errorFetch: false,
  filterText:'',
};

export const Reducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case 'GET_COLLECTION_FOR_PAGE':
      return {
        ...state,
        collectionsOnPage: payload.photoset,
        isFetching: false,
      };
      case 'SET_INFO_TO_COLLECTION':
        const { description, title } = payload   
      return {
        ...state,
        collectionDescription: description._content || '',
        collectionTitle: title._content || '',
      };
    case 'SET_PHOTO_TO_COLLECTION':
      return {
        ...state,
        collectionPhoto: payload,
        isFetching: false,
      };
    case 'SLIDER_OPEN':
      window.scrollTo({
        top: 105,
        behavior: 'smooth'
      });
      return {
        ...state,
        isSlider: true,
        sliderStartIndex:payload,
      };
    case 'SLIDER_CLOSE':
      return {
        ...state,
        isSlider: false,
        sliderStartIndex:0,
      };
    case 'SWITCH_SLIDE':
      let currentIndex = 0;
      if ( payload === 'next' ){
        currentIndex =  state.sliderStartIndex + 1
      }else{
        currentIndex =  state.sliderStartIndex -1
      }
      return {
        ...state,
        sliderStartIndex:currentIndex,
      };
    case 'SET_FETCHING':
      return { ...state, isFetching: payload };
    case 'SET_PAGES':
      return { ...state, totalPages: payload };
    case 'SET_CURRENT_PAGE':
      return { ...state, page: payload };
      case 'SORT_OFF':
        return { ...state, isSorted: false };
      case 'SORT_ON':
        return {
          ...state, 
          collectionSorted: payload,
          isSorted: true,
         };
      case 'SET_FILTR_TEXT':
        return { ...state, filterText: payload }; 
      case 'SET_ERROR_FETCH':
        return { ...state, errorFetch: payload };   
    default:
      return { ...state };
  }
};
