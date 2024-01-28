import {toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
export const addToWatchList = (id) => { 
    let arr = JSON.parse(localStorage.getItem("watchlist")) || []; 
    arr.push(id); 
    localStorage.setItem("watchlist", JSON.stringify(arr)); 
    toast.success(`${id.slice(0,1).toUpperCase() + id.slice(1)} is added to the Watchlist`); 
    console.log(arr); 
    console.log(localStorage.getItem("watchlist")); 
}