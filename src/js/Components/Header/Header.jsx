import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div className='container jumbotron'>
        <div className='row'>
          <h1 className='display-4'>Origin Weather Application</h1>
          <p className='lead'>Always know if you'll need an umbrella!</p>
        </div>
      </div>
    );
  }
}
