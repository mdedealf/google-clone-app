import { useState, useEffect } from 'react';
import API_KEY from './keys';

const CONTEXT_KEY = '3b7ffeb4e1b23900f';

const useGoogleSearch = (term) => {
    const [ data, setData ] = useState(null);
    
    useEffect(() => {

    }, [term])
};

export default useGoogleSearch;
