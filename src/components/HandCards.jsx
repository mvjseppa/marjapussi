import React from 'react'
import { connect } from 'react-redux'
import Card from './Card'

class HandCards extends React.Component {
  renderHandCards (player) {
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

  render () {
    const players = this.props.players

    const hands = players.map((player, i) => {
      const {position} = player
      const handClassName = 'hand' + position
      return <div key={i} className={handClassName}>{this.renderHandCards(player)}</div>
    })

    return (
      <div className='hand-cards'>
        <div className='hand-horizontal'>{hands[0]}</div>
        <div className='hand-vertical'>
          {hands[3]}
          {hands[1]}
        </div>
        <div className='hand-horizontal'>{hands[2]}</div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {}
}

export default connect(mapStateToProps)(HandCards)
