import Item from './Item';



const ItemList = ({products}) => {


    return (
        <ul className="d-flex items-center justify-content-center gap-4">
            {products.map((products)=>(
                <Item products={products}/> 
            ))}
        </ul>
    )

};

export default ItemList;