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

    return (
        <>
        {listadoState != null ? listadoState.map(pelis => {
            return (
                <article key={pelis.id} className="peli-item">
                <h3 className="title">{pelis.titulo}</h3>
                <p className="description">{pelis.descripcion}</p>

                <button className="edit">Editar </button>
                <button className="delete" onClick={() => {
                    setlistadoState(listadoState.filter(pelis => pelis.id!== pelis.id));
                    conseguirPeliculas();
                }}>BORRAR</button>
            </article>
            )
        })
            : <h2>No hay Peliculas para mostrar</h2>
    }
        </>
    );
};

export default Listado;