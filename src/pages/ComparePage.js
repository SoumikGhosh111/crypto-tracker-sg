import React, { useState, useEffect } from 'react'
import Header from '../components/Common/Header';
import SelectCoins from '../components/Compare/SelectCoins';
import CoinPageListItem from '../components/CoinPageListItem';
import Loader from '../components/Common/Loader';
import CoinInfo from '../components/Coin/CoinInfo';
import ToggleGroupButtons from '../components/Coin/ToggleGroupButtons';
import MultiAxisLineChart from '../components/Coin/MultiAxisLineChart';
import { coinObject } from '../functions/convertObject';
import { fetchCoinData } from '../functions/fetchCoinData';
import { fetchCoinPrice } from '../functions/fetchCoinPrice';
function ComparePage() {
    const [days, setDays] = useState(30);
    const [type, setType] = useState("prices");
    const [crypto1, setCrypto1] = useState("bitcoin");
    const [crypto2, setCrypto2] = useState("ethereum");
    const [cryptoData1, setCryptoData1] = useState({});
    const [cryptoData2, setCryptoData2] = useState({});
    const [loading, setIsLoading] = useState(true);
    const [crypto1ChartData, setCrypto1ChartData] = useState({});
    const [crypto2ChartData, setCrypto2ChartData] = useState({});

    const handleChangeDays = async (event) => {
        setIsLoading(true); 
        setDays(event.target.value);
        console.log("this is days", event.target.value);
        const prices1 = await fetchCoinPrice(crypto1, event.target.value, type);
        const prices2 = await fetchCoinPrice(crypto2, event.target.value, type);
        console.log("this is handle change days prices 1", prices1)
        console.log("this is handle change days prices 1", prices1)
        setCrypto1ChartData(prices1);
        setCrypto2ChartData(prices2);
        setIsLoading(false); 
        // if (prices1.length > 0  && prices2.length > 0) {
        // }
    }

    const handleChangeTypes = async (event, newType) => {
        setIsLoading(true); 
        setType(newType);
        const prices1 = await fetchCoinPrice(crypto1, days, newType);
        const prices2 = await fetchCoinPrice(crypto2, days, newType);
        setCrypto1ChartData(prices1);
        setCrypto2ChartData(prices2);
        setIsLoading(false); 
        // if (prices1.length > 0 && prices2.length > 0) {
        // }

    };

    useEffect(() => {
        getData();
        // console.log("this is crypto2",cryptoData2);  
    }, []);

    async function getData() {
        setIsLoading(true); 
        const data1 = await fetchCoinData(crypto1);
        const data2 = await fetchCoinData(crypto2);
        console.log("data1 is", data1);

        if (data1) {
            coinObject(setCryptoData1, data1);
        }

        if (data2) {
            coinObject(setCryptoData2, data2);
        }

        if (data1 && data2) {
            const prices1 = await fetchCoinPrice(crypto1, days, type);
            const prices2 = await fetchCoinPrice(crypto2, days, type);
            if(prices1 && prices2){ 
                if (prices1.length > 0 && prices2.length > 0) {
                    setCrypto1ChartData(prices1);
                    setCrypto2ChartData(prices2);
                    setIsLoading(false); 
                }
            }
            
        }
        // setIsLoading(false);
    }
    const handleChangeCrypto1 = async (event) => {
        setIsLoading(true); 
        setCrypto1(event.target.value);
        console.log("This is crypto1", event.target.value);
        const data = await fetchCoinData(event.target.value);
        // console.log("This is data for data 1",data); 
        if (data) {
            coinObject(setCryptoData1, data);
            const prices = await fetchCoinPrice(crypto1, days, type);
            if (prices.length > 0) {
                setCrypto1ChartData(prices);
                setIsLoading(false); 
            }
        }
    }
    const handleChangeCrypto2 = async (event) => {
        setIsLoading(true); 
        setCrypto2(event.target.value);
        console.log("This is crypto2", event.target.value);
        const data = await fetchCoinData(event.target.value);
        if (data) {
            coinObject(setCryptoData2, data);
            const prices = await fetchCoinPrice(crypto2, days, type);
            if (prices.length > 0) {
                setCrypto1ChartData(prices);
                setIsLoading(false); 
            }
        }
    }

    

    return (
        <div>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <Header />
                    <div className='coin-wrapper'>
                        <SelectCoins crypto1={crypto1} handleChangeCrypto1={handleChangeCrypto1} crypto2={crypto2} handleChangeCrypto2={handleChangeCrypto2} days={days} handleChangeDays={handleChangeDays} />
                    </div>
                    <CoinPageListItem coin={cryptoData1} />
                    <CoinPageListItem coin={cryptoData2} />
                    <div className='coin-wrapper'>
                        <div className='toggle-grp-wrapper'><ToggleGroupButtons type={type} handleChangeTypes={handleChangeTypes} /></div>
                        <MultiAxisLineChart coinData1={crypto1ChartData} coinData2={crypto2ChartData} coin1Info={cryptoData1.name} coin2Info={cryptoData2.name} />
                    </div>
                    <CoinInfo heading={cryptoData1.name} desc={cryptoData1.desc} />
                    <CoinInfo heading={cryptoData2.name} desc={cryptoData2.desc} />
                </>
            )}

        </div>
    )
}

export default ComparePage; 