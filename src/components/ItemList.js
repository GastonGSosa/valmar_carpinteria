import Item from './Item';



const ItemList = ({products}) => {


    return (
        <ul className="flex items-center justify-center gap-4">
            {products.map((products)=>(
                <Item products={products}/> 
            ))}
        </ul>
    )

};

export default ItemList;