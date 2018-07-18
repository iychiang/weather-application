import axios from 'axios';

export function updateSearchInput(input) {
  return {
    type: 'UPDATE_SEARCH_INPUT',
    payload: { input }
  };
}

export function preloadCity(input) {
  return {
    type: 'PRELOAD_CITY',
    payload: { input }
  }
}


export function getSearchResults(input) {
  return {
    type: 'GET_SEARCH_RESULTS',
    payload:
      axios.get(`/api/getWeather/${input}`)
        .then(response => response.data)
        .catch(error => console.log(error))
  }
}

export function handleHistory(input) {
  return {
    type: 'HANDLE_HISTORY',
    payload: {
      input,
      datetime: new Date().toLocaleString()
    }
  }
}