import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

//need to map state to props
const mapStateToProps = (state) => {
  return {
    videos: state.videoList
  }
}
//need to map dispatch to props
const mapDispatchToProps = (dispatch) => {
  return {
    handleVideoListEntryTitleClick: (title) => dispatch(changeVideo(title))
  };
}
//then connect the mapstate, mapdispatch and videolist
// var VideoListContainer = () => {};
var VideoListContainer = connect(mapStateToProps, mapDispatchToProps)(VideoList);
//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

export default VideoListContainer;

