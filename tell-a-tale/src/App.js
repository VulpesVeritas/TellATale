import './App.css';
import PrimarySearchAppBar from './components/TopBar';
import Index from './pages/Index';
import IniciarSesion from './pages/IniciarSesion';
import Registrarse from './pages/Registrarse';
import Favoritos from './pages/Favoritos';
import Ajustes from './pages/Ajustes';
import Comic from './pages/Comic'
import LeerComic from './pages/LeerComic'
import EditarComic from './pages/EditarComic'
import HistoriasSubidas from './pages/Perfil'
import Notificaciones from './pages/Notificaciones'
import CrearComic from './pages/CrearComic'
import SubirCapComic from './pages/CrearCapComic'
import EditarCapitulo from './pages/editarCapComic'
import Genero from './pages/Genero'
import AgregarModerador from './pages/AgregarModerador'
import HistoriasPendientesDeAprobar from './pages/HistoriasPendientesDeAprobar'
import HistoriaARevisar from './pages/HistoriaARevisar'
import ComicsConReporte from './pages/ComicsConReporte'
import ComicReportado from './pages/ComicReportado'
import ComentariosReportados from './pages/ComentariosReportados'
import ListaComicsEscondidos from './pages/ListaComicsEscondidos'
import ComicEscondido from './pages/ComicEscondido'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment } from 'react';


function App() {
  return (
    <Fragment>
      <Router>
        <PrimarySearchAppBar>
          <Routes>
            <Route exact path="/" element={<Index/>} />
            <Route exact path="/IniciarSesion" element={<IniciarSesion/>} />
            <Route exact path="/Registrarse" element={<Registrarse/>} />
            <Route exact path="/Genero" element={<Genero/>} />

            <Route exact path="/CrearComic" element={<CrearComic/>}/>
            <Route exact path="/EditarComic" element={<EditarComic/>}/>
            <Route exact path="/CrearCapComic" element={<SubirCapComic/>}/>
            <Route exact path="/EditarCapitulo" element={<EditarCapitulo/>}/>

            <Route exact path="/Perfil" element={<HistoriasSubidas/>}/>
            <Route exact path="/Favoritos" element={<Favoritos/>} />

            <Route exact path="/Comic" element={<Comic/>}/>
            <Route exact path="/LeerComic" element={<LeerComic/>}/>

            <Route exact path="/Ajustes" element={<Ajustes/>}/>

            <Route exact path="/AgregarModerador" element={<AgregarModerador/>}/>            
            <Route exact path="/HistoriasPendientesDeAprobar" element={<HistoriasPendientesDeAprobar/>}/>            
            <Route exact path="/HistoriaARevisar" element={<HistoriaARevisar/>}/>            

            <Route exact path="/AgregarModerador" component={AgregarModerador}/>            
            <Route exact path="/HistoriasPendientesDeAprobar" component={HistoriasPendientesDeAprobar}/>            
            <Route exact path="/HistoriaARevisar" component={HistoriaARevisar}/>            
            <Route exact path="/ComicsConReporte" component={ComicsConReporte}/>            
            <Route exact path="/ComicReportado" component={ComicReportado}/>            
            <Route exact path="/ComentariosReportados" component={ComentariosReportados}/>            
            <Route exact path="/ListaComicsEscondidos" component={ListaComicsEscondidos}/>            
            <Route exact path="/ComicEscondido" component={ComicEscondido}/>            


            <Route exact path="/Notificaciones" element={<Notificaciones/>}/>
            
          </Routes>
        </PrimarySearchAppBar>
      </Router>
    </Fragment>

  );
}

export default App;
