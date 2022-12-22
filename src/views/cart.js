import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "../components/Layout";
import { CartContext } from "../context/CartContext";
import {Table} from "react-bootstrap";

const CartView = () => {
  const navigate = useNavigate();
  const { productsAdded: items, totalAmount } = useContext(CartContext);

  const goToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <Layout>
      <div className="flex flex-col max-w-[50%]">
        { items.length === 0 ? (
          <h1>El carrito esta vacio!</h1>
        ) : (
          <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Item Nbr</th>
                  <th>Nombre</th>
                  <th>Descripcion</th>
                  <th>Cantidad</th>
                  <th>Precio por unidad</th>
                  <th>Total por Producto</th>
                </tr>
              </thead>
              <tbody>
                {items.map((product,index) => {
                  const quantityAdded = product.quantityAdded;

                  return(
                    <tr key={product.item.id}>
                    <td>{index+1}</td>
                    <td>{product.item.name}</td>
                    <td>{product.item.description}</td>
                    <td>{quantityAdded}</td>
                    <td>${product.item.price}</td>
                    <td>${quantityAdded * product.item.price}</td>
                    </tr>
                  )
                  })
                
                }
              </tbody>
    </Table>
        ) }
      </div>
    </Layout>
  );
};

export default CartView;