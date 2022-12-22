import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "../components/Layout";
import { CartContext } from "../context/CartContext";
import {Button, Form, Col, Row} from "react-bootstrap";

// firebase
import {
  addDoc,
  collection,
  doc,
  getFirestore,
  updateDoc,
} from "firebase/firestore";

const CheckoutView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [updatingProducts, setUpdatingProducts] = useState(false);
  const { productsAdded: items, clear, totalAmount } = useContext(CartContext);
  const navigate = useNavigate();

  const getTotalByProduct = (quantity, price) => {
    return quantity * price;
  };

  const handleFinalizePurchase = (event) => {
    event.preventDefault();
    const name = event.target[0].value;
    const phone = event.target[1].value;
    const email = event.target[2].value;

    setIsLoading(true);

    const total = items
      .map((product) =>
        getTotalByProduct(product.quantityAdded, product.item.price)
      )
      .reduce((previousValue, currentValue) => previousValue + currentValue);

    const order = {
      buyer: { name, phone, email },
      items,
      total,
    };
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order)
      .then(() => {
        setUpdatingProducts(true);
      })
      .catch((err) => console.error({ err }))
      .finally(() => {});
  };

  useEffect(() => {
    if (updatingProducts) {
      const db = getFirestore();

      items.forEach((element) => {
        const itemRef = doc(db, "items", element.item.id);
        const dataToUpdate = {
          stock: element.item.stock - element.quantityAdded,
        };
        updateDoc(itemRef, dataToUpdate)
          .then(() => {
            clear();
            setIsLoading(false);
            alert("Compra finalizada");
            navigate("/");
          })
          .catch((err) => console.error(err));
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updatingProducts]);

  return (
    <Layout>
        <h2>Complete con sus datos para finalizar el pedido!</h2>
        <Form onSubmit={handleFinalizePurchase}>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="name" placeholder="Lionel Messi" />
                </Form.Group>

            </Row>

            <Form.Group className="mb-3" controlId="formGridNumber">
                <Form.Label>Numero de telefono</Form.Label>
                <Form.Control type="number" placeholder="+54 011 1234 5678" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridEmail">
                <Form.Label>email</Form.Label>
                <Form.Control type={"email"} placeholder="algo@valmarcarpinteria.com" />
            </Form.Group>

            <h3>Total de la compra: ${totalAmount}</h3>
            <Button variant="primary" type="submit" disabled={isLoading}>
                Submit
            </Button>
            </Form>
    </Layout>
  );
};

export default CheckoutView;