import React, {useState} from 'react'
// import LearnJSX from './components/LearnJSX'
// import LearnProps from './components/LearnProps';
import Greeting from './components/Greet'
import Welcome from './components/Welcome'
import Counter from './components/Counter'
import Moods from './components/Moods'
import Counter_4 from './components/Counter_4'
import CounterHook from './hooks/CounterHook'

export const ThemeContext = React.createContext()


function App(props) {
  const [theme, setTheme]= useState('red')
  
  return (
    <ThemeContext.Provider value = {{backgroundColor: theme}}>
    <div className="App">
      <CounterHook initialCount={5}/>
    </div>
    <button onClick={()=>setTheme(prevTheme=>{
      return prevTheme==='red'? 'blue': 'red'
    })}>
      Toggle Theme
    </button>
    </ThemeContext.Provider>
  );
}

export default App;
