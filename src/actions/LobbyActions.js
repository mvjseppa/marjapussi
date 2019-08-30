export const LIST_GAMES = 'LIST_GAMES'
export const JOIN_GAME = 'JOIN_GAME'
export const CREATE_GAME = 'CREATE_GAME'
export const GAME_LIST_READY = 'GAME_LIST_READY'

export const listGames = () => {
  return {
    type: LIST_GAMES,
    payload: {},
    socket: {
      send: true
    }
  }
}

export const createGame = () => {
  return {
    type: CREATE_GAME,
    payload: {},
    socket: {
      send: true
    }
  }
}

export const joinGame = (gameId, playerId) => {
  return {
    type: JOIN_GAME,
    gameId,
    playerId,
    socket: {
      send: true
    }
  }
}
