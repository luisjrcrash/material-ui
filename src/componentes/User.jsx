import React from 'react'
import { useParams } from 'react-router'

const User = () => {
    
    const {id} = useParams();
    
    const [pueblo,setPueblo] = React.useState([]);

  React.useEffect(()=>{
    obtenerDatos();
  },[]);

    const obtenerDatos = async() =>{
    const empires = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`);
    const data = await empires.json();
    console.log(data)
    setPueblo(data);
    }


    return (
        <div>
          asdf  
        </div>
    )
}

export default User
