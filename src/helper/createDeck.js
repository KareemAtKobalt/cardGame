import cards from "../data/CardData";
let idCreator = 1
const createNormalCards = cards.numbers.reduce((deck, number) => {
  cards.suites.forEach((suite) => {
    deck.push({
      number,
      suite,
      id: idCreator

    });
    idCreator++
  });

  return deck;
}, []);

const createDeck = () => {
  const deck = createNormalCards;
  cards.jokers.forEach(card => {
    deck.push({ joker: card, id: idCreator });
    idCreator++
  });

  return deck;
};



export default createDeck();
