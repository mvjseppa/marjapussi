import React from 'react'
import logo from './logo.svg'
import './App.css'
import PlayerCards from './components/PlayerCards'

const player =
      {
        'id': '152e7da3-0b22-4ced-8dc9-0db9eeba973d',
        'connection_id': 'e4DZ3c-qFiACEJQ=',
        'cards': {
          'hand': [
            'HJ',
            'C10',
            'S10',
            'SJ',
            'S9',
            'SK',
            'HA',
            'H10'
          ],
          'table': null,
          'won': [
            [
              'SA',
              'CA',
              'DA',
              'HQ'
            ]
          ]
        },
        'position': 0,
        'score': 0
      }

function App () {
  return (
    <div className="App">
      <PlayerCards player={player}/>
    </div>
  )
}

export default App
