import  {useEffect, useState} from 'react';

import IBook from '../Interfaces/IBook';

const useFetch = (url : string) => {

    const [dati, setDati] = useState<Array<IBook> | null>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        console.log("Otteniamo i dati dalla web api");

        if (!url) return;
        
        fetch(url)
            .then(res => {

                if (!res.ok) {
                    throw Error("Errore Ottenimento Dati da Web Api");
                }

                return res.json();
            })
            .then(data => {
                setDati(data);
                setIsLoading(false);
            })
            .catch(err => {
                console.log(err.message);
                setError(err.message);
                setIsLoading(false);
            })
    },[url]);
    
    return {dati, isLoading, error}

}

export default useFetch;