import React from 'react'
import { connect } from 'react-redux'
import { createGame, joinGame, listGames } from '../actions/LobbyActions'

class Lobby extends React.Component {
  constructor (props) {
    super(props)
    props.dispatch(listGames())
  }

  handleJoinClick = gameId => e => {
    const {dispatch} = this.props
    dispatch(joinGame(gameId, null))
  }

  handleCreateClick = e => {
    const {dispatch} = this.props
    dispatch(createGame())
  }

  render () {
    const gameIds = this.props.gameIds

    let gameDivs = []
    if (gameIds) {
      gameDivs = gameIds.map((gameId) => (
        <div key={gameId} onClick={this.handleJoinClick(gameId)}>{gameId}</div>)
      )
    }

    return (
      <div className='lobby'>
        {gameDivs}
        <div onClick={this.handleCreateClick}>Create game</div>
      </div>
    )
  }
}

function mapStateToProps ({LobbyReducer}) {
  return {gameIds: LobbyReducer.gameIds}
}

export default connect(mapStateToProps)(Lobby)
