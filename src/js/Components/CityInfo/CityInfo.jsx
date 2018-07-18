import React from 'react';

export default class CityInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { results } = this.props;
    if (results.longitude != '') {
      return (
        <div className='city-info-title col-sm-7'>
          <div className='card'>
            <div className='card-header'>City Information</div>
            <div className='card-body'>
              <div className='card-text'>
                <div className='img-container'>
                  <img src={`http://openweathermap.org/img/w/${results.weatherIcon}.png`} /> <h3>{results.name}</h3>
                <div className='weather-description'>LatLong {results.latitude},{results.longitude}</div>
                </div>
              </div>
              <div className='stats-container card'>
                <div className='card-body'>
                    <div className='row'>
                      <div className='card-text col-4'>Temp (F)
                      <p>{results.temp}F</p>
                      </div>
                      <div className='card-text col-4'>Pressure
                      <p>{results.pressure}hPa</p>
                      </div>
                      <div className='card-text col-4'>Humidity
                      <p>{results.humidity}%</p>
                      </div>
                    </div>
                    <div className='row'>
                    <div className='card-text col-4'>Lowest Temp (F)
                      <p>{results.tempMin}F</p>
                      </div>
                      <div className='card-text col-4'>Highest Temp (F)
                      <p>{results.tempMax}F</p>
                      </div>
                      <div className='card-text col-4'>Wind Speed
                      <p>{results.wind}mph</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      );
    } else {
      return (
        <div className='city-info-title col-sm-7'>
          <div className='card'>
            <div className='card-header'>City Information</div>
            <div className='card-body'>
              <div className='card-text'>
                <div className='weather-description alert-danger'>Please enter a city name!</div>
              </div>
              <div className='stats-container card'>
              <div className='card-body'>
                    <div className='row'>
                      <div className='card-text col-4'>Temp (F)
                      <p>{results.temp}</p>
                      </div>
                      <div className='card-text col-4'>Pressure
                      <p>{results.pressure}</p>
                      </div>
                      <div className='card-text col-4'>Humidity
                      <p>{results.humidity}</p>
                      </div>
                    </div>
                    <div className='row'>
                    <div className='card-text col-4'>Lowest Temp (F)
                      <p>{results.tempMin}</p>
                      </div>
                      <div className='card-text col-4'>Highest Temp (F)
                      <p>{results.tempMax}</p>
                      </div>
                      <div className='card-text col-4'>Wind Speed
                      <p>{results.wind}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      );
    }
  }
}