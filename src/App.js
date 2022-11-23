import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemCount stock={9}/>
      <ItemDetailContainer />


    </div>
  );
}

export default App;
