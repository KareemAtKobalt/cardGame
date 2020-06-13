import cards from "../data/CardData";

const createNormalCards = cards.numbers.reduce((deck, number) => {
  cards.suites.forEach(suite => {
    deck.push({
      number,
      suite
    });
  });
  //need to add jokers to the deck

  return deck;
}, []);

const createDeck = () => {
  const deck = createNormalCards
  console.log(" Joker ", deck);
 cards.jokers.forEach(card => {
    deck.push({joker:card})
  })

  return deck 

};

export default createDeck();
