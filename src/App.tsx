import { BrowserRouter as Router, Route, Routes, Link } from 'react-router'; // Nota: usualmente es 'react-router-dom'
import './App.css'; // <--- Importación agregada

import Home from './Home';
import Original from './Original';
import Favoritos from './Favoritos';
import Informativa from './Informativa';
import Usuario from './Usuario';
import Equipo from './Equipo';

function App() {
  return (
    <>
      <Router>
        <nav className="c-menu">
          {/* Añadí texto dentro de los Links para que sean visibles y clicables */}
          <Link to="/">Inicio</Link>
          <Link to="/favoritos">Favoritos</Link>
          <Link to="/original">Original</Link>
          <Link to="/informativa">Informativa</Link>
          <Link to="/usuario">Usuario</Link>
          <Link to="/equipo/equipo">Equipo</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/original" element={<Original />} />
          <Route path="/informativa" element={<Informativa />} />
          <Route path="/usuario" element={<Usuario />} />
          <Route path="/equipo/:equipo" element={<Equipo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;