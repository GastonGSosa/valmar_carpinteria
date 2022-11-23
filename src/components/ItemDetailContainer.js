import Container from 'react-bootstrap/Container';
import ItemDetail from './ItemDetail';
import { productArray } from './mocks/itemListMock';
import {useState, useEffect} from 'react';



const ItemDetailContainer = () => {

     const [product, setProduct] = useState(null)

    useEffect(() => {
      new Promise (
        (resolve)=>setTimeout( () => resolve(productArray),2000)
                    ).then(
                            (data)=>setProduct(data) 
                        );
    }, [])
    


    if (!product) {return (
        <p>Loading...</p>

    );}
    else {
        return (
            <Container>
                <ItemDetail product={product} />
            </Container>
        
        );
    }
}

export default ItemDetailContainer; 