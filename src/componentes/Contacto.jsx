import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

const Contacto = () => {

  const [datos,setDatos] = React.useState([]);

  React.useEffect(()=>{
    obtenerDatos();
  },[]);

  const obtenerDatos = async() =>{
    const empires = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations');
    const data = await empires.json();
    console.log(data.civilizations)
    setDatos(data.civilizations);
    }
    return (
        <div>
      {
        datos.map(item=>{
          return(
            <div>
              <Link to = {`/contacto/${item.id}`}>
              {item.name} - {item.expansion}
              </Link>              
            </div>
          )
        })
      }
        </div>
    )
}

export default Contacto
