import React, { Component } from 'react';
import DataAPI from 'start-api';
import ArticleList from './ArticleList';
import axios from 'axios';

export default class App extends Component {
  // //we can't read the data direct in the constructor here because data is async
  // constructor(props) {
  //   super(props)
  
  //   this.state = {
  //      articles: api.getArticles(),
  //      authors: api.getAuthors()
  //   }
  // }
  state = {
    articles: this.props.initialData.articles,
    authors: this.props.initialData.authors,
  };
  // we don't need to call this component again because we are geting the input from the index.ejs
  // async componentDidMount() {
  //   const resp = await axios.get('/data');
  //   const api = new DataAPI(resp.data);

  //   this.setState(() => ({
  //     articles: api.getArticles(),
  //     authors: api.getAuthors()
  //   }))
  // };
  
  articleActions = {
    lookupAuthor: authorId => this.state.authors[authorId],
  };
  render() {
    debugger;
    return (
      <div>
        <ArticleList
            articles={this.state.articles}
            articleActions={this.articleActions}
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