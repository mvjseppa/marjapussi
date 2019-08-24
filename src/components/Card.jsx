import React from 'react'
import { connect } from 'react-redux'
import { playCard } from '../actions/GameActions'

class Card extends React.Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    const {cardValue, dispatch} = this.props
    console.log(`${dispatch}`)
    console.log(`clicked card: ${cardValue}`)
    dispatch(playCard(cardValue))
  }

  render () {
    let { cardValue } = this.props
    cardValue = cardValue.replace('H', '♥')
    cardValue = cardValue.replace('S', '♠')
    cardValue = cardValue.replace('D', '♦')
    cardValue = cardValue.replace('C', '♣')

    const divClass = cardValue.startsWith('♥') || cardValue.startsWith('♦')
      ? 'card card-red' : 'card card-black'

    return (
      <div className={divClass} onClick={this.handleClick}>
        {cardValue}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {}
}

export default connect(mapStateToProps)(Card)
