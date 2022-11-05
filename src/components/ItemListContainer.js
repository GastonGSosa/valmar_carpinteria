import Container from "react-bootstrap/Container";
import './ItemListContainer.css';


const ItemListContainer = ({greeting}) => {
    return (
        <Container ClassName="greeting">
            <p>{greeting}</p>
        </Container>

    )
}

export default ItemListContainer;