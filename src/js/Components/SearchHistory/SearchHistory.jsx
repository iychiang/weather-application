import React from 'react';

export default class SearchHistory extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { history, results } = this.props;
    if (history) {
      return (
        <div className='col-5'>
          <div className='card'>
            <div className='card-header'>Search History</div>
            <div className='card-body history'>
              {history.map(item => <div className='searchhistory'>{item.input}<br/><span className='datetime'>{item.datetime}</span></div>)}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className='col-5'>
          <div className='card'>
            <div className='card-header'>Search History</div>
            <div className='card-body history'>
            </div>
          </div>
        </div>
      );
    }
  }
}
