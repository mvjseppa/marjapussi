import { PLAY_CARD, DEAL, emptyGame } from '../actions/GameActions'

export default function (state = emptyGame, action) {
  console.log('action received:', action.type)

  switch (action.type) {
    case DEAL:
      return action.payload

    case PLAY_CARD:
      const card = action.payload
      const player = state.turn % 4

      if (state.players[player].includes(card)) {
        let newState = {...state}
        newState.turn++
        newState.players[player] = newState.players[player].filter(c => c !== card)
        newState.table.push(card)

        if (newState.table.length >= 4) {
          console.log('Trick is full, should score here!')
        }

        return newState
      }

      return state

    default:
      return state
  }
}
