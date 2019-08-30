import {LIST_GAMES, GAME_LIST_READY, JOIN_GAME, CREATE_GAME} from '../actions/LobbyActions'

export default function (state = {}, action) {
  console.log('action received:', action)

  switch (action.type) {
    case GAME_LIST_READY:
      return {gameIds: action.gameIds}

    case LIST_GAMES:
    case JOIN_GAME:
    case CREATE_GAME:
    default:
      return state
  }
}
