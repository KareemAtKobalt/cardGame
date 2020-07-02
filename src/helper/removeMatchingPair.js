import cards from "../data/CardData";



export const removeMatchingPair = (state) => {
    let currentDeck = state.deckReducer.deck;
    const toBeRemoved = state.playReducer.cardsToBeRemoved;
    const newDeck = toBeRemoved.reduce((prevDeck, cardBeingRemoved) => {
        return currentDeck= currentDeck.filter(card => cardBeingRemoved.id !== card.id)
    }
        , [])

    return newDeck
};

//export default removeMatchingPair();
