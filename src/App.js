import './App.css';
import LearnJSX from './components/LearnJSX'
import LearnProps from './components/LearnProps';


function App(props) {
  return (
    <div className="App">
      <LearnJSX/>
      <LearnProps age='30'/>
    </div>
  );
}

export default App;
