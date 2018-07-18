import { connect } from 'react-redux';
import SearchHistory from './SearchHistory';

function mapStoreToProps(store) {
  return {
    history: store.search.history,
    results: store.search.results
    //normally you'll want name of prop and target val to have same name ('history' in this case)
  };
}

export default connect(mapStoreToProps)(SearchHistory)