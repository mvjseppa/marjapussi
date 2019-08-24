import { PLAY_CARD, DEAL, emptyGame } from '../actions/GameActions'

export default function (state = emptyGame, action) {
  console.log('action received:', action.type)

  switch (action.type) {
    case DEAL:
      return action.payload

    case PLAY_CARD:
      const card = action.payload

      let newState = {...state}
      newState.table.push(card)
      newState.cardCounts[newState.turn]--
      if (state.turn === state.playerNo) {
        newState.visibleHand = newState.visibleHand.filter(c => c !== card)
      }
      newState.turn = state.turn < 3 ? state.turn + 1 : 0

      if (newState.table.length >= 4) {
        console.log('Trick is full, should score here!')
      }

      return newState

    default:
      return state
  }
}
