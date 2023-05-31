import React, { useEffect, useState } from 'react';

export const Listado = ({listadoState, setlistadoState}) => {

    // const [listadoState, setlistadoState] = useState([]);

    useEffect(() => {
        conseguirPeliculas();
        console.log("componentes de peliculas cargado");
    }, []);

    const conseguirPeliculas = () => {
        let peliculas = JSON.parse(localStorage.getItem("pelis"));
        console.log(peliculas);
        setlistadoState(peliculas);
    }

    const removePeliculas = (id) => {
        let pelis_almacenada = conseguirPeliculas();
        let almacernar_valor = pelis_almacenada.filter(pelis => pelis.id !== parseInt(id));
        setlistadoState(almacernar_valor);
        localStorage.setItem("pelis", JSON.stringify(almacernar_valor));
    }

    

    return (
        <>
        {listadoState != null ? listadoState.map(pelis => {
            return (
                <article key={pelis.id} className="peli-item">
                    <h3 className="title">{pelis.titulo}</h3>
                    <p className="description">{pelis.descripcion}</p>

                    <button className="edit">Editar </button>
                    <button className="delete" onClick={() => removePeliculas(pelis.id)}>BORRAR</button>
                </article>
            )
        })
            : <h2>No hay Peliculas para mostrar</h2>
    }
        </>
    );
};

export default Listado;