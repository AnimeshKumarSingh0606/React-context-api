import React from 'react';
import { StateProvider } from './contexts/State'
import GlobalStateCounter from './components/GlobalStateCounter'
import './App.scss'

function App() {
  const initialState = {
    points: 0
  }
  
  const reducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return { ...state, points: state.points + 1 }
        case 'subtract':
            return { ...state, points: state.points - 1 }
        case 'reset':
            return { ...state, points: 0 }
        default:
            return state;
    }
  };
  
  return (
    <div className="App">
      <StateProvider initialState={initialState} reducer={reducer}>
          {
              [...Array(2)].map((e, i) => <GlobalStateCounter index={i + 1}/> )
          }
      </StateProvider>
    </div>
  )
}

export default App