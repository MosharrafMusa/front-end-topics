
// import LearnJSX from './components/LearnJSX'
// import LearnProps from './components/LearnProps';
import Greeting from './components/Greet'
import Welcome from './components/Welcome'
import Counter from './components/Counter'
import Moods from './components/Moods'
import Counter_4 from './components/Counter_4'
import CounterHook from './hooks/CounterHook'


function App(props) {
  
  return (
    <div className="App">
      <CounterHook initialCount={5}/>
    </div>
  );
}

export default App;
