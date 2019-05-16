import /* we need our action types here*/ { FETCHING_DATA, DATA_SUCCESS, DATA_FAILURE } from "../actions";

const initialState = {
  characters: [],
  // Array characters, Boolean fetching, null error.
  fetching: false,
  error: null
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
      case FETCHING_DATA:
        return {
          // perform state change for these actions
          ...state,
          fetching: true,
          error: "Fetching Data Now."
        };

      case DATA_SUCCESS:
        return {
          // perform state change for these actions
          ...state,
          fetching: false,
          error: null,
          characters: action.payload
        };

      case DATA_FAILURE:
        return {
          // perform state change for these actions
          ...state,
          fetching: false,
          error: action.payload
        };

    default:
      return state;
  }
};
