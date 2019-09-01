import React from 'react'
import { connect } from 'react-redux'
import { createGame, joinGame, listGames } from '../actions/LobbyActions'
import PlayerName from './PlayerName'

class Lobby extends React.Component {
  constructor (props) {
    super(props)
    props.dispatch(listGames())
  }

  checkPlayerName = (playerName) => {
    if (!playerName) {
      window.alert('Player name not set!')
      return false
    }

    return true
  }

  handleJoinClick = gameId => e => {
    const {playerName, dispatch} = this.props
    if (this.checkPlayerName(playerName)) {
      dispatch(joinGame(gameId, playerName, null))
    }
  }

  handleCreateClick = e => {
    const {dispatch, playerName} = this.props
    if (this.checkPlayerName(playerName)) {
      dispatch(createGame(playerName))
    }
  }

  render () {
    const {gameList} = this.props

    let gameDivs = []
    if (gameList) {
      gameDivs = gameList.map((game) => (
        <div key={game.id} onClick={this.handleJoinClick(game.id)}>{game.name}</div>)
      )
    }

    return (
      <div className='lobby'>
        <PlayerName/>
        {gameDivs}
        <input type='button' value='New Game' onClick={this.handleCreateClick}/>
      </div>
    )
  }
}

function mapStateToProps ({LobbyReducer, GameReducer}) {
  return {
    gameList: LobbyReducer.gameList,
    playerName: GameReducer.playerName
  }
}

export default connect(mapStateToProps)(Lobby)
