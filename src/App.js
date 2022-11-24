import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import {CartContext} from './context/CartContext';
import { Layout } from './components/Layout';





function App() {
  return (
    <div className="App">
      <Layout>
        <ItemListContainer/>
      </Layout>

    </div>
  );
}

export default App;
