import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Usuarios from './components/Usuarios/Usuarios'
import Usuario from './components/Usuario/Usuario';
import AdicionarUsuario from './components/AdicionarUsuario/AdicionarUsuario';
import Home from './components/Home/Home';
import DetalhesUsuario from './components/DetalhesUsuario/Detalhes';

function App() {
  return (
    <Router>
        <div className="App">
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/usuarios/">Usuarios cadastrados</Link></li>
            <li><Link to="/cadastro">Cadastrar usuario</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Switch>
          <Route  exact path="/"><Home/></Route>
          <Route exact path="/usuarios/:id"> <DetalhesUsuario/> </Route>
          <Route exact path="/usuarios"><Usuarios/></Route>
          <Route exact path="/cadastro"><AdicionarUsuario/></Route>
        </Switch>
       
      </main>
    </div>
    </Router>
  
  );
}

export default App;
