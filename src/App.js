import { useState } from "react";
import Buscador from "./components/Buscador";
import Crear from "./components/Crear";
import Listado from "./components/Listado";

function App(){

    const [listadoState, setlistadoState] = useState([]);

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
        <Listado listadoState={listadoState} setlistadoState={setlistadoState} />
    </section>

    {/* Barra lateral */}
    <aside className="lateral">
        <Buscador listadoState={listadoState} setlistadoState={setlistadoState} />

        <Crear setlistadoState={setlistadoState} />
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
