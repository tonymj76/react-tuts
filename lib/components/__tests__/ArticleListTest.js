import React from 'react';
import ArticleList from '../ArticleList';
import renderer from 'react-test-renderer';

const articleProps = {
  articles: {
    a: {id: 'a'},
    b: {id: 'b'}
  },
  articleActions: {
    lookupAuthor: jest.fn(()=> ({})),
  }
}

describe('ArtcleList', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <ArticleList
        {...articleProps}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
    expect(tree.children.length).toBe(2);
  })
})
