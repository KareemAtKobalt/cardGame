import React from "react";
import "./Card.css";


const renderSwitch = (card) => {
  if (card.number) {
    switch (card.number) {
      case 1:
        return "Ace"
      case 11:
        return "Jack"
      case 12:
        return "Queen"
      case 13:
        return "King"
      default:
        return card.number
    }
  }
  if (card.joker) {
    return "Joker"
  }


}

const Card = ({ card }) => {
  console.log("Card ", card)

  return (
    <div className="Card" >
      {renderSwitch(card)}
      <br />
      {card.suite}
    </div>
  );
}

export default Card;


