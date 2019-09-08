import React from 'react'
import { connect } from 'react-redux'
import Card from './Card'

class HandCards extends React.Component {
  renderHandCards = (player) => {
    const {hand} = player.cards

    if (Array.isArray(hand)) {
      return hand.map((card, i) => (<Card key={i} cardValue={card} overlap={hand.length / 13} />))
    } else {
      let cards = []
      for (let i = 0; i < hand; i++) {
        cards.push(<Card key={i} cardValue='B3' overlap={hand / 13}/>)
      }
      return cards
    }
  }

  renderWaitingForPlayers = () => {
    return (
      <div>
        <div>Waiting for Players</div>
        {
          this.props.players.map(player => {
            if (player) return (<div>{player.name}</div>)
            return null
          })
        }
      </div>
    )
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
    const {players} = this.props

    if (players.includes(null)) {
      return this.renderWaitingForPlayers()
    }

    this.sortPlayers()

    const hands = players.map((player, i) => {
      const {position, name} = player
      const handClassName = 'hand' + i
      return (
        <div className='hand-card-wrapper'>
          <div className={handClassName} key={position}>{this.renderHandCards(player)}</div>
          <div className='player-name'>{name}</div>
        </div>
      )
    })

    return (
      <div className='hand-cards'>
        <div className='hand-horizontal'>{hands[2]}</div>
        <div className='hand-vertical'>
          {hands[1]}
          {hands[3]}
        </div>
        <div className='hand-horizontal'>{hands[0]}</div>
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

export default connect(mapStateToProps)(HandCards)
