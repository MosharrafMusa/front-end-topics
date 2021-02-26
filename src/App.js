import './App.css';
// import LearnJSX from './components/LearnJSX'
// import LearnProps from './components/LearnProps';
import Greet from './components/Greet'


function App(props) {
  return (
    <div className="App">
      <Greet/>
      {/* <LearnJSX/>
      <LearnProps age='30'/> */}
    </div>
  );
}

export default App;
