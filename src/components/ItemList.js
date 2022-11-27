import Item from './Item';



const ItemList = ({products}) => {


    return (
        <div className="d-flex items-center justify-content-center gap-4">
            {products.map((products)=>(
                <Item products={products}/> 
            ))}
        </div>
    )

};

export default ItemList;