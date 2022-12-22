import {IoMdRemoveCircleOutline} from "react-icons/io";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Button } from "react-bootstrap";

export const TrashWidget =({itemId}) => {
    const {removeItem}=useContext(CartContext);

    return (
        <Button onClick={()=> removeItem(itemId)} variant="danger" size="md"><IoMdRemoveCircleOutline/></Button>
    );
};