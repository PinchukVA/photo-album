import axios from 'axios';
import { setCollection, setFetching, setPages,closeSlider, setErrorFetch} from '../../redux/actions/Actions';

const getCollectionOnPage = (page, keyAPI, userId ) => async (dispatch) => {
  try{
    dispatch(closeSlider())
    dispatch(setFetching(true));

    const response = await axios.get(`https://www.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=${keyAPI}&user_id=${userId}&page=${page}&per_page=15&primary_photo_extras=url_m&sort_groups=&format=json&nojsoncallback=1`);

    const {photosets} = response.data;
    const totalPages = Math.ceil(photosets.total/15)
    
    dispatch(setPages(totalPages));
    dispatch(setCollection(photosets));
  }catch(error){
    dispatch(setErrorFetch(true));
  }
  
};
export { getCollectionOnPage };
