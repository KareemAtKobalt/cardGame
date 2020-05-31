import cards from "../data/CardData";

const createDeck = cards.numbers.reduce((deck, number) => {
  cards.suites.forEach(suite => {
    deck.push({
      number,
      suite
    });
  });
  console.log("///////////////////////////createdeck loop");
  //need to add jokers to the deck
  return deck;
}, []);

export default createDeck;
