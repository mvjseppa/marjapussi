import React from 'react'
import logo from './logo.svg'
import './App.css'
import HandCards from './components/HandCards'
import TableCards from './components/TableCards'

const players = [
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
      'table': 'DQ',
      'won': []
    },
    'position': 0,
    'score': 0
  },
  {
    'id': '152e7da3-0b22-4ced-8dc9-0db9eeba973d',
    'connection_id': 'e4DZ3c-qFiACEJQ=',
    'cards': {
      'hand': 3,
      'table': 'HK',
      'won': []
    },
    'position': 1,
    'score': 0
  },
  {
    'id': '152e7da3-0b22-4ced-8dc9-0db9eeba973d',
    'connection_id': 'e4DZ3c-qFiACEJQ=',
    'cards': {
      'hand': 6,
      'table': 'SA',
      'won': []
    },
    'position': 2,
    'score': 0
  },
  {
    'id': '152e7da3-0b22-4ced-8dc9-0db9eeba973d',
    'connection_id': 'e4DZ3c-qFiACEJQ=',
    'cards': {
      'hand': 9,
      'table': 'CA',
      'won': []
    },
    'position': 3,
    'score': 0
  }
]

function App () {
  return (
    <div className="App">
      <HandCards players={players}/>
      <TableCards players={players}/>
    </div>
  )
}

export default App
