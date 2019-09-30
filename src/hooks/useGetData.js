import { useState , useEffect} from 'react';
const api = 'https://us-central1-mc-dev-api.cloudfunctions.net/api';

const useGetData = () => { 
    const [ myData, setData] = useState([]);

    useEffect(() => {
        fetch(api)
        .then(response => response.json())
        .then(data => setData(data))
    }, []);

    return myData;
}

export default useGetData;