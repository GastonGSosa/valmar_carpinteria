
const Item = ({products}) => {
    return (
        <div>
            <li><b>{products.name}</b></li>
            <li>Descripcion: {products.description}</li>
            <li>Stock: {products.stock}</li>
        </div>

    );
};

export default Item;