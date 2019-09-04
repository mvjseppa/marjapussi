import React from 'react'
import { connect } from 'react-redux'
import { setPlayerName } from '../actions/GameActions'

class PlayerName extends React.Component {
  handleSubmit = (e) => {
    if (e) { e.preventDefault() }
    const {dispatch} = this.props
    const playerName = this.nameInput.value
    dispatch(setPlayerName(playerName))
  }

  render () {
    const {playerName} = this.props

    if (playerName) {
      return (<div>{playerName}</div>)
    } else {
      return (
        <form onSubmit={this.handleSubmit}>
          <h2>Welcome! Who are you?</h2>
          <input type='text' placeholder='Enter your name' ref={(e) => { this.nameInput = e }}/>
          <input type='submit' value='set name' />
        </form>
      )
    }
  }
}

function mapStateToProps ({GameReducer}) {
  return {
    playerName: GameReducer.playerName
  }
}

export default connect(mapStateToProps)(PlayerName)
