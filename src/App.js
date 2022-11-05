import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div ClassName="App">
      <NavBar/>
      <ItemListContainer greeting="Hola! Bienvenido a la Carpinteria de Valmar!" />

    </div>
  );
}

export default App;
