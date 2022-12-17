import ItemList from './ItemList';
import { useGetItem } from '../hooks/getItem';




export const ItemListContainer = () => {
    const items = useGetItem();

    if (!items) {
        return <div>LOADING...</div>;
    }
    return (
        <div>
            <ItemList products={items} />
        </div>
    )
    
    }
