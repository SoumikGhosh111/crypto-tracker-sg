import React, { useState, useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import "./styles.css";
import { fetch100Coins } from '../../../functions/fetch100Coins';
import Loader from '../../Common/Loader';

export default function SelectCoins({ crypto1, handleChangeCrypto1, crypto2, handleChangeCrypto2, days, handleChangeDays }) {

    const [coinsArr, setArr] = useState([]);
    const [loading, setLoading] = useState(true);
    const stylesForSelector = {
        height: "2.5rem",
        color: "var(--white)",
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--white)",
        },
        "& .MuiSvgIcon-root": {
            color: "var(--white)",
        },
        "&:hover": {
            "&& fieldset": {
                borderColor: "#3a80e9",
            },
        },
    }
    useEffect(() => {
        getData();
    }, []);


    const getData = async () => {
        const Arr = await fetch100Coins();
        console.log(Arr);
        if(Arr){ 
            setArr(Arr);
        }
        setLoading(false);
    }

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <div className='select-coin-div'>
                    <div sx={{ minWidth: 120 }} className="select-days select-day-wrapper">
                        <p>Crypto 1 </p>
                        <InputLabel id="demo-simple-select-label"></InputLabel>
                        <Select className='select-days-days'
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={crypto1}
                            onChange={(e) => handleChangeCrypto1(e)}
                            sx={stylesForSelector}
                        >
                            {coinsArr.filter((item)=> item.id !== crypto2).map((item) => (
                                <MenuItem value={item.id}>{item.name}</MenuItem>
                            ))}

                        </Select>
                    </div>

                    <div sx={{ minWidth: 120 }} className="select-days select-day-wrapper">
                        <p>Crypto 2 </p>
                        <InputLabel id="demo-simple-select-label"></InputLabel>
                        <Select className='select-days-days'
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={crypto2}
                            onChange={(e) => handleChangeCrypto2(e)}
                            sx={stylesForSelector}
                        >
                            {coinsArr.filter((item)=> item.id !== crypto1).map((item) => (
                                <MenuItem value={item.id}>{item.name}</MenuItem>
                            ))}

                        </Select>
                    </div>

                    <div sx={{ minWidth: 120 }} className="select-days select-day-wrapper">
                        <InputLabel id="demo-simple-select-label"></InputLabel>
                        <Select className='select-days-days'
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={days}
                            onChange={(e) => handleChangeDays(e)}
                            sx={stylesForSelector}
                        >
                            <MenuItem value={7}>7 Days</MenuItem>
                            <MenuItem value={30}>30 Days</MenuItem>
                            <MenuItem value={60}>2 Months</MenuItem>
                            <MenuItem value={90}>3 Months</MenuItem>
                            <MenuItem value={180}>6 Months</MenuItem>
                            <MenuItem value={365}>1 Year</MenuItem>

                        </Select>
                    </div>
                </div>
            )}
        </>

    );
}


{/* */ }
