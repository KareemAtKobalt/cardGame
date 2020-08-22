export const removeMatchingPair = state => {
  let currentDeck = state.deckReducer.deck;
  const toBeRemoved = state.playReducer.cardsToBeRemovedFromDeck;
  const newDeck = toBeRemoved.reduce((prevDeck, cardBeingRemoved) => {
    return toBeRemoved.length > 0
      ? (currentDeck = currentDeck.filter(
          card => cardBeingRemoved.id !== card.id
        ))
      : currentDeck;
  }, []);

  return newDeck;
};
