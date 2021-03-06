import React from 'react'
import { connect } from 'react-redux'
import { playCard } from '../actions/GameActions'

import cards from '../svg/svg-cards.svg'

class Card extends React.Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    const {cardValue, dispatch, gameId, playerId} = this.props
    console.log(`${dispatch}`)
    console.log(`clicked card: ${cardValue}`)
    dispatch(playCard(cardValue, gameId, playerId))
  }

  getCardViewBox () {
    const width = 167.552307692
    const height = 243.238

    let { cardValue } = this.props

    const svgViewBoxLookup = {
      'A': 0,
      'K': 12,
      'Q': 11,
      'J': 10,
      'C': 0,
      'D': 1,
      'H': 2,
      'S': 3,
      'B': 4
    }

    const row = svgViewBoxLookup[cardValue.slice(0, 1)]
    const cardNumber = cardValue.slice(1)

    let column = svgViewBoxLookup[cardNumber]

    if (column === undefined) {
      column = (parseInt(cardNumber) - 1)
    }

    return `${column * width} ${row * height} ${width} ${height}`
  }

  render () {
    let { cardValue, overlap } = this.props

    if (cardValue === null) {
      return <div/>
    }

    const viewBox = this.getCardViewBox()

    const src = `${cards}`

    const divClass = cardValue.startsWith('♥') || cardValue.startsWith('♦')
      ? 'card card-red' : 'card card-black'

    const margin = overlap ? `${-12 * overlap}vh` : 0
    console.log(margin)

    return (
      <div className={divClass} onClick={this.handleClick} style={{marginRight: margin}}>
        <svg width="100%" height="100%" viewBox={viewBox} >
          <image href={src} />
        </svg>
      </div>
    )
  }
}

function mapStateToProps ({GameReducer}) {
  return {
    playerId: GameReducer.playerId,
    gameId: GameReducer.gameId
  }
}

export default connect(mapStateToProps)(Card)
