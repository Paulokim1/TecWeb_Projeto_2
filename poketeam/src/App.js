import logo from './logo.svg';
import './App.css';
import { NavLink } from "react-router-dom";
import Home from "./components/Home";
import Team from "./components/Team";
import Teams from "./components/Teams";
import Header from "./components/Header";
import Search from "./components/Search";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


function App() {
  return (

      <div className="App">
        <Header className="App-header"/>
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/teams" element = {<Teams />} />
          <Route path = "/team" element = {<Team />} />
          <Route path = "/search" element = {<Search />} />
            
        </Routes>
      </div>

  );
}

export default App;
