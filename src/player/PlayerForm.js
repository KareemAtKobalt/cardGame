import React, { Component } from "react";
import PlayerInput from "./PlayerInput";
import { connect } from "react-redux";
import { clickAddAPlayer, newGame } from "../store/actions/index";

const mapStateToProps = (state) => {
	return {
		playerForm: state.gameReducer.playerForm,
		players: state.gameReducer.players,
	};
};

const mapDispatchToProps = (dispatch, props) => {
	return {
		clickAddPlayer: (e) => {
			e.preventDefault();
			dispatch(clickAddAPlayer());
		},
		clickSubmitPlayers: (e) => {
			e.preventDefault();
			dispatch(newGame());
			props.history.push("/AboutUs");
		},
	};
};

const numberOfPlayerInput = (props) => {
	let arr = [];
	for (let i = 0; i < props.playerForm; i++) {
		arr.push(<PlayerInput key={i} playersProps={props.players[i].id} />);
	}
	return arr;
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
				<button onClick={this.props.clickSubmitPlayers}>Submit</button>
			</form>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerForm);
