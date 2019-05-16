// we'll need axios
import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCHING_DATA = 'FETCHING_DATA';
export const DATA_SUCCESS = 'DATA_SUCCESS';
export const DATA_FAILURE = 'DATA_FAILURE';

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have control over our thunk-based action creator

export const getPeople = () => dispatch => {
    dispatch({type:FETCHING_DATA});
    
    axios.get('https://swapi.co/api/people/')
    .then(res => {
        console.log(res)
        dispatch({type:DATA_SUCCESS, payload: res.data.results})
        
    })
    .catch(err => {
        console.log(err)
        dispatch({type:DATA_FAILURE, payload:err})
       
    })
};

