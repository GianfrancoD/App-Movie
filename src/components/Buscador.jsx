import React from 'react';

const Buscador = () => {
    return (
        <>
        <div className="seach">
            <h3 for="title">Buscador</h3>
            <form>
                <input type="text" name="" id="search_field" placeholder="Buscar.." />
                <button id="search">Buscar</button>
            </form>
        </div>  
        </>
    );
};

export default Buscador;