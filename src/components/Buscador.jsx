import React from 'react';
import { useState } from 'react';

export const Buscador = ({listadoState, setlistadoState}) => {

    const [busqueda, setBusqueda] = useState('');
    const [noEncontrado, setNoencontrado] = useState(false);
    const buscarPeli = (e) => {
        // crear estado
        e.preventDefault();
        const target = e.target.value;
        setBusqueda(target);
        console.log(busqueda, target);

        var pelisEncontradas = listadoState.filter(peli => {
            return peli.titulo.includes(busqueda);
        });

        if (busqueda.length <= 1 || pelisEncontradas <= 0){ 
            pelisEncontradas = JSON.parse(localStorage.getItem('pelis'));
            setNoencontrado(true);
        }else{
            setNoencontrado(false);
        }

        setlistadoState(pelisEncontradas);

    }

    return (
        <>
        <div className="seach">
            <h3 for="title">Buscador</h3>
            <span className='no-encontrado'>{(noEncontrado && busqueda.length !== 0) && ("no es encontrado")}</span>
            <form>
                <input type="text" 
                name="" 
                id="search_field" 
                placeholder="Buscar.."
                autoComplete='off' 
                onChange={buscarPeli}
                />

                <button 
                id="search">Buscar</button>
            </form>
        </div>  
        </>
    );
};

export default Buscador;