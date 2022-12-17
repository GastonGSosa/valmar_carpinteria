import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import { Layout } from './components/Layout';
import {CartContextProvider} from './context/CartContext';





function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <Layout>
          <ItemListContainer/>
        </Layout>
      </CartContextProvider>
    </div>
  );
}

export default App;
