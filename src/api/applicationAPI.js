import axios from 'axios';
import { setCollection, setFetching } from '../../redux/actions/Actions';

const getCollectionOnPage = (page) => async (dispatch) => {
  dispatch(setFetching(true));
  const response = await axios.get(`https://www.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=f6146b5aea320305af01030c6fc04c59&user_id=48600090482%40N01&page=${page}&per_page=15&primary_photo_extras=url_m&sort_groups=&format=json&nojsoncallback=1`);
  const { photosets } = response.data;
  dispatch(setCollection(photosets));
};
export { getCollectionOnPage };
