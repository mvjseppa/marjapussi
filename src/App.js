import React from 'react'
import { connect } from 'react-redux'
import './App.css'
import HandCards from './components/HandCards'
import TableCards from './components/TableCards'
import Lobby from './components/Lobby'

class App extends React.Component {
  renderLobby = () => {
    return (
      <div className="App">
        <Lobby/>
      </div>
    )
  }

  renderGame = () => {
    const {gameState} = this.props
    return (
      <div className="App">
        <HandCards players={gameState.players}/>
        <TableCards players={gameState.players}/>
      </div>
    )
  }

  render () {
    const {gameState} = this.props
    if (gameState !== null) {
      return this.renderGame()
    }

    return this.renderLobby()
  }
}

const mapStateToProps = ({GameReducer, LobbyReducer}) => {
  console.log('App state change!')
  console.log(GameReducer)
  return {
    gameState: GameReducer.gameState
  }
}

export default connect(mapStateToProps)(App)
