const apiUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;
const lyricsApiUrl = process.env.REACT_APP_LYRICS_API_URL;

class SongsFetcher {
  static async search(q) {
    try {
      let path = `${apiUrl}search/?q=${q}&access_token=${apiKey}`;
      let response = await fetch(path);
      if (!response.ok) {
        throw Error('Unable to connect to the service');
      }
      response = await response.json();
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  static async getSong(id) {
    try {
      let path = `${apiUrl}songs/${id}?access_token=${apiKey}`;
      let response = await fetch(path);
      if (!response.ok) {
        throw Error('Unable to get song');
      }
      response = await response.json();
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  static async getLyrics(lyricsPath) {
    try {
      let path = `${lyricsApiUrl}lyrics${lyricsPath}`;
      let response = await fetch(path);
      if (!response.ok) {
        throw Error('Unable to fetch lyrics');
      }
      response = await response.json();
      return response;
    } catch (error) {
      console.error(error);
    }
  }
}

export default SongsFetcher;
