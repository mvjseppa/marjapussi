import React from 'react'
import { connect } from 'react-redux'
import Card from './Card'

class TableCards extends React.Component {
  renderHandCards (player) {
    const {hand} = player.cards

    if (Array.isArray(hand)) {
      return hand.map((card, i) => (<Card key={i} cardValue={card} />))
    } else {
      let cards = []
      for (let i = 0; i < hand; i++) {
        cards.push(<Card key={i} cardValue='X' />)
      }
      return cards
    }
  }

  sortPlayers = () => {
    const {players, playerId} = this.props
    for (let i = 0; i < 4; i++) {
      if (players[0].id !== playerId) {
        players.push(players.shift())
      }
    }
  }

  render () {
    const players = this.props.players

    if (players.includes(null)) {
      return <div/>
    }

    this.sortPlayers()

    const tableCards = players.map((player, i) => {
      const {position} = player
      const tableClassName = 'table' + i
      console.log(player)
      console.log(player.cards.table)
      return <div key={i} className={tableClassName} style={{zIndex: position}}>
        <Card cardValue={player.cards.table}/>
      </div>
    })

    return (
      <div className='table-cards'>
        {tableCards}
      </div>
    )
  }
}

function mapStateToProps ({GameReducer}) {
  return {
    playerId: GameReducer.playerId,
    players: GameReducer.gameState.players
  }
}

export default connect(mapStateToProps)(TableCards)
