import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import {getPeople} from '../actions';
import Loader from 'react-loader-spinner';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.getPeople();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      <Loader type="Hearts" color="red" height="90" width="60" />

    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = state => ({
  characters: state.characters,
  fetching: state.fetching
});


export default connect(
  null /* mapStateToProps replaces null here */,
  {
    /* action creators go here */
  }
)(CharacterListView);
