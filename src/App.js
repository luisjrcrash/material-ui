import './App.css';
import React from 'react'; 
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { FormControl } from '@material-ui/core';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import PaginaUno from './Paginas/PaginaUno';
import PaginaDos from './Paginas/PaginaDos';
import Contacto from './componentes/Contacto';
import Nosotros from './componentes/Nosotros';
import Inicio from './componentes/Inicio';

function App() {


  const [equipo, setEquipo] = React.useState(null);

  return (
    <BrowserRouter>
     
       <div className = "btn-group">
         <Link to = "/" className = "btn btn-dark">
         Inicio
         </Link>
         <Link to = "Nosotros" className = "btn btn-dark">
           Pokemon
         </Link>
         <Link to = "Contacto" className = "btn btn-dark">
           Age of empires
         </Link>
       </div>
    <Switch>
    <Route path = "/contacto">
      <Contacto/>
    </Route>
    <Route path = "/nosotros">
    <Nosotros/>
    </Route>
    <Route path = "/" exact>
    <Inicio/>
    </Route>
  </Switch>
    
    </BrowserRouter>
  );
}

export default App;
