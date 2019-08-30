import { combineReducers } from 'redux'
import GameReducer from './GameReducer'
import LobbyReducer from './LobbyReducer'

const reducers = combineReducers({
  GameReducer,
  LobbyReducer
})

export default reducers
