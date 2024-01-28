import axios from "axios";

export const fetchCoinData = (id) => { 
    const coinData = axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
    .then((response)=> { 
        console.log(response); 
        return response.data;  
    })
    .catch((error)=> console.log(error));
    
    return coinData; 
}
