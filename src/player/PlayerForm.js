import React, { Component } from "react";
import PlayerInput from "./PlayerInput";
import { connect } from "react-redux";
import { clickAddAPlayer } from "../action/action";

const mapStateToProps = state => {
  return { playerForm: state.gameReducer.playerForm };
};

const mapDispatchToProps = dispatch => {

  return { clickAddPlayer: (e) => { 
    e.preventDefault() ; 
    dispatch(clickAddAPlayer());
  } };
};

// const numberOfPlayerInput = props => {
//   for (let i = 0; i < props; i++) {
//     console.log("look at me 2 ", props);
//     return <PlayerInput />;
    
//   }
// };

class PlayerForm extends Component {
  renderPlayerForm = () => {
    const playerForm = this.props.playerForm;
    for (let i = 0; i < playerForm; i++) {
      console.log("look at me 2 ", playerForm);
      return <PlayerInput />;
      
    }

  };

  render() {
    console.log(this.props.playerForm)
    return (
      <form>
        <button onClick={this.props.clickAddPlayer}>ADD PLAYER</button>
        {this.renderPlayerForm()}
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
