import React, { Component } from "react";
import { connect } from "react-redux";
import { submitPlayerName } from "../store/actions/index";

const mapStateToProps = (state) => {
	return { players: state.gameReducer.players };
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		changeHandler: (event) => {
			dispatch(
				submitPlayerName({
					id: ownProps.playersProps,
					name: event.target.value,
				})
			);
		},
	};
};

class PlayerInput extends Component {
	render() {
		return (
			<label>
				Player Name
				<input type='text' name='playerName' placeholder='add player name' onChange={this.props.changeHandler} />
			</label>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerInput);
