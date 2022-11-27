import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ItemCount from './ItemCount';

function ItemDetail({product}) {
  return (
    <Container className="d-flex justify-content-center">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.img}/>
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            {product.description}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>STOCK: {product.stock}</ListGroup.Item>
          <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
        </ListGroup>
        <ListGroup className="list-group-flush">
          <ListGroup.Item><ItemCount producto={product}/></ListGroup.Item>
        </ListGroup>
      </Card>
    </Container>
    


    
  );
}

export default ItemDetail;