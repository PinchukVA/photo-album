/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
/* eslint-disable default-param-last */
const initialState = {
  collectionsOnPage: [],
  isFetching: true,
  collectionId: null,
  collection: [],
  keyAPI: 'f6146b5aea320305af01030c6fc04c59',
  userId: '48600090482@N01',
  page: 1,
  totalCollections: null,
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
    case 'SET_FETCHING':
      return { ...state, isFetching: payload };
    default:
      return { ...state };
  }
};
