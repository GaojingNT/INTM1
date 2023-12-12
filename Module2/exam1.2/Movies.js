// 65130500102  natdanai tessapan 
class Movies {
  constructor() {
    this.movies = [];
  }

  getAllMovies() {
    return this.movies;
  }

  addMovie(title, director, year, genre) {
    if (!title || !director || !year || !genre) {
      return undefined; // Missing required details
    }

    const lowerCaseTitle = title.toLowerCase();
    const lowerCaseDirector = director.toLowerCase();

    // Check for duplicate movie
    const duplicate = this.movies.find(
      (movie) =>
        movie.title.toLowerCase() === lowerCaseTitle &&
        movie.director.toLowerCase() === lowerCaseDirector
    );

    if (duplicate) {
      return undefined; // Duplicate movie
    }

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
    const movieToUpdate = this.movies.find(
      (movie) => movie.title.toLowerCase() === title.toLowerCase()
    );

    if (!movieToUpdate) {
      return undefined; // Movie not found
    }

    // Update movie details
    Object.keys(updatedDetails).forEach((key) => {
      movieToUpdate[key] = updatedDetails[key];
    });

    return movieToUpdate;
  }

  deleteMovieByTitle(title) {
    const indexToDelete = this.movies.findIndex(
      (movie) => movie.title.toLowerCase() === title.toLowerCase()
    );

    if (indexToDelete === -1) {
      return 'No movie deleted'; // Movie not found
    }

    const deletedMovie = this.movies.splice(indexToDelete, 1)[0];
    return deletedMovie;
  }
}




module.exports = Movies
