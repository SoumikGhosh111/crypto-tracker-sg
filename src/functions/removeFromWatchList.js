import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const removeFromWatchList = (id) => { 
    if(window.confirm("Do you want to remove the item from watchlist")){ 
        let arr = JSON.parse(localStorage.getItem("watchlist")); 
        localStorage.setItem("watchlist", JSON.stringify(arr.filter((obj)=> obj !== id))); 
        console.log(arr); 
        console.log(localStorage.getItem("watchlist"));  
        toast.success(`${id.slice(0,1).toUpperCase() + id.slice(1)} is removed from Watchlist`); 
    }
}