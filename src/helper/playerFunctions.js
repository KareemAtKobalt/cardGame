export const changePlayerName = (player, playersState) => {
	playersState.forEach((playerState) => {
		if (player.id === playerState.id) {
			playerState.name = player.name;
		}
	});
	return playersState;
};

export const firstPlayTurn = (state) => {
	state[0].isCurrentTurn = true;
	return state;
};
