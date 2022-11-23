  import {useState} from 'react';
import Container from "react-bootstrap/Container";
import './ItemListContainer.css';
import ItemList from './ItemList';


const ItemListContainer = () => {
    
    const [products, setProducts] = useState([]);

    const productList = new Promise((resolve) =>
    setTimeout(() => {
        resolve();
    }, 2000)
    );
    
    productList.then((data)=>setProducts(data))
    
    return (
        <Container>
            <ItemList products={products}/>
        </Container>

    )
}

export default ItemListContainer;