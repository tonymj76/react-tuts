import React, { Component } from 'react';
import ArticleList from './ArticleList';
import SearchBar from './SearchBar';
import PropTypes from 'prop-types';
import pickBy from 'lodash.pickby';
import Timestamp from './Timestamp';

// import axios from 'axios';
// import DataAPI from 'start-api';


export default class App extends Component {
  // for react context to work you have to define the childContextTypes as
  // store object
  static childContextTypes = {
    store: PropTypes.object,
  };

  // React context that is globals
  getChildContext() {
    return {
      store: this.props.store
    };
  }
  appState = () => {
    const { articles, searchTerm} = this.props.store.getState();
    return {articles, searchTerm};
  }

   state = this.appState();
   // always read the state from the state and read from the store and make the 
   // store be aware of any changes;

  // setSearchTerm= (searchTerm) => {
  //   this.setState({searchTerm});
  // }

  onStoreChange = () => {
    this.setState(this.appState);
  }

  componentDidMount() {
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
    this.props.store.setClock()
  }
  
  componentWillUnmount() {
    this.props.store.unsubscribe(this.subscriptionId)
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   return (
  //     nextState.articles !== this.state.articles ||
  //     nextState.searchTerm !== this.state.searchTerm
  //   )
  // }
  render() {
    // debugger;
    let {articles, searchTerm } = this.state;
    const searchRE = new RegExp(searchTerm, 'i');
    if (searchTerm) {
      articles = pickBy(articles, (value) => {
        return value.title.match(searchRE) || value.body.match(searchRE);
      })
    }
    return (
      <div>
        <Timestamp/>
        <SearchBar />
        <ArticleList
            articles={articles}
            // articleActions={this.articleActions}
            // store={this.props.store}
        />
      </div>
    )
  }
}


// class App extends Component {
//   state = {
//     answer: 43,
//   }
  
//   asyncFunc = () => {
//     return Promise.resolve(37);
//   };
//   async componentDidMount(){
//     // Note he is not handling the error which may return to look at try and catch 
//     this.setState({
//       answer: await this.asyncFunc()
//     });
//   }
//   render() {
//     return (
//       <h2>Hello React --{this.state.answer}</h2>
//     )
//   }
// }

 // //we can't read the data direct in the constructor here because data is async
  // constructor(props) {
  //   super(props)
  
  //   this.state = {
  //      articles: api.getArticles(),
  //      authors: api.getAuthors()
  //   }
  // }


  // state = {
  //   articles: this.props.initialData.articles,
  //   authors: this.props.initialData.authors,
  // };


  // we don't need to call this component again because we are geting the input from the index.ejs
  // async componentDidMount() {
  //   const resp = await axios.get('/data');
  //   const api = new DataAPI(resp.data);

  //   this.setState(() => ({
  //     articles: api.getArticles(),
  //     authors: api.getAuthors()
  //   }))
  // };

   // articleActions = {
  //   lookupAuthor: authorId => this.state.authors[authorId],
  // }; 