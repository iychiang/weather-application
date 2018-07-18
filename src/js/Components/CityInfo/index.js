import { connect } from 'react-redux';
import CityInfo from './CityInfo';

function mapStoreToProps(store) {
  return {
    results: store.search.results //results: {specific stuff}
  };
}

export default connect(mapStoreToProps)(CityInfo);