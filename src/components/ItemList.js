import Item from './Item';



const ItemList = ({products}) => {


    return (
        <div className="d-flex flex-wrap items-center justify-content-center gap-4">
            {products.map((products)=>(
                <Item products={products} key={products.id}/> 
            ))}
        </div>
    )

};

export default ItemList;