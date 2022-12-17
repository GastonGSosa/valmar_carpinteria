import {useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import './ItemListContainer.css';
import ItemList from './ItemList';
import { productArray } from './mocks/itemListMock';
import { useParams } from 'react-router-dom';
import {query, where, collection, doc, getDoc,getDocs,getFirestore} from "firebase/firestore";




const ItemListContainer = () => {
    const {category} = useParams();
    
    const [products, setProducts] = useState([]);
    useEffect(() => {
      const db = getFirestore();
      // PARA CONSULTAR 1 SOLO ITEM
     /*  const itemRef = doc(db,"items","2ofYamPGXPKZb7AocYa5");
      getDoc(itemRef).then((snapshop)=> {
        if (snapshop.exists()) {
            setProducts([{id:"2ofYamPGXPKZb7AocYa5",...snapshop.data()}])
            }
        }
      ) */
      // PARA CONSULTAR TODOS LOS ITEMS
     /*  const itemsCollection = collection(db,"items");
      getDocs(itemsCollection).then((snapshot)=> {
                                    const products = snapshot.docs.map((doc)=>(
                                                                                {id:doc.id,
                                                                                ...doc.data(),}
                                                                                )
                                                                        )
                                    setProducts(products) 
                                    console.log(products)
                                                }
                                    ); */
      

    // PARA CONSULTAR TODOS LOS ITEMS CON FILTROS
        const itemsCollection = collection(db, "items");
        const q = query(itemsCollection, 
                        where("category","==","muebles"));
        getDocs(q).then(
                            (snapshot)=>{
                                const products = snapshot.docs.map(
                                    (doc)=>({
                                        id:doc.id,
                                        ...doc.data(),
                                            }
                                    )
                                );
                                setProducts(products);
                                
                            }
                        )
                                                
    }, [])
    

  /*   useEffect(() => {
      new Promise (
        (resolve)=> 
            setTimeout(()=>{
                resolve(productArray)
            }, 1500)
        ).then((data)=> {
            if (category) {
                const categories = data.filter(
                    (item)=> item.category===category)
                setProducts(categories)
            } else {
                setProducts(data)
            }
        })
    }, [category]);

    if (products.length=== 0) {
        return(<p>Loading...</p>)
    }     */
    return (
        <Container className="h-full mx-auto">
            <ItemList products={products}/>
        </Container>

    )
}

export default ItemListContainer;