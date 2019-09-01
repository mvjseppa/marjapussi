import { PLAY_CARD, UPDATE_GAME_STATE, ERROR, SET_PLAYER_NAME } from '../actions/GameActions'

const initialState = {
  gameId: null,
  playerId: null,
  gameState: null
}

export default function (state = initialState, action) {
  console.log('action received:', action.type)

  switch (action.type) {
    case UPDATE_GAME_STATE:
      if (state.gameId !== null && action.gameId !== state.gameId) {
        console.log('invalid state: gameId')
        return state
      }

      if (state.playerId !== null && action.playerId !== state.playerId) {
        console.log('invalid state: playerId')
        return state
      }

      return {
        ...state,
        gameId: action.gameId,
        playerId: action.playerId,
        gameState: action.gameState
      }

    case SET_PLAYER_NAME:
      return {...state, playerName: action.playerName}

    case ERROR:
      console.error('Error: ' + action.message)
      return state

    case PLAY_CARD:
    default:
      return state
  }
}
