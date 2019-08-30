export const PLAY_CARD = 'PLAY_CARD'
export const UPDATE_GAME_STATE = 'UPDATE_GAME_STATE'
export const ERROR = 'ERROR'

export const playCard = (card) => {
  return {
    type: PLAY_CARD,
    payload: card,
    socket: {
      send: true
    }
  }
}

export const emptyGame = {
  playerNo: 0,
  cardCounts: [0, 0, 0, 0],
  visibleHand: [],
  table: [],
  discard: [],
  turn: 0
}
