import { connect } from 'react-redux';
import SearchBar from './SearchBar';

function mapStoreToProps(store) {
  return {
    input: store.search.input,
    results: store.search.results
  };
}

export default connect(mapStoreToProps)(SearchBar);