import defaultConfig from '../../config/default.js';
import { getLike } from './Likes.js';

class MovieData {
  async init() {
    try {
      const moveList = await fetch(defaultConfig.MOVE_API_URL);
      this.likeList = await getLike();
      this.data = await moveList.json();
      // getMoviewithLikeList(movieListsJson, likeList);
      return this.movieListsJson;
    } catch (error) {
      throw new Error(error);
    }
  }
}

const movieData = new MovieData();
export default movieData;