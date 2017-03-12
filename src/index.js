import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSeach from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyBBfb3qH16pS8lNgpvL2aqZGkfGizLtnm0';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
      searchTerm: ''
    };

    YTSeach({key: API_KEY, term: 'Adieu'}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div className="row">
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
