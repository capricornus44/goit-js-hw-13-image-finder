const API_KEY = '20669309-c97d1ec468a66ad87fd39e114';
const BASE_URL = 'https://pixabay.com/api';
const options = {
  header: {
    Authorization: API_KEY,
  },
};

export default class PixabayApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchArticles() {
    const url = `${BASE_URL}/?key=${API_KEY}&image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12`;

    return fetch(url, options)
      .then(response => response.json())
      .then(data => {
        //console.log(data);
        this.incrementPage();
        return data;
      });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
