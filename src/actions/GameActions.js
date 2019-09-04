export const PLAY_CARD = 'PLAY_CARD'
export const UPDATE_GAME_STATE = 'UPDATE_GAME_STATE'
export const SET_PLAYER_NAME = 'SET_PLAYER_NAME'
export const ERROR = 'ERROR'

export const playCard = (card, gameId, playerId) => {
  return {
    type: PLAY_CARD,
    card,
    gameId,
    playerId,
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
