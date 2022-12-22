import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export const ItemCount = ({itemCounter,handlePlus, handleMinus}) => {

    return (
        <div>
            <ButtonGroup className="d-flex justify-content-center">
                <Button variant="secondary" size="sm" onClick={handleMinus}>-</Button>
                <Button variant="secondary" size="sm" onClick={handlePlus}>+</Button>
            </ButtonGroup>
            <Card.Body>
                <span>Items to add: {itemCounter}</span>
            </Card.Body>
            <br/>
        </div>

    );

}
