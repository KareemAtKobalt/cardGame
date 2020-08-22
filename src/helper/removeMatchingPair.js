export const removeMatchingPair = state => {
  let currentDeck = state.deckReducer.deck;
  const toBeRemoved = state.playReducer.cardsToBeRemovedFromDeck;
  console.log ( 'toBeRemoved',toBeRemoved)
  console.log ( 'currentDeck ',currentDeck)
  
  const newDeck = toBeRemoved.reduce((prevDeck, cardBeingRemoved) => {
    return prevDeck = toBeRemoved.length > 0
      ? (currentDeck = currentDeck.filter(
          card => cardBeingRemoved.id !== card.id
        ))
      :currentDeck;
  }, []);
  console.log ('newDeck ' ,newDeck);
  return newDeck;
};
