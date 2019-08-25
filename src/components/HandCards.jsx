import React from 'react'
import { connect } from 'react-redux'
import Card from './Card'

class HandCards extends React.Component {
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

  render () {
    const players = this.props.players

    const hands = players.map((player, i) => {
      const {position} = player
      const handClassName = 'hand' + position
      return <div key={i} className={handClassName}>{this.renderHandCards(player)}</div>
    })

    return (
      <div className='hand-cards'>
        <div className='hand-row'>
          <div className='padding' />
          {hands[0]}
          <div className='padding' />
        </div>
        <div className='hand-row'>
          <div className='padding-half'/>
          {hands[3]}
          <div className='padding'/>
          {hands[1]}
          <div className='padding-half'/>
        </div>
        <div className='hand-row'>
          <div className='padding' />
          {hands[2]}
          <div className='padding' />
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {}
}

export default connect(mapStateToProps)(HandCards)
