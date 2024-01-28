export const coinObject =(setState, data)=>  { 
   setState(
    { 
        id: data.id, 
        image: data.image.large, 
        name: data.name, 
        symbol: data.symbol, 
        desc: data.description.en, 
        market_cap_change_percentage_24h: data.market_data.price_change_percentage_24h, 
        current_price: data.market_data.current_price.usd, 
        total_volume: data.market_data.total_volume.usd, 
        market_cap: data.market_data.market_cap.usd, 
    }
   )

}



// 