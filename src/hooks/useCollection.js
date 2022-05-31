import React, { useEffect, useState, useRef } from 'react'
import { projectFirestore } from '../firebase/config';

const useCollection = (collection,_query) => {
    const [documents,setDocument] =useState();
    const [error,setError]=useState();
    const query = useRef(_query).current;
    useEffect(()=>{
        let ref = projectFirestore.collection(collection)

        if(query){
            ref = ref.where(...query)
        }

        const unsub = ref.onSnapshot((snapshot)=>{
            let results=[]
            snapshot.docs.forEach(doc=>{
                results.push({...doc.data(),id:doc.id})
            })
            setDocument(results)
            setError(null)
        },(err)=>{
            console.log(err)
            setError('could not fetch the data')
        })
        return ()=>unsub()
    },[collection,query])
    return {error,documents}
}

export default useCollection