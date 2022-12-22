import {AiOutlineShoppingCart} from "react-icons/ai"
import { Button } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
    const {productsAdded} = useContext(CartContext);
    const count = productsAdded.length;





    return (
        <Button className="btn btn-dark">
            <AiOutlineShoppingCart color="white" fontSize="2rem"/>
            {count>0?(<span>{count}</span>):(<span></span>)}
        </Button>
        
    )
}

export default CartWidget;