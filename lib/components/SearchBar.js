import React, { PureComponent } from 'react';
import debunce from 'lodash.debounce';
import storeProvider from './storeProvider';


// when you type i can get the value
// export default class SearchBar extends Component {
//   handleSearch = () => console.log(this.searchInput.value);

//   render() {
//     return (
//       <div>
//         <input type="search"
//           ref={(input) => this.searchInput = input}
//           placeholder="Enter"
//           onChange={this.handleSearch}
//         />
//       </div>
//     )
//   }
// }

// after you set the state 
// Note Debound when every you want do something after the state you have
// to Debounds it by add another function at the end of setState
// which is an callback wich exercute after the state have been set.
class SearchBar extends PureComponent {
  state = {
    searchTerm: ''
  }

  doSearch = debunce(()=> {
    this.props.store.setSearchTerm(this.state.searchTerm);
  }, 400)

  handleSearch = (e) => {
    this.setState({searchTerm: e.target.value}, ()=> {
       this.doSearch()
    });
  };

  render() {
    return (
      <div>
        <input type="search"
          placeholder="Enter"
          value={this.state.searchTerm}
          onChange={this.handleSearch}
        />
      </div>
    )
  }
}

export default storeProvider()(SearchBar);