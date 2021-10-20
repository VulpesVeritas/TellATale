import './App.css';
import PrimarySearchAppBar from './components/TopBar';
import Index from './pages/Index';
import Favoritos from './pages/Favoritos';


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Fragment } from 'react';


function App() {
  return (
    <Fragment>
      <Router>
        <PrimarySearchAppBar>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/Favoritos" component={Favoritos} />
          </Switch>
        </PrimarySearchAppBar>
      </Router>
    </Fragment>

  );
}

export default App;
