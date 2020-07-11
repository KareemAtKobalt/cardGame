import React, { Component } from "react";
import { connect } from "react-redux";
import {  clickSubmitPlayers } from "../action/action";


const mapStateToProps = state => {
  return { players: state.gameReducer.players };
};

const mapDispatchToProps = dispatch => {

  return {

    changeHandler: (event) => {
     // console.log (" pl id", this.key)
      console.log (" pl id2",  event.target.value)
      dispatch( clickSubmitPlayers ({
        name: event.target.value
      }))

    }
  };
};


class PlayerInput extends Component {
  render() {
    return (
      <label>
        Player Name
        <input type="text" name="playerName" placeholder="add player name" onChange={this.props.changeHandler} />
        {console.log ("Hello", this.props)}
      </label>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerInput);
