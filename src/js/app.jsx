import React from 'react';
import Header from './Components/Header/Header';
import SearchBar from './Components/SearchBar';
import CityInfo from './Components/CityInfo'; 
import SearchHistory from './Components/SearchHistory/';
//just point to the wrapper index.js and not the component directly, every time need props
import '../css/style.less';


export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Header />
        <SearchBar />
          <div className='row'>
          <CityInfo />
          <SearchHistory />
          </div>
      </div>
    );
  }
}

