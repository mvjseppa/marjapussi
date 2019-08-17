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
    expect(state.players[i].length).toEqual(9)
  }
})

it('when a card is played it goes to the table', () => {
  const oldState = store.getState()
  const card = oldState.players[0][3]
  store.dispatch(playCard(card))

  const newState = store.getState()
  expect(newState.players[0].length).toEqual(8)
  expect(newState.players[0].includes(card)).toEqual(false)
  expect(newState.table.length).toEqual(1)
  expect(newState.table.includes(card)).toEqual(true)
  expect(newState.turn).toEqual(1)
})

it('cannot play a card that is not in hand', () => {
  const oldState = store.getState()

  store.dispatch(playCard('QW'))
  expect(store.getState()).toEqual(oldState)
})

afterAll(() => {
  unsubscribe()
})
