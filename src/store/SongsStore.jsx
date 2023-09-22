import { makeAutoObservable } from 'mobx';
import SongsFetcher from 'services/SongsFetcher';

class SongsStore {
  // states
  currentQuery = '';
  current = {};
  currentLyrics = [];
  itemsList = [];
  isLoading = false; // this state is used for managing loading states through the whole app

  constructor() {
    makeAutoObservable(this);
  }

  // actions
  async searchAndLoad(q) {
    try {
      this.currentQuery = q;
      this.isLoading = true;
      this.itemsList = [];
      const response = await SongsFetcher.search(q);
      this.itemsList = response.response.hits;
      this.isLoading = false;
    } catch (error) {
      console.log('Unable to search songs');
      this.isLoading = false;
    }
  }

  async findById(id) {
    try {
      this.isLoading = true;
      const response = await SongsFetcher.getSong(id);
      this.current = response.response.song;
      const lyricsResponse = await SongsFetcher.getLyrics(this.current.path); // fethcing lyrics
      this.current = { ...this.current, ...lyricsResponse };
      this.isLoading = false;
    } catch (error) {
      console.log('Unable to search songs');
      this.isLoading = false;
    }
  }
}

const songsStore = new SongsStore();

export default songsStore;
