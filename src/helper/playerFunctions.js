

 export const addToPlayerForm = playerForm => {
    let toCHange =playerForm ;
    console.log ("this toCHaneg ",toCHange)
    return toCHange= toCHange+1;
  };

  
export const submitPlayersButton = playerForm  => {
  return {
    id: playerForm.id, 
    playerName: playerForm.name, 
    matchingPairsWon: [],
    isCurrentTurn: false
  }
}