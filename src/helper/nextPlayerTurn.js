export const nextPlayerTurn = (currentPlayerId, numberOfPlayers) => {
  return currentPlayerId === numberOfPlayers
    ? { currentPlayerId, nextPlayerId: 0 }
    : { currentPlayerId, nextPlayerId: currentPlayerId++ };
};
