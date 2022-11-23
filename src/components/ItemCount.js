import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';

const ItemCount = (producto) => {
    const [quantity, setQuantity] = useState(0)

    const incrementQty = () => {
        if (quantity < producto.stock) {
            setQuantity(prevQuantity=>prevQuantity+1)
        }
        
    }

    const decrementQty = () => {
        setQuantity(prevQuantity=>prevQuantity-1)
    }


    return (
        <Container>
            <h3>Producto:</h3>
            <h2>Rack-TV</h2>
            <h5>Stock: {producto.stock}</h5>
            <ButtonGroup aria-label="Basic example">
                <Button variant="secondary" onClick={decrementQty}>-</Button>
                <br></br>
                <span>Quantity: {quantity} </span>
                <br></br>
                <Button variant="secondary" onClick={incrementQty}>+</Button>
            </ButtonGroup>
            <br></br>
            <Button variant="primary">Agregar al Carrito</Button>
        </Container>

    );

}

export default ItemCount;