export const nextPlayerTurn = (currentPlayerId, numberOfPlayers) => {
  const test = currentPlayerId === numberOfPlayers
    ? { currentPlayerId, nextPlayerId: 1 }
    : { currentPlayerId, nextPlayerId: currentPlayerId+1 };
    
    return test;
};
