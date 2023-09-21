import { makeAutoObservable } from 'mobx';
import SongsFetcher from 'services/SongsFetcher';

class SongsStore {
  // states
  current = {};
  itemsList = [];
  isLoading = false; // this state is used for managing loading states through the whole app

  constructor() {
    makeAutoObservable(this);
  }

  // actions
  async searchAndLoad(q) {
    try {
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
      const response = await SongsFetcher.findSong(id);
      this.current = response.response.song;
      this.isLoading = false;
    } catch (error) {
      console.log('Unable to search songs');
      this.isLoading = false;
    }
  }
}

const SongStore = new SongsStore();

export default SongStore;
