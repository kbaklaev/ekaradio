import React, { useReducer } from 'react';
import Player from './components/player'
import { stations } from './common/stationsUrl'
import { reducer } from './common/reducer'
import { initialState } from './common/var'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const callback = (data) => {
    dispatch({ station: data })
  }

  return (
    <div>
      {
        Object.keys(stations).map((station) => (
          <div key={station}>
            {station}
            <Player url={stations[station]} station={station} cb={callback} play={state[station]} />
          </div>
        ))
      }
    </div>
  )
}

export default App;
