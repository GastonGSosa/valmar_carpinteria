import ItemDetail from './ItemDetail';
import { useGetItem } from '../hooks/getItem';





const ItemDetailContainer = () => {
    const item = useGetItem();

    if (!item) {
        return <div>LOADING ITEM...</div>
    }
    return (
        <div>
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer; 