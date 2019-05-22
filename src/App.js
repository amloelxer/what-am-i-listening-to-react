import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import './index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { playlists: [] };
  }

  componentWillMount() {
    axios.get('https://desolate-shore-97449.herokuapp.com/').then(response => {
      this.setState({ playlists: response.data.data });
      console.log(response);
    }).catch(err => {
      console.log(err);
    });
  }

  getImages() {
    if(this.state.playlists.length > 0) {
      return this.state.playlists.map(playlist => {
        const imagesArray = playlist.images; 
        if (imagesArray.length > 0) {
          return  <li>
                    <div className="playlistImage">
                      <div className="someImage" align="center">
                        <img src={imagesArray[0].url} onClick={() => window.open(playlist.external_urls.spotify)}></img>
                      </div>

                      <div className="playlistName">
                        <b>{playlist.name}</b>
                      </div>
                    </div> 
                  </li>
        }
      })
    }
  }

  getCenteredImages() {
    return <div className='playlistImages' align='center'> 
      {this.getImages()}
    </div>
  }

  render() {
    document.body.style = 'background: #222;';
    return (
      <div>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
        <ul>
        {this.getCenteredImages()}
        </ul>
      </div>
    );
  }
}



export default App;
