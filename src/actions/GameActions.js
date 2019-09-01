export const PLAY_CARD = 'PLAY_CARD'
export const UPDATE_GAME_STATE = 'UPDATE_GAME_STATE'
export const SET_PLAYER_NAME = 'SET_PLAYER_NAME'
export const ERROR = 'ERROR'

export const playCard = (card) => {
  return {
    type: PLAY_CARD,
    card,
    socket: {
      send: true
    }
  }
}

export const setPlayerName = (playerName) => {
  return {
    type: SET_PLAYER_NAME,
    playerName,
    socket: {
      send: false
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
