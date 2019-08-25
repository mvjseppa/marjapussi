import React from 'react'
import { connect } from 'react-redux'
import Card from './Card'

class PlayerCards extends React.Component {
  renderHandCards () {
    const {hand} = this.props.player.cards

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
    const {table} = this.props.player.cards

    return (
      <div className='playerCards'>
        <div className='hand'>{this.renderHandCards()}</div>
        <div className='table'>{table}</div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {}
}

export default connect(mapStateToProps)(PlayerCards)
