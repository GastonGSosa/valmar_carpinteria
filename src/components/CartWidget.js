import {AiOutlineShoppingCart} from "react-icons/ai"
import { Button } from "react-bootstrap";

const CartWidget = () => {
    return (
        <Button className="btn btn-dark">
            <AiOutlineShoppingCart color="white" fontSize="2rem"/>
        </Button>
        
    )
}

export default CartWidget;