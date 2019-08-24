import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { createStore } from 'redux'
import {deal, playCard} from './actions/GameActions'
import GameReducer from './reducers/GameReducer'

let store
let unsubscribe

beforeAll(() => {
  store = createStore(GameReducer, window.STATE_FROM_SERVER)
  console.log(store.getState())
  unsubscribe = store.subscribe(() => console.log(store.getState()))
})

it('in the deal every player gets 9 cards', () => {
  store.dispatch(deal())
  const state = store.getState()
  for (let i = 0; i < 4; i++) {
    expect(state.cardCounts[i]).toEqual(9)
  }

  expect(state.turn).toEqual(0)
  expect(state.playerNo).toBeGreaterThanOrEqual(0)
  expect(state.playerNo).toBeLessThan(4)
})

it('when a card is played it goes to the table', () => {
  let state = store.getState()
  while (state.turn < state.playerNo) {
    const lastPlayer = state.turn
    store.dispatch(playCard('dummy'))
    state = store.getState()
    expect(state.cardCounts[lastPlayer]).toEqual(8)
  }

  expect(state.turn).toEqual(state.playerNo)

  const card = state.visibleHand[2]
  store.dispatch(playCard(card))
  state = store.getState()

  expect(state.cardCounts[state.playerNo]).toEqual(8)
  expect(state.visibleHand.includes(card)).toEqual(false)
  expect(state.table.includes(card)).toEqual(true)
})

afterAll(() => {
  unsubscribe()
})
