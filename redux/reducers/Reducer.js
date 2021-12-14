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
    case 'SET_FETCHING':
      return { ...state, isFetching: payload };
    case 'SET_PAGES':
      return { ...state, totalPages: payload };
    case 'SET_CURRENT_PAGE':
      return { ...state, page: payload };
    default:
      return { ...state };
  }
};
