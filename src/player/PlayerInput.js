import React, { Component } from "react";
import { connect } from "react-redux";
import {  clickSubmitPlayers } from "../action/action";
//import {store} from '../../store/store'



const mapStateToProps = state => {
  return { players: state.gameReducer.players };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {

    changeHandler: (event) => {
      console.log (" pl id",ownProps )
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
      </label>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerInput);
