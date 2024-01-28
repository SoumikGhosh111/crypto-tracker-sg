import axios from "axios"

export const fetchCoinPrice = (id, days, priceType)=>{ 
    const priceData = axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`)
    .then((response) => {  
        return response.data[priceType]; 
    })
    .catch((error)=> { 
        console.log(error); 
    }); 
    return priceData; 
}