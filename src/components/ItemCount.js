import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export const ItemCount = ({qty, incrementQty, decrementQty,addToCart, cartCounter}) => {

    return (
        <div>
            <ButtonGroup className="d-flex justify-content-center">
                <Button variant="secondary" size="sm" onClick={decrementQty}>-</Button>
                <span className="w-70">Cantidad:{qty}</span>
                <Button variant="secondary" size="sm" onClick={incrementQty}>+</Button>
            </ButtonGroup>
            <div className="d-flex justify-items-center"><span> Items para agregar: {cartCounter}</span></div>
            <br/>
            <Button variant="primary" size="lg" onClick={addToCart}>Agregar al Carrito!</Button>
        </div>

    );

}
