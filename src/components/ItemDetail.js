import { Container, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {ItemCount} from './ItemCount';
import {useState, useContext} from "react";
import {useNavigate} from "react-router-dom"
import { CartContext } from '../context/CartContext';


const ItemDetail = ({product}) => {

  const {addItem, isInCart, log} = useContext(CartContext);
  const [qty,setQty] = useState(0);
  const [stock, setStock] = useState(product.stock)
  const [cartCounter, setCartCounter] = useState(0)

  function incrementQty () {
    if (stock > 0 && qty < stock) {
      setQty(qty => qty +=1)
    }
  }; 

  function decrementQty () {
    if (stock > 1 && qty>0) {
      setQty(qty => qty-=1)
    }
  };

  function addToCart(product) {
    if (stock < 1 && qty>0) {
      alert("No hay stock del producto seleccionado")
    } else if (qty===0) {
      alert("NADA QUE AGREGAR")
    } else {
      setStock(stock=>stock - qty)
      log();
    };
  }
  const Navigate = useNavigate();
  const goToCart = () => {
    Navigate('/cart/')
  }

  
  
  
  
  return (
      <Container className="d-flex justify-content-center">
        <Card style={{ width: '32rem' }}>
          <Card.Img variant="top" src={product.img}/>
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>
              {product.description}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>STOCK: {stock}</ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
          </ListGroup>
          <ListGroup className="list-group-flush">
            <ListGroup.Item><ItemCount qty={qty} incrementQty={incrementQty} decrementQty={decrementQty} addToCart={addToCart} cartCounter={cartCounter}/></ListGroup.Item>
            <ListGroup.Item className="d-flex justify-items-center"><Button size="btn btn-lg" onClick={goToCart}>Finalizar Compra!</Button></ListGroup.Item>
          </ListGroup>
        </Card>
      </Container>
  )
}

export default ItemDetail;