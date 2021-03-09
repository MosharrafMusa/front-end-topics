import './App.css';

// import LearnJSX from './components/LearnJSX'
// import LearnProps from './components/LearnProps';
import Greeting from './components/Greet'
import Welcome from './components/Welcome'
import Counter2 from './components/Counter2'
import Moods from './components/Moods'


function App(props) {
  
  return (
    <div className="App">
      <Counter2/>
      <Moods/>
    </div>
  );
}

export default App;
