import { useNavigate } from "react-router-dom";
import { useGetItemImg } from "../hooks/useGetItemImg";
import { Loading } from "./Loading";
import {Button, Card, Container} from "react-bootstrap"

export const Item = ({ products, quantityAdded }) => {
  const navigate = useNavigate();
  const img = useGetItemImg(products.img);

  const description = products.description.slice(0, 30);
  const title = products.name.slice(0, 20);

  function handleNavigate() {
    navigate(`/item/${products.id}`);
  }


   {/* <div
      onClick={handleNavigate}
      className="flex flex-col w-[200px] h-[350px] bg-white rounded p-4 shadow cursor-pointer transition-all hover:shadow-lg"
    >
      <div className="flex flex-col flex-1">
        <img
          src={img}
          className="w-full h-[100px] object-cover mb-2"
          alt="Product"
        />
        <span className="text-2xl font-bold">
          {products.name.length > 20 ? `${title} ...` : products.name}
        </span>
        <hr className="mb-2" />
        <p className="mb-2">
          {products.description.length > 30
            ? `${description} ...`
            : products.description}
        </p>
      </div>
      <div className="flex flex-col">
        <hr className="mb-2" />
        <div className="flex justify-between items-center">
          <span className="font-bold">${products.price}</span>
          <span
            className={products.stock === 0 ? "text-xs text-red-500" : "text-xs"}
          >
            {products.stock === 0
              ? "Sin Stock"
              : quantityAdded
              ? `Agregados: ${quantityAdded}`
              : `En Stock: ${products.stock}`}
          </span>
        </div>
      </div>
    </div> */}

  if (!img) {
    return <Loading />;
  }



  return (
        <Card style={{ width: '22rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Button variant="primary" onClick={handleNavigate}>Lo quiero!</Button>
            </Card.Body>
        </Card>
  );
};