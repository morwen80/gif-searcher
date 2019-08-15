import React from 'react';
import GifSearch from './components/GifSearch';
import GifBox from './components/GifBox';

class App extends React.Component{
  constructor(){
    super()

    this.state = {
      term: "",
      gifs: []
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ term: e.target.value})
  }

fetchGif = (e) => {
  e.preventDefault();
   fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.term}&api_key=rJ5rexOBSq95wSsDladXNLQxhCEtUI5l&limit=10`)
     .then(resp => resp.json())
     .then(data => this.setState({ gifs: data.data }));
  }

  render(){
    return(
      <div>
        <GifSearch
          fetchGif={this.fetchGif}
          handleChange={this.handleChange}
        />
        <GifBox
          gifs={this.state.gifs}
        />
      </div>
    )
  }
}

export default App
