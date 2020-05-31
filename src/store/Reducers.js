import CardData from '../data/CardData'

const initialDeckState = {
    deck: CardData
}

function deckReducer (state=initialDeckState,action){
    switch (action.type){
        default:
            return state
    }
}

export default deckReducer