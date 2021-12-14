import axios from 'axios';
import { setPhotoToCollection, setFetching, setInfoToCollection } from '../../redux/actions/Actions';

const getInfoCollection = (id, keyAPI, userId ) => async (dispatch) => {
  dispatch(setFetching(true));
  const infoResponse = await axios.get(`https://www.flickr.com/services/rest/?method=flickr.photosets.getInfo&api_key=${keyAPI}&photoset_id=${id}&user_id=${userId}&format=json&nojsoncallback=1`)
  const info  = infoResponse.data.photoset;
  dispatch(setInfoToCollection(info));
  const response = await axios.get(`https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${keyAPI}&photoset_id=${id}&user_id=${userId}&extras=url_m&media=photos&format=json&nojsoncallback=1`);
  const { photoset } = response.data;
  dispatch(setPhotoToCollection(photoset.photo));
};
export { getInfoCollection };