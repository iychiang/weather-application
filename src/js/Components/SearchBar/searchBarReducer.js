const defaultState = {
  input: '',
  results: {
    longitude: '',
    latitude: '',
    weatherMain: '',
    weatherDescription: '',
    weatherIcon: '',
    temp: '',
    pressure: '', 
    humidity: '',
    tempMin: '',
    tempMax: '',
    wind: '',
    name: ''
  },
  history: []
}

export default function searchBarReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'UPDATE_SEARCH_INPUT': {
      return {
        ...state,
        input: payload.input
      };
    }

    case 'PRELOAD_CITY': {
      return {
        ...state,
        input: payload.input
      }
    }

    case 'GET_SEARCH_RESULTS_FULFILLED': {
      return {
        ...state,
        results: {
          longitude: payload.coord.lon,
          latitude: payload.coord.lat,
          weatherMain: payload.weather[0].main,
          weatherDescription: payload.weather[0].description,
          weatherIcon: payload.weather[0].icon,
          temp: payload.main.temp,
          pressure: payload.main.pressure,
          humidity: payload.main.humidity,
          tempMin: payload.main.temp_min,
          tempMax: payload.main.temp_max,
          wind: payload.wind.speed,
          name: payload.name
        }
      }
    }

    case 'HANDLE_HISTORY': {
      return {
        ...state,
        history: [...state.history, {input: payload.input, datetime: payload.datetime}]
      }
    }

    default: {
      return state;
    }

  }
}