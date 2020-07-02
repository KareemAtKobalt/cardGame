export const removeMatchingPair = state => {
  let currentDeck = state.deckReducer.deck;
  const toBeRemoved = state.playReducer.cardsToBeRemovedFromDeck;
  const newDeck = toBeRemoved.reduce((prevDeck, cardBeingRemoved) => {
    return (currentDeck = currentDeck.filter(
      card => cardBeingRemoved.id !== card.id
    ));
  }, []);

  return newDeck;
};
