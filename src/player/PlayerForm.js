import React, { Component } from "react";
import PlayerInput from "./PlayerInput";
import { connect } from "react-redux";
import { clickAddAPlayer, clickSubmitPlayers } from "../action/action";

const mapStateToProps = state => {
  return {
    playerForm: state.gameReducer.playerForm ,
    players: state.gameReducer.players
  };
};

const mapDispatchToProps = dispatch => {

  return {
    clickAddPlayer: (e) => {
      e.preventDefault();
      dispatch(clickAddAPlayer());
    },
    clickSubmitPlayers: (e) => {
      e.prevntDefault();
      dispatch(clickSubmitPlayers());
    }
  };
};

const numberOfPlayerInput = props => {
  let arr = []
  for (let i = 0; i < props.playerForm; i++) {
    arr.push(<PlayerInput key={i} playersProps={props.players[i].id} />);
  }
  return arr
};

class PlayerForm extends Component {
  render() {
    return (
      <form>
        <button onClick={this.props.clickAddPlayer}>ADD PLAYER</button>
        {numberOfPlayerInput(this.props)}
        <br />
        <br />
        <br />
        <input type="submit" value="submit" onClick={this.props.clickSubmitPlayers} />
      </form>
    );

  }

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerForm);
