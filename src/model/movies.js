import Observer from "../utils/observer.js";

export default class MoviesModel extends Observer {
  constructor() {
    super();
    this._movies = [];
  }

  setMovies(movies) {
    this._movies = movies.slice();
  }

  getMovies() {
    return this._movies;
  }

  updateMovie(updateType, update) {
    const index = this._movies.findIndex((movie) => movie.id === update.id);

    if (index === -1) {
      throw new Error(`Can't update unexisting movie`);
    }

    this._movies = [
      ...this._movies.slice(0, index),
      update,
      ...this._movies.slice(index + 1)
    ];

    this._notify(updateType, update);
  }

  addComment(updateType, update) {
    this._movies = [
      update,
      ...this._movies
    ];

    this._notify(updateType, update);
  }

  deleteComment(updateType, update) {
    const index = this._movies.findIndex((movie) => movie.id === update.id);

    if (index === -1) {
      throw new Error(`Can't delete unexisting task`);
    }

    this._movies = [
      ...this._movies.slice(0, index),
      ...this._movies.slice(index + 1)
    ];

    this._notify(updateType);
  }
}
