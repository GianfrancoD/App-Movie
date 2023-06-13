import React from 'react'

 export const Editar = ({pelis, setlistadoState, setEditar}) => {
    const titulo_componente = "Editar Peliculas" 
    const guardarEdicion = (e, id) => {
        e.preventDefault();

        let target = e.target;
        const pelis_almacenada = JSON.parse(localStorage.getItem("pelis"));
        const indice = pelis_almacenada.findIndex(pelis => pelis.id === id);

        let pelis = {
            id,
            titulo: target.titulo.value,
            descripcion: target.descripcion.value,
        };

        console.log(indice, pelis);

        //actualizar el elemento con ese indice
        pelis_almacenada[indice] = pelis;
        localStorage.setItem("pelis", JSON.stringify(pelis_almacenada));

        //actualizar el estado
        setlistadoState(pelis_almacenada);
        setEditar(false);

    }

    return (
        <div className='edit_form'>
            <hr />
            <h3 className='titulo'>{titulo_componente}</h3>

            <form onSubmit={e => guardarEdicion(e, pelis.id)}>
                <input type="text" name="titulo" id="" className='titulo_editado' defaultValue={pelis.titulo} />
                <textarea name="descripcion" defaultValue={pelis.descripcion} className='descripcion_editada' id="" cols="20" rows="0" />
                <input type="submit" value="Actualizar" className='editar' />
            </form>
        </div>
    );
}

export default Editar;
