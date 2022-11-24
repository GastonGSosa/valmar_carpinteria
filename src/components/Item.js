import Card from 'react-bootstrap/Card';
import { useNavigate} from 'react-router-dom';

const Item = ({products}) => {

    const navigate=useNavigate();

    function handleNavigate() {
        navigate(`/item/${products.id}`)
    }

    return (
        <Card style={{ width: '18rem' }} onClick={handleNavigate }>
            <Card.Img variant="top" src={products.img} />
            <Card.Body>
                <Card.Title>{products.name}</Card.Title>
                <Card.Text>{products.description}</Card.Text>
                <Card.Text>$:{products.price}</Card.Text>
            </Card.Body>
        </Card>

    );
};

export default Item;