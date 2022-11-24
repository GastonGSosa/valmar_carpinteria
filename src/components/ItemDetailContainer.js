import Container from 'react-bootstrap/Container';
import ItemDetail from './ItemDetail';
import { productArray } from './mocks/itemListMock';
import {useState, useEffect, useParams} from 'react';



const ItemDetailContainer = () => {

    const {id}=useParams();

     const [product, setProduct] = useState(null)

     useEffect(() => {
        new Promise (
          (resolve)=> 
              setTimeout(()=>{
                  resolve(productArray)
              }, 2000)
          ).then((data)=> {
              if (id) {
                  const  ids = data.find(
                      (item)=> item.id ===id)
                  setProduct(ids)
              } else {
                  setProduct(data)
              }
          })
      }, [id]);
    


    if (!product) {return (
        <p>Loading...</p>

    );}
    else {
        return (
            <Container>
                <ItemDetail product={product} />
            </Container>
        
        );
    }
}

export default ItemDetailContainer; 