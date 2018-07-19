import React from 'react';
import { updateSearchInput, getSearchResults, handleHistory } from './searchBarActions';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handlePreloadedCity = this.handlePreloadedCity.bind(this);
    this.getSearchResults = this.getSearchResults.bind(this);
  }

  handleSearchInput(e) {
    const { dispatch } = this.props;
    const { value } = e.target;
    dispatch(updateSearchInput(value));
  }

  handlePreloadedCity(e) {
    const { dispatch } = this.props;
    const { value } = e.target;
    dispatch(getSearchResults(value))
      .then(res => {
        if (res) {
          dispatch(handleHistory(value));
        }
      })
  }

  getSearchResults() {
    const { dispatch, input } = this.props;
    dispatch(getSearchResults(input))
      .then(res => {
        if (res) {
          dispatch(handleHistory(input));
        }
      })
  }


  render() {
    const { input } = this.props
    return (
      <div className='container searchbar'>
        <div className='row'>
          <ul className='nav nav-tabs btn-group btn-group-toggle' role='group' data-toggle='buttons'>
            <li className='nav-item'>
              <button type='button' className='btn btn-primary' value='San Diego' onClick={this.handlePreloadedCity}>San Diego</button>
            </li>
            <li className='nav-item'>
              <button type='button' className='btn btn-primary' value='New York' onClick={this.handlePreloadedCity}>New York</button>
            </li>
            <li className='nav-item'>
              <button type='button' className='btn btn-primary' value='Washington' onClick={this.handlePreloadedCity}>Washington D.C.</button>
            </li>
            <li className='nav-item'>
              <button type='button' className='btn btn-primary' value='London' onClick={this.handlePreloadedCity}>London</button>
            </li>
            <li className='nav-item'>
              <button type='button' className='btn btn-primary' value='Tokyo' onClick={this.handlePreloadedCity}>Tokyo</button>
            </li>
          </ul>
          <div className='btn-group input-group'>
            <input type='text' className='form-control' placeholder='Enter city name' value={input} onChange={this.handleSearchInput} />
            <button type='button' className='btn btn-group btn-outline-info' onClick={this.getSearchResults}>Go!</button>
          </div>
        </div>
      </div>
    );
  }
}
