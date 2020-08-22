export const addToPlayerForm = playerForm => {
  let toCHange = playerForm;
  return (toCHange = toCHange + 1);
};

export const changePlayerName = (player, playersState) => {
  playersState.forEach(playerState => {
    if (player.id === playerState.id) {
      playerState.name = player.name;
    }
  });
  return playersState;
};
