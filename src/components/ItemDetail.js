import { Container, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {ItemCount} from './ItemCount';
import {useState, useContext} from "react";
import {useNavigate} from "react-router-dom"
import { CartContext } from '../context/CartContext';
import { useGetItemImg } from '../hooks/useGetItemImg';
import { Loading } from './Loading';


const ItemDetail = ({item}) => {

  const {addItem, productsAdded} = useContext(CartContext);
  const [itemCounter, setItemCounter] = useState(0)
  const [stock, setStock] = useState(item.stock)
  const [cartCounter, setCartCounter] = useState(0)
  const img = useGetItemImg(item.img);

  function handlePlus () {
    if (stock > 0 && stock > itemCounter) {
      setItemCounter(itemCounter + 1)
    }
    else if (stock === 0 ){
      alert("No hay mas stock!")
    }
  }

  function handleMinus () {
    if (itemCounter>0) {
      setItemCounter(itemCounter - 1)
    } else {
      alert("No hay menos que cero.")
    }
  }

  function addToCart() {
    if (itemCounter<1) {
      alert("NADA QUE AGREGAR")
    } else if (item.stock < 1) {
      alert("No Hay Stock")
    } else {
      addItem(item, itemCounter);
      setCartCounter(cartCounter => cartCounter + itemCounter)
      setStock(stock-itemCounter)
      setItemCounter(0)
    };
  }
  const Navigate = useNavigate();
  const goToCart = () => {
    console.log(productsAdded)
    Navigate('/cart/')
  }

  
  
  if (!img) {
    return <Loading/>
  }
  
  return (
      <Container className="d-flex justify-content-center">
        <Card style={{ width: '32rem' }}>
          <Card.Img variant="top" src={img}/>
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
              {item.description}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>STOCK: {stock}</ListGroup.Item>
            <ListGroup.Item>Price: ${item.price}</ListGroup.Item>
          </ListGroup>
          <ListGroup className="list-group-flush">
            <ListGroup.Item><ItemCount 
                              itemCounter={itemCounter} 
                              handlePlus={handlePlus} 
                              handleMinus={handleMinus} />
            <Button onClick={addToCart}>AGREGAR AL CARRITO</Button>
            </ListGroup.Item>

            <ListGroup.Item className="d-flex justify-items-center"><Button size="btn btn-lg" onClick={goToCart}>Finalizar Compra!</Button></ListGroup.Item>
          </ListGroup>
        </Card>
      </Container>
  )
}

export default ItemDetail;