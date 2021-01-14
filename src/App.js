import './App.css';
import Header from './Header';
import Home from './Home';
import WebsiteTemplates from "./WebsiteTemplates";
import SourceCode from "./SourceCode";
import Links from "./Links";
import { Switch , Route, Redirect, BrowserRouter } from "react-router-dom";
import React from "react";
import Theme from './Theme';

function App() {
  const [darkMode, setDarkMode] = React.useState(false)
  return (
    <div className={darkMode ? "App-dark" : "App-light"}>
            <div className="toggle-container" >
        <label className="toggle">
          <input type="checkbox" onClick={() => setDarkMode(prevMode => !prevMode)} />
          <span className="slider round material-icons"></span>
        </label>
      </div>
      <BrowserRouter>
      <Switch>
        <Route exact path='/' component={SourceCode}/>
        <Route exact path = "/websitetemplates" component = {WebsiteTemplates} />
        {/* <Route exact path = "/sourcecode" component = {SourceCode} /> */}
        <Route exact path = "/links" component = {Links} />
        <Redirect to= "/" />
      </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
