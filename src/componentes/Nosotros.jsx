import React from 'react'

const Nosotros = () => {

    const [pokemon, setPokemon] = React.useState([]);

    React.useEffect(()=>{

    console.log('React use effect');
    obtenerPokemon();
    },[]);

    const obtenerPokemon = async() =>{
        const pokemon = await fetch('https://pokeapi.co/api/v2/pokemon/');
        const datos = await pokemon.json();
        console.log(datos.results);
        setPokemon(datos.results)
    }

    return (
        <div>
            <h2>Pokemon</h2>
            {
                pokemon.map(item=>{
                    return(
                        <h2>{item.name}</h2>
                    )
                })
            }
            <h3>Fin</h3>
        </div>
    )
}

export default Nosotros
