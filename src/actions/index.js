// we'll need axios
import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
const FETCHING_DATA = 'FETCHING_DATA';
const DATA_SUCCESS = 'DATA_SUCCESS';
const DATA_FAILURE = 'DATA_FAILURE';

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have control over our thunk-based action creator


