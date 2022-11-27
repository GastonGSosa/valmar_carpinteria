import ItemDetail from './ItemDetail';
import { productArray } from './mocks/itemListMock';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';



const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const { id }= useParams();

    

     useEffect(() => {
        new Promise((resolve) =>
          // Simulation of a call to an api
          setTimeout(() => resolve(productArray.find((product) => product.id === id)), 1000)
        ).then((data) => setProduct(data));
      }, [id]);
    


    if (!product) {return (
        <p>Loading...</p>

    );}
    else {
        return (
            <div className="flex justify-center items-center">
                <ItemDetail product={product} />
            </div>
        
        );
    }
}

export default ItemDetailContainer; 