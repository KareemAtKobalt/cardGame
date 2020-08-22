export const changePlayersCurrentTurn = (playersIds, playersState) => {
  const { currentPlayerId, nextPlayerId } = playersIds;
  playersState.forEach(playerState => {
    if (playerState.id === currentPlayerId) playerState.isCurrentTurn = false;
    if (playerState.id === nextPlayerId) playerState.isCurrentTurn = true;
  });
  return playersState;
};
