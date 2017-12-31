import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import { Button, ButtonGroup } from 'react-bootstrap';

import './App.css';
import './index.css';

const someDivStyle = {
  margin: '40px',
  border: '5px solid pink',
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {playlists: []};
  }

  componentWillMount() {
    axios.get('https://desolate-shore-97449.herokuapp.com/').then(response => {
      this.setState({playlists: response.data.data});
      console.log(response);
    }).catch(err => {
      console.log(err);
    });
  }

  getPlaylists() {
    console.log(someDivStyle.margin);
 if(this.state.playlists.length > 0 ) {
      return this.state.playlists.map(playlist => {
        return <Button 
          bsStyle="info"
          key={playlist.name} 
          onClick={() => window.open(playlist.external_urls.spotify)}
          >
          {playlist.name}
        </Button>
      })
    }  else {
      return <Button> 'no data' </Button>;
    }
  }

  render() {
    return(
      <div align='center'> 
        <ButtonGroup bsSize="large">
        {this.getPlaylists()}
        </ButtonGroup>
      </div>
    );
  }
}



export default App;
