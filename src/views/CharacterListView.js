import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { getPeople } from '../actions';
import Loader from 'react-loader-spinner';

class CharacterListView extends React.Component {
  

  componentDidMount() {
    // call our action
    this.props.getPeople();
  };


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
  characters: state.charsReducer.characters,
  fetching: state.charsReducer.fetching
});



export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    /* action creators go here */
    getPeople
  }
)(CharacterListView);
