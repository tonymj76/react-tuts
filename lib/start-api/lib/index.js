class DataAPI {
  constructor(rawData) {
    this.rawData = rawData;
  }

  mapIntObject(arr) {
    return arr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  }
  
  getArticles() {
    return this.mapIntObject(this.rawData.articles);
  }

  getAuthors() {
    return this.mapIntObject(this.rawData.authors);
  }
}

module.exports = DataAPI;