import './App.css';
import PrimarySearchAppBar from './components/TopBar';
import Index from './pages/Index';
import Favoritos from './pages/Favoritos';
import Ajustes from './pages/Ajustes';
import ComicEsp from './pages/ComicEsp'
import EditarHistoria from './pages/EditarHistoria'
import HistoriasSubidas from './pages/HistoriasSubidas'
import Notificaciones from './pages/Notificaciones'
import SubirComic from './pages/SubirComic'

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
            <Route exact path="/Ajustes" component={Ajustes}/>
            <Route exact path="/Comic" component={ComicEsp}/>
            <Route exact path="/Editar" component={EditarHistoria}/>
            <Route exact path="/MisHistorias" component={HistoriasSubidas}/>
            <Route exact path="/Notificaciones" component={Notificaciones}/>
            <Route exact path="/Subir" component={SubirComic}/>
          </Switch>
        </PrimarySearchAppBar>
      </Router>
    </Fragment>

  );
}

export default App;
