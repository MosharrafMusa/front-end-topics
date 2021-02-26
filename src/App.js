import './App.css';
// import LearnJSX from './components/LearnJSX'
// import LearnProps from './components/LearnProps';
import Greeting from './components/Greet'
import Welcome from './components/Welcome'


function App(props) {
  return (
    <div className="App">
      <Greeting/>
      {/* <LearnJSX/>
      <LearnProps age='30'/> */}
      <Welcome/>
    </div>
  );
}

export default App;
