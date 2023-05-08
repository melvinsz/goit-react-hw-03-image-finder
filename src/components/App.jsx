import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

const API_KEY = '34746416-8804c3e057cfbf229fa5fe7fd';

class App extends Component {
  state = {
    value: '',
    images: [],
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.value !== '') {
      fetch(
        `https://pixabay.com/api/?q=${this.state.value}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => response.json())
        .then(data => {
          this.setState({ images: data.hits });
        })
        .catch(error => {
          console.log(error.message);
        });
    } else return;
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} onChange={this.handleChange} />
        <ImageGallery images={this.state.images} />
      </div>
    );
  }
}

export default App;
