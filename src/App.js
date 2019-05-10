import React, { Component } from 'react';
import './App.css';
import Movie from './components/Movie';

class App extends Component {
  state = {}

  componentDidMount() {
    this._getMovies();
  }

  _renderMovies = () => {
    return this.state.movies.map(movie => (
      <Movie 
        key={movie.id}
        title={movie.title}
        poster={movie.medium_cover_image}
        genres={movie.genres}
        summary={movie.summary}
      />
    ));
  }

  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({
      movies: movies
    });
    console.log(movies);
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=year')
            .then(res => res.json())
            .then(res => res.data.movies)
            .catch(err => console.log(err));
  }

  render() {
    return (
      <div className={this.state.movies ? 'App' : 'App-loading'}>
        {this.state.movies ? this._renderMovies() : <h1>Loading</h1>}
      </div>
    );
  }
}

export default App;
