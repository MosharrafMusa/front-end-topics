import './App.css';

// import LearnJSX from './components/LearnJSX'
// import LearnProps from './components/LearnProps';
import Greeting from './components/Greet'
import Welcome from './components/Welcome'
import Counter3 from './components/Counter3'
import Moods from './components/Moods'
import Counter4 from './components/Counter4'


function App(props) {
  
  return (
    <div className="App">
      <Counter3/>
      <Counter4/>

      <Moods/>
    </div>
  );
}

export default App;
