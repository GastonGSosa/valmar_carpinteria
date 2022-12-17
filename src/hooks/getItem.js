import {collection, doc, getDoc, getDocs, getFirestore,query, where} from "firebase/firestore";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

export const useGetItem = () => {
    const [data, setData] = useState(null);
    const {category, id} = useParams();

    //Firebase Methods
    const db= getFirestore();
    const refProps = [db, "items"];
    const ref = id ? doc( ...refProps, id) : collection( ...refProps);

    useEffect( () => {
        // If we clicked the navbar resulting in a category in the browser
        if (category) {
            const q = query(ref, where("category", "==", category))
            getDocs(q).then(
                (result) => 
                    setData(
                        result.docs.map( (doc) => ({id: doc.id, ...doc.data() })  )

                    )
                    );
            return;
        }

        //if we clicked in a item resulting in a ID in the browser (primer metodo de firebase que vimos en clase)
        if (id) {
            getDoc(ref).then(
                (item) => {
                    if (item.exists()) {
                        setData({id: item.id, ...item.data()})
                            }
                    }
                )
                .catch( 
                    (err)=>console.error({err}) 
                    )
            return;
            }
        else {
            getDocs(ref).then(
                (result) => setData(result.docs.map(

                        (doc) => ({id: doc.id, ...doc.data()})

                        )
                    )
                )
            }
        }, [category]
    );
    return data;
}