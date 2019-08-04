import React, { Component } from 'react';
import DataApi from '../DataAPI';
import {data} from '../testData';
import ArticleList from './ArticleList';

const api = new DataApi(data);

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       articles: api.getArticles(),
       authors: api.getAuthors()
    }
  }
  
  articleActions = {
    lookupAuthor: authorId => this.state.authors[authorId],
  }
  render() {
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