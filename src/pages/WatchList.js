import React, { useEffect, useState } from 'react';
import { fetch100Coins } from '../functions/fetch100Coins';
import Tabscomponent from '../components/Dashboard/Tabs';
import Loader from '../components/Common/Loader';
import Header from '../components/Common/Header';
import { Link } from 'react-router-dom';
import Button from '../components/Common/Button';

function WatchList() {
  const [coinWatchList, setCoinWatchList] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [coins, setCoins] = useState((JSON.parse(localStorage.getItem("watchlist"))) || []); 
  const[referensKey, setReferensKey] = useState(0); 
  
  console.log(coins)
  useEffect(() => {
    getData();
  }, [coins]); 

  useEffect(()=> { 
    changeReferense(); 
  }, [coinWatchList])

  console.log("this is referense" , referensKey); 
  const changeReferense = () => { 
    setReferensKey( referensKey + 1); 
  }

  
  // console.log(test); 
  console.log(coinWatchList); 
  const getData = async () => {
    const allCoins = await fetch100Coins();
    if( allCoins){ 
      setCoinWatchList(allCoins.filter((item)=> coins.includes(item.id))); 
      setLoading(false); 
       
    }
  } 



  
  return (
    <div>
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <>
          {coinWatchList.length === 0 ? (
            <div className='empty-watchlist'>
              <h1>
                Oops Nothing is Added to  the Watchlist. . .
              </h1>
              <Link to='/dashboard' className='link'>
                {/* <Button text={"Dashboard"}
                  onClick={() => console.log("hi")}
                // outLined={false}
                /> */}
              </Link>
            </div>
          ) : (
            <Tabscomponent coins={coinWatchList} />
          )}
        </>
      )}
    </div>
  )
}

export default WatchList