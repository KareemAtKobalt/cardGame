import React, { Component } from "react";
import PlayerInput from "./PlayerInput";
import { connect } from "react-redux";
import { clickAddAPlayer } from "../action/action";

const mapStateToProps = state => {
  return { playerForm: state.gameReducer.playerForm };
};

const mapDispatchToProps = dispatch => {

  return {
    clickAddPlayer: (e) => {
      e.preventDefault();
      dispatch(clickAddAPlayer());
    }
  };
};

const numberOfPlayerInput = props => {
  let arr = []
  for (let i = 0; i < props; i++) {
    arr.push(<PlayerInput />);
    console.log("arr", arr)
  }
  return arr
};

class PlayerForm extends Component {
  render() {
    return (
      <form>
        <button onClick={this.props.clickAddPlayer}>ADD PLAYER</button>
        {numberOfPlayerInput(this.props.playerForm)}
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
