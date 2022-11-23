import Item from './Item';



const ItemList = ({products}) => {

    return (
        <ul>
            {products.map((products)=>(
              <Item products={products}/>
            ))}
        </ul>
    )

};

export default ItemList;