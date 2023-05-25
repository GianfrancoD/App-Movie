import React, { useState } from 'react';
import { GuardarEnStorage } from './helpers/GuardarEnStorage';

export const Crear = ({setlistadoState}) => {

    const title = "Añadir peliculas";
    const [pelisState, setpelisState]= useState({
        titulo: "",
        descripcion: "",
    });
    const {titulo, descripcion} = pelisState;

    const conseguirDatosForm = e => {
        e.preventDefault();

        // conseguir datos del formulario
        let titulo = e.target.titulo.value;
        let descripcion = e.target.descripcion.value;

        // crear objeto de la peliscula
        let pelis = {
            id: new Date().getTime(),
            titulo,
            descripcion,

        };

        // Guardando estado de datos del formulario
        setpelisState(pelis);
        

         //actualizar el estado del listado principal
         setlistadoState(elementos => {
            return [...elementos, pelis];
        });

        // Guardar en el almacenamiento Local
        GuardarEnStorage("pelis", pelis);   
        
       
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
                                placeholder="Titulo de la peliscula" />

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