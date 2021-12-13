export const setCollection = (data) => ({
  type: 'GET_COLLECTION_FOR_PAGE',
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
