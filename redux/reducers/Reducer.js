/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
/* eslint-disable default-param-last */
const initialState = {
  items: [],
  isFetching: true,
  collectionId: null,
  collection: [],
};

export const Reducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    default:
      return { ...state };
  }
};
