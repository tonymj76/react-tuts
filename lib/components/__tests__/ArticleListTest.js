import React from 'react';
import ArticleList from '../ArticleList';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';
configure({ adapter: new Adapter() });

describe('ArtcleList', () => {
  const articleProps = {
    articles: {
      a: {id: 'a'},
      b: {id: 'b'}
    }
};
  it('renders correctly', () => {
    const wrapper = shallow(
      <ArticleList
        {...articleProps}
      />
    )

    // expect(wrapper.node.props.children.length).toBe(2);
    expect(wrapper.find('ArticleContainer').length).toBe(2);
    expect(wrapper).toMatchSnapshot();
  })
})
 