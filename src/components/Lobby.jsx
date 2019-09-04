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

  renderGameList = () => {
    const {gameList} = this.props

    if (gameList) {
      return (
        <menu>
          {
            gameList.map((game) => (
              <li key={game.id}>
                {game.name}
                <input type='button' value='Join' onClick={this.handleJoinClick(game.id)}/>
              </li>
            ))
          }
        </menu>
      )
    }

    return null
  }

  render () {
    const {playerName} = this.props

    if (!playerName) {
      return (
        <div className='lobby'>
          <PlayerName/>
        </div>
      )
    }

    return (
      <div className='lobby'>
        <h2>Hello, {playerName}! Select a game:</h2>
        {this.renderGameList()}
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
