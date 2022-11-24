import { Layout } from "../components/Layout";
import { useParams } from "react-router-dom"; 
import Item from "../components/Item";
import {productArray} from '../components/mocks/itemListMock'
import ItemListContainer from "../components/ItemListContainer";

export const CategoryView = () => {

    const {category} = useParams();
    const categories = productArray.filter((item)=> item.category===category)



    return (
        <Layout>
            <ItemListContainer />  
        </Layout>

    );
};

export default CategoryView;