import './App.css';
import Header from './Header';
import Home from './Home';
import WebsiteTemplates from "./WebsiteTemplates";
import SourceCode from "./SourceCode";
import Links from "./Links";
import { Switch , Route, Redirect, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
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
