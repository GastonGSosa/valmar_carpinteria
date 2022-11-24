import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function ItemDetail({product}) {
  return (

    product.map((product)=>(
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
      </ListGroup>
      <Card.Text>
          Price: ${product.price}
        </Card.Text>
    </Card>
    ))


    
  );
}

export default ItemDetail;