// 65130500102  natdanai tessapan 
class Movies {
  constructor() {
    this.movies = [];
  }

  getAllMovies() {
    return this.movies;
  }

  addMovie(title, director, year, genre) {
    // Check if any required details are missing
    if (!title || !director || !year || !genre) {
      return undefined;
    }

    // Check for duplicate movie with the same title and director (case insensitive)
    const isDuplicate = this.movies.some(
      movie =>
        movie.title.toLowerCase() === title.toLowerCase() &&
        movie.director.toLowerCase() === director.toLowerCase()
    );

    if (isDuplicate) {
      return undefined;
    }

    // Add the new movie to the array
    const newMovie = {
      title,
      director,
      year,
      genre,
    };
    this.movies.push(newMovie);

    return newMovie;
  }

  updateMovie(title, updatedDetails) {
    // Find the movie by title (case insensitive)
    const movieIndex = this.movies.findIndex(
      movie => movie.title.toLowerCase() === title.toLowerCase()
    );

    // If the movie is not found, return undefined
    if (movieIndex === -1) {
      return undefined;
    }

    // Update the movie details
    this.movies[movieIndex] = {
      ...this.movies[movieIndex],
      ...updatedDetails,
    };

    return this.movies[movieIndex];
  }

  deleteMovieByTitle(title) {
    // Find the movie by title (case insensitive)
    const movieIndex = this.movies.findIndex(
      movie => movie.title.toLowerCase() === title.toLowerCase()
    );

    // If the movie is found, delete it and return the deleted movie object
    if (movieIndex !== -1) {
      const deletedMovie = this.movies.splice(movieIndex, 1)[0];
      return deletedMovie;
    }

    // If the movie is not found, return undefined
    return undefined;
  }
}






module.exports = Movies
