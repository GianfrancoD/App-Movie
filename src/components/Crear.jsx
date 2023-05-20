import React, { useState } from 'react';

const Crear = () => {

    const title = "Añadir pelicula";
    const [peliState, setPeliState]= useState({
        titulo: "",
        descripcion: "",
    });
    const {titulo, descripcion} = peliState;

    const conseguirDatosForm = e => {
        e.preventDefault();

        // conseguir datos del formulario
        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;

        // crear objeto de la pelicula
        let peli = {
            id: new Date().getTime(),
            titulo,
            descripcion,

        };

        // Guardando estado de datos del formulario
        setPeliState(peli);

        // Guardar en el almacenamiento Local
        guardarEnStorage(peli);        
    }
    const guardarEnStorage = peli => {        
        localStorage.setItem('pelis', JSON.stringify([peli]));
    }

    return (
        <>
            <div className="add">
                <h3 className="title">{title}</h3>

                <b>{(titulo && descripcion) && "Has creado: " + titulo}</b>
                

                <form onSubmit={conseguirDatosForm}>

                    <input type="text" 
                                name="titulo" 
                                id="titulo" 
                                placeholder="Titulo de la pelicula" />

                    <textarea 
                                name="descripcion" 
                                id="descripcion" 
                                cols="20" 
                                rows="3" 
                                placeholder="Descripción"></textarea>
                                
                    <input 
                            type="submit" 
                            value="Guardar" />

                </form>
            </div>   
        </>
    );
};

export default Crear;