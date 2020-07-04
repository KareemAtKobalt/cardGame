import React, { Component } from "react";
import PlayerInput from "./PlayerInput";
import { connect } from "react-redux";
import { clickAddAPlayer } from "../action/action";

const mapStateToProps = state => {
  return { playerForm: state.gameReducer.playerForm };
};

const mapDispatchToProps = dispatch => {
  return { clickAddPlayer: () => dispatch(clickAddAPlayer()) };
};

const numberOfPlayerInput = props => {
  console.log("look at me", props);
  for (let i = 0; i < props.playerForm; i++) {
    return <PlayerInput />;
  }
};

class PlayerForm extends Component {
  clickAddAPlayer = () => {
    this.props.clickAddPlayer();
  };

  render() {
    return (
      <form>
        <button onClick={this.clickAddAPlayer}>ADD PLAYER</button>
        {numberOfPlayerInput(this.props.playerForm)}
        {/* {store.getState().playerForm} */}
        <br />
        <br />
        <br />
        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerForm);
