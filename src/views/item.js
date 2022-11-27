import ItemDetailContainer from "../components/ItemDetailContainer";
import { Layout } from "../components/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';


export const ItemView = () => {
    return (
        <Layout>
            <ItemDetailContainer />
        </Layout>

    );
};

export default ItemView;