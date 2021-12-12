export const setCollection = (data) => ({
  type: 'GET_COLLECTION_FOR_PAGE',
  payload: data,
});
export const setFetching = (bool) => ({
  type: 'SET_FETCHING',
  payload: bool,
});
