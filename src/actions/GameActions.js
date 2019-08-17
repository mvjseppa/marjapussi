export const PLAY_CARD = 'PLAY_CARD'
export const DEAL = 'DEAL'

export const playCard = (card) => {
  return {
    type: PLAY_CARD,
    payload: card
  }
}

export const deal = () => {
  return {
    type: DEAL,
    payload: shuffleAndDeal()
  }
}

export const emptyGame = {
  players: [[], [], [], []],
  table: [],
  discard: [],
  turn: 0
}

// Marjapussi card values from highest to lowest
const cardNumbers = ['A', '10', 'K', 'D', 'J', '9', '8', '7', '6']
const cardSuits = ['H', 'S', 'D', 'C']
const deck = cardSuits.flatMap(d => cardNumbers.map(v => d + v))

const shuffleAndDeal = () => {
  let shuffled = [...deck]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }

  return {
    ...emptyGame,
    players: [
      shuffled.slice(0, 9),
      shuffled.slice(9, 18),
      shuffled.slice(18, 27),
      shuffled.slice(27, 36)
    ]
  }
}