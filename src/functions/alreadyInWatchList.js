export const alreadyInWatchList = (id) => { 
    let item = localStorage.getItem("watchlist"); 
    if(item){ 
        let arr = JSON.stringify(item); 
        if(arr.includes(id)){ 
            return true; 
        }else{ 
            return false; 
        }
    }
    return false; 
}