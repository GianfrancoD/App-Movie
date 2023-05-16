

function App() {
  return (
    <div className="layout">
    {/* Cabecera */} 
    <header className="header">
        <div className="logo">
            <div className="play"></div>
        </div>
        
        <h1>Favorite Movie</h1>
    </header>

    {/* Barra de navegacion */}
    <nav className="nav">
        <ul>
            <li><a href="/#">Inicio</a></li>
            <li><a href="/#">Peliculas</a></li>
            <li><a href="/#">Blog</a></li>
            <li><a href="/#">Contacto</a></li>
        </ul>
    </nav>

    {/* Contenido principal */}
    <section className="content">
        {/* aqui van las peliculas */}
        <article className="peli-item">
            <h3 className="title">Desarrollo Web</h3>
            <p className="description">Gianfranco.dfiore@gmail.com</p>

            <button className="edit">Editar </button>
            <button className="delete">BORRAR</button>
        </article>

        <article className="peli-item">
            <h3 className="title">Desarrollo Web</h3>
            <p className="description">Gianfranco.dfiore@gmail.com</p>

            <button className="edit">Editar </button>
            <button className="delete">BORRAR</button>
        </article>

        <article className="peli-item">
            <h3 className="title">Desarrollo Web</h3>
            <p className="description">Gianfranco.dfiore@gmail.com</p>

            <button className="edit">Editar </button>
            <button className="delete">BORRAR</button>
        </article>

        <article className="peli-item">
            <h3 className="title">Desarrollo Web</h3>
            <p className="description">Gianfranco.dfiore@gmail.com</p>

            <button className="edit">Editar </button>
            <button className="delete">BORRAR</button>
        </article>
    </section>

    {/* Barra lateral */}
    <aside className="lateral">
        <div className="seach">
            <form action="">
                <h3 for="">Buscador</h3>
                <input type="text" name="" id="" placeholder="Buscar.." />
                <button>Buscar</button>
            </form>
        </div>
        <div className="add">
            <h3 className="title">Añadir pelicula</h3>
            <form action="">
                <input type="text" name="" id="" placeholder="Titulo de la pelicula" />
                <textarea name="" id="" cols="20" rows="3" placeholder="Descripción"></textarea>
                <input type="submit" value="Guardar" />
            </form>
        </div>
    </aside>

    {/* pie de pagina */}
    <footer className="footer">
        &copy; Hecho por GianfrancoDB /
        <a href="http://"> <b> Conoceme </b></a>
    </footer>
</div>
    );
}

export default App;
