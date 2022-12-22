import { useNavigate } from "react-router-dom";
import { useGetItemImg } from "../hooks/useGetItemImg";
import { Loading } from "./Loading";
import {Button, Card} from "react-bootstrap"

export const Item = ({ products, quantityAdded }) => {
  const navigate = useNavigate();
  const img = useGetItemImg(products.img);

  const description = products.description.slice(0, 30);
  const title = products.name.slice(0, 20);

  function handleNavigate() {
    navigate(`/item/${products.id}`);
  }


  if (!img) {
    return <Loading />;
  }



  return (
        <Card style={{ width: '22rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Button variant="dark" onClick={handleNavigate}>Lo quiero!</Button>
            </Card.Body>
        </Card>
  );
};