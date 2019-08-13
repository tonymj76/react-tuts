import React from 'react';
import PropTypes from 'prop-types';
import storeProvider from './storeProvider';

const styles = {
  article:{
    paddingBottom:  10,
    borderBottomStyle: 'solid',
    borderBottomColor: '#aaa',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
  },
  date: {
    fontSize: '0.85em',
    color: '#888',
  },
  author: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  body: {
    paddingLeft:20,
  }
}

const dateDisplay = (dataString) => new Date(dataString).toDateString();

// the second args of fn Article can take in props and context or 
// you can also disdructure the context to get the global variable
class Article extends React.PureComponent  {
  render() {
    const {article, author} = this.props;
    return (
      <div style={styles.article}>
        <div style={styles.title}>{article.title}</div> 
        <div style={styles.date}>
          {dateDisplay(article.date)}</div>
        <div style={styles.author}><a href={author.website}>
        {author.firstName}{author.lastName}</a></div>
        <div style={styles.body}>{article.body}</div>
      </div>
    )
  }
}



Article.propTypes = {
  article: PropTypes.shape({
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }),

  auther: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired
  })
}
// const author = store.lookupAuthor(article.authorId);
function extraProps(store, originalProps) {
  return {
    author: store.lookupAuthor(originalProps.article.authorId),
  }
}


// const ArticleContainer = (props, {store}) => <Article {...props} store={store}/>

// //gets store from the global context of react
// ArticleContainer.contextTypes = {
//   store: PropTypes.object,
// }

// export default ArticleContainer;
export default storeProvider(extraProps)(Article);

// node that since we have storeProvider component container we can  make article to be
// more representation component