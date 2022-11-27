import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const ItemCount = ({producto}) => {
    const [quantity, setQuantity] = useState(0)

    

    const incrementQty = () => {
        if (quantity < producto.stock) {
            setQuantity(prevQuantity=>prevQuantity+1)
        }
    };

    const decrementQty = () => {
        if (quantity>0) {
            setQuantity(prevQuantity=>prevQuantity-1)
        }
        
    }

    return (
        <div>
            <ButtonGroup>
                <Button onClick={decrementQty} variant="secondary">-</Button>
                <span className="inline-block">Cantidad: {quantity}</span>
                <Button onClick={incrementQty} variant="secondary">+</Button>
            </ButtonGroup>
            <Button variant="primary">Agregar al Carrito!</Button>
        </div>

    );

}

export default ItemCount;