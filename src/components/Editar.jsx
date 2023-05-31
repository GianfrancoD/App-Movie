import React from 'react'

 export const Editar = ({pelis}) => {
    const titulo_componente = "Editar Peliculas" 
    const guardarEdicion = (e, id) => {
        e.preventDefault();

        //buscando el id de la pelicula
        alert(id);
    }

    return (
        <div className='edit_form'>
            <hr />
            <h3 className='title'>{titulo_componente}</h3>

            <form onSubmit={e => guardarEdicion(e,pelis.id)}>
                <input type="text" name="Titulo" id="" className='titulo_editado' defaultValue={pelis.titulo} />

                <textarea name="descripcion" defaultValue={pelis.descripcion} className='descripcion_editada' id="" cols="30" rows="10" />
                <input type="submit" value="Actualizar" className='editar' />
            </form>
        </div>
    );
}

export default Editar;
