import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


// var handleVideoSearch = (q) => ({
//   //TODO:  Write an asynchronous action to handle a video search!
//   // console.log(q)
//   // var cb = ()=>{console.log('this works!')};
//   // var options = {
//   //   key: YOUTUBE_API_KEY,
//   //   query: q
//   // }
//   // searchYouTube(options, cb);

//   // return 
//   // {
    
//   // }
//   type: 'HANDLE_VIDEO_SEARCH',
//   payload: q

// });

var handleVideoSearch = (q) => {
  return (dispatch) => {
    return searchYouTube({key: YOUTUBE_API_KEY, query: q}, function(data) {
      dispatch(changeVideoList(data));
      dispatch(changeVideo(data[0]));
    })
  }
}

export default handleVideoSearch;
