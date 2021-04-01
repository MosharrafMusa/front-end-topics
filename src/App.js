import React, {useState} from 'react'
import CounterHooks2 from './hooks/CounterHooks2'


export const ThemeContext = React.createContext()

const App = () => {
  const [theme, setTheme] = useState('red')
  return (
    <ThemeContext.Provider value ={{backgroundColor: theme}}>
      <CounterHooks2 initialCount = {5}/>
      <button onClick={()=>setTheme(prevTheme=>
        {
          return prevTheme==='red'?'green':'red'
        })}>Toggle Theme</button>
    </ThemeContext.Provider>
    
  )
}

export default App

