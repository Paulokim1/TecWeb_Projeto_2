import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import Teams from "./components/Teams"

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src='poketeam.png' />
      </div>
      <Teams />
    </div>
  );
}

export default App;
