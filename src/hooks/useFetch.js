import {useEffect, useState, useCallback} from 'react';
import axios from "axios";


export default function useFetch(url){
    const [isLoading, setIsLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [options, setOptions] = useState({});


    const doFetch = useCallback((options = {})=>{
        setOptions(options);
        setIsLoading(true);
    }, [])

    useEffect(() => {
        let skipGetResponseAfterDestroy = false;
        const requestOptions = {
            ...options
        }

        if(!isLoading){
            return
        }

        axios(url, requestOptions
        ).then(res=>{
            if(!skipGetResponseAfterDestroy){
                setIsLoading(false);
                setResponse(res.data);
            }
        }).catch(err=>{
            if(!skipGetResponseAfterDestroy){
                setIsLoading(false);
                setError(err);
            }
        });

        return () => {
            skipGetResponseAfterDestroy = true;
        }

    }, [isLoading, options, url]);

    return [{isLoading, response, error, setError}, doFetch]
}
