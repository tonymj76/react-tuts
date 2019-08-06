class StateApi {
  constructor(rawData) {
    // this.rawData = rawData;
    this.data = {
      articles: this.mapIntObject(rawData.articles),
      authors: this.mapIntObject(rawData.authors),
      searchTerm: '',
    };
  }

  mapIntObject(arr) {
    return arr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  }

  lookupAuthor = authorId => this.data.authors[authorId]

  getState = () => this.data;
}

module.exports = StateApi;