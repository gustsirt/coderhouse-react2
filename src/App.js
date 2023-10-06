import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Colores from './components/AuxiliarColores/Colores';
import HyFJoubert from './components/HyFJoubert/HyFJoubert';
import Inicio from './components/Inicio/Inicio';
import Productos from './components/Productos/Productos';
import ItemDetail from './components/Productos/ItemDetail/ItemDetail'

function App() {
  
  return (
    <BrowserRouter>
      <HyFJoubert>
        <Routes>
          <Route exact path="/" Component={Inicio}/>
          <Route path="/Productos" Component={Productos}/>
          <Route path="/Marca/:Marca" Component={Productos}/>
          <Route path="/Productos/:id" Component={ItemDetail}/>
          <Route path="/Colores" Component={Colores}/>
          <Route path="*" element={<h2>ERROR 404 PAGINA NO ENCONTRADA</h2>}/>
        </Routes>
      </HyFJoubert>
    </BrowserRouter>
  );
}

export default App;
