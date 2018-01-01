import React, { Component } from 'react';
import axios from 'axios';
import { Button, ButtonGroup } from 'react-bootstrap';

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

  getPlaylists() {
    if (this.state.playlists.length > 0) {
      return this.state.playlists.filter(playlist => playlist.name.includes('NYC') || playlist.name.includes('New York')).map(playlist => {
        return <div className='playlistButton' align='center'>
          <Button
            bsStyle="info"
            bsSize="large"
            bsClas="btn"
            key={playlist.name}
            onClick={() => window.open(playlist.external_urls.spotify)}
          >
            {playlist.name}
          </Button>
        </div>
      })
    } else {
      <Button
        bsStyle="info"
        bsSize="large"
        bsClas="btn"
        onClick={() => window.open("www.spotify.com")}
      >
        "There is nothing here"
        </Button>
    }
  }

  render() {
    document.body.style = 'background: #222;';
    return (
      <div>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
        {this.getPlaylists()}
      </div>
    );
  }
}



export default App;
