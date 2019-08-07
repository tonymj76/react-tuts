class StateApi {
  constructor(rawData) {
    this.data = {
      articles: this.mapIntObject(rawData.articles),
      authors: this.mapIntObject(rawData.authors),
      searchTerm: '',
      timestamp: new Date(),
    };

    this.subscriptions = {};
    this.lastSubscriptionId = 0;
  }

  mapIntObject(arr) {
    return arr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  }

  lookupAuthor = authorId => this.data.authors[authorId]

  getState = () => this.data;

  subscribe = (cb) => {
    this.lastSubscriptionId++;
    this.subscriptions[this.lastSubscriptionId] = cb
    return this.lastSubscriptionid;
  };

  unsubscribe = (subscriptionId) => {
    delete this.subscriptions[subscriptionId];
  };

  notifySubscribers = () => {
    Object.values(this.subscriptions).forEach(cb => cb());
  };

  mergeWithState = (stateChange) => {
    this.data = {
      ...this.data,
      ...stateChange,
    };
    this.notifySubscribers();
  };

  setSearchTerm = (searchTerm) => {
    this.mergeWithState({
      searchTerm,
    })
  };

  setClock = () => {
    setInterval(() => {
      this.mergeWithState({
        timestamp: new Date(),
      })
    }, 1000);
  };
}

module.exports = StateApi;