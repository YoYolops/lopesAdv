import React from 'react';
import './App.css';
/* import { Switch, Route } from 'react-router-dom'; */

import Header from './components/header';
import Home from './pages/home';
/* import FormularioCliente from './components/FormularioCliente.jsx'; */
/* import AutoAtendimento from './components/AutoAtendimento/AutoAtendimento.jsx'; */
/* import Foot from './components/Foot.jsx' */
/* import Transparencia from './components/transparencia/Transparencia.js'  */

function App() {
    return (
        <div id="super-container">
            <Header />
            <Home />
        </div>
    )
};

export default App;



/* 
export default (props) => (
    <>
        <Header />
        <div className="switch">
             <Switch>
                <Route path="/home" component={Home} />
                <Route path="/autoatendimento" component={AutoAtendimento} />
                <Route path="/formcliente" component={FormularioCliente} />
                <Route path="/transparencia" component={Transparencia} />
                <Route path="/" component={Home} />
             </Switch>
        </div>
        <footer>
            <Foot></Foot>
        </footer>
    </>
)
*/

