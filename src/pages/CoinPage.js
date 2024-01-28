import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Header from '../components/Common/Header';
import Loader from '../components/Common/Loader';
import { coinObject } from '../functions/convertObject';
import CoinPageListItem from '../components/CoinPageListItem';
import CoinInfo from '../components/Coin/CoinInfo';
import { fetchCoinData } from '../functions/fetchCoinData';
import { fetchCoinPrice } from '../functions/fetchCoinPrice';
import LineChartComp from '../components/Coin/LineChart';
import SelectDaysInfo from '../components/Coin/SelectDaysInfo';
import ToggleGroupButtons from '../components/Coin/ToggleGroupButtons';
function CoinPage() {
  const { id } = useParams();
  const [days, setDays] = useState(30);
  const [isLoading, setLoading] = useState(true);
  const [coinData, setCoinData] = useState([]);
  const [chartData, setChartData] = useState({});
  const [type, setType] = useState('prices');

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]); 

  
  
  
  
  async function getData() {
    const coin = await fetchCoinData(id);
    if (coin) {
      coinObject(setCoinData, coin);
      const prices = await fetchCoinPrice(id, days, type);
      if (prices.length > 0) {
        console.log("this is Prices>>>>>", prices);
        // setChartData(); 
        setChartData(prices);
        setLoading(false);
      }
    }
  }
  const handleDaysChange =  async (event) => {
    setDays(event.target.value); 
    const prices = await fetchCoinPrice(id, event.target.value, type); 
    if(prices.length > 0){ 
      setChartData(prices); 
    }
  };
  

  const handleChangeTypes = async   (event, newType) => {
    setType(newType);
    const prices = await fetchCoinPrice(id, days, newType); 
    if(prices.length > 0){ 
      setChartData(prices); 
    }
  };
  // useEffect(()=> { 
  // if(days)
  //     getPrices();  
  // }, [days])

  // async function getPrices(){ 
  //   const prices = await fetchCoinPrice(id, days);
  //     if (prices.length > 0) {
  //       console.log("this is Prices>>>>>", prices);
  //       // setChartData(); 
  //       setChartData(prices);

  //       setLoading(false);
  //     }
  // }

  return (
    <div >
      <Header />
      {isLoading ? (<Loader />) : (
        <>
          <CoinPageListItem coin={coinData} />
           
            <div className='coin-wrapper'>
            {isLoading? (<Loader />): (
            <>
              <SelectDaysInfo days={days} handleDaysChange={handleDaysChange}/>
              <div className='toggle-grp-wrapper'><ToggleGroupButtons type={type} handleChangeTypes={handleChangeTypes}/></div>
              <LineChartComp prices={chartData} coinInfo={coinData.name} />
            </>
            )}
            </div>

          <CoinInfo heading={coinData.name} desc={coinData.desc} />
        </>

      )}
    </div>
  )
}

export default CoinPage

