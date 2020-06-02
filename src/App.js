import React from "react";
import "./App.css";
import Home from './demo/Home'
import New from './demo/New'
import Phone from './demo/Phone'
import Redux from './demo/Redux'
import 'antd/dist/antd.css';
import {Route, NavLink} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div className="App">
        <div>
          <NavLink to='/home'>home</NavLink>
          <NavLink to='/phone'>phone</NavLink>
          <NavLink to='/redux'>redux</NavLink>
          <NavLink to='/new'>new</NavLink>

        </div>
        {/* <Home/> */}
        <Route path='/home' component={Home}></Route>
        <Route path='/phone' component={Phone}></Route>
        <Route path='/new' component={New}></Route>
        <Route path='/redux' component={Redux}></Route>

      </div>
    </div>
  );
}

export default App;
