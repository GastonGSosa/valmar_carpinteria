import {useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import './ItemListContainer.css';
import ItemList from './ItemList';
import { productArray } from './mocks/itemListMock';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
    const {category} = useParams();
    
    const [products, setProducts] = useState([]);

    useEffect(() => {
      new Promise (
        (resolve)=> 
            setTimeout(()=>{
                resolve(productArray)
            }, 1500)
        ).then((data)=> {
            if (category) {
                const categories = data.filter(
                    (item)=> item.category===category)
                setProducts(categories)
            } else {
                setProducts(data)
            }
        })
    }, [category]);

    if (products.length=== 0) {
        return(<p>Loading...</p>)
    }    
    return (
        <Container className="h-full">
            <ItemList products={products}/>
        </Container>

    )
}

export default ItemListContainer;