import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "../components/Layout";
import { CartContext } from "../context/CartContext";
import {Button, Table} from "react-bootstrap";
import { TrashWidget } from "../components/trashWidget";

const CartView = () => {
  const navigate = useNavigate();
  const { productsAdded: items, totalAmount } = useContext(CartContext);

  return (
    <Layout>
      <div className="flex flex-col max-w-[50%]">
        { items.length === 0 ? (
          <div>
            <h1>El carrito esta vacio!</h1>
            <Button onClick={() => navigate("/")}>Volver al catalogo!</Button>
          </div>

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
                  <th>Remover Item?</th>
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
                    <td><TrashWidget itemId={product.item.id}/></td>
                    </tr>
                  )
                  })
                }
                <tr>
                  <td colSpan={7} className="text-center h3"><b>Total: ${totalAmount}</b></td>
                </tr>
                <tr>
                  <td colSpan={7} className="text-center"><Button variant="primary" size="lg" onClick={()=> navigate("/checkout")}>Terminar mi compra!</Button></td>
                </tr>
              </tbody>
    </Table>
        ) }
      </div>
    </Layout>
  );
};

export default CartView;