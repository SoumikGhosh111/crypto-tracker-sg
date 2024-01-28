import React, { useState, useEffect } from 'react'
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { Tooltip } from '@mui/material';
import { convertNumbers } from '../../functions/convertNumbers';
import { Link } from 'react-router-dom';
import "./styles.css";
import Loader from '../Common/Loader';

function CoinPageListItem({ coin }) {



    const capText = {
        textTransform: "uppercase",
    }
    const textBolder = {
        fontWeight: "600"
    }
    const textSize = {
        fontSize: " 1.5rem"
    }
    const [volume, setVolume] = useState(coin.total_volume)
    const [cap, setCap] = useState(coin.market_cap)
    useEffect(() => {
        if (!volume.toString().includes("K") || volume.toString().includes("M") || volume.toString().includes("B")) {
            setVolume(convertNumbers(volume));
            setCap(convertNumbers(cap));
        }
    }, [])


    return (

        < div className='coin-wrapper'>
            {!coin ? (<Loader />) : (
                <table>

                        <tr>
 
                            <Tooltip title={"Coin Logo"}>
                                <td>
                                    <div className="logo-img logo-img-mob">
                                        <img
                                            src={coin.image}
                                        />
                                    </div>
                                </td>
                            </Tooltip>

                            <Tooltip title={"Coin Name"}>
                                <td>
                                    <div className="name-symbol name-symbol-mob">
                                        <h3 style={capText}>
                                            {coin.symbol}-usd
                                        </h3>
                                        <p>
                                            {coin.name}
                                        </p>
                                    </div>
                                </td>
                            </Tooltip>

                            <td>
                                <div className="percentage-trending">
                                    <div className={coin.market_cap_change_percentage_24h < 0 ? ("percentage-red percentage-red-mob") : ("percentage percentage-mob")}>
                                        <p style={textBolder}>
                                            {coin.market_cap_change_percentage_24h < 0 ? (coin.market_cap_change_percentage_24h.toFixed(2)) : (`+${coin.market_cap_change_percentage_24h.toFixed(2)}`)}%
                                        </p>
                                    </div>
                                    <div className={coin.market_cap_change_percentage_24h < 0 ? ("trending-status-red trending-status-red-mob") : ("trending-status trending-status-mob")}>
                                        {coin.market_cap_change_percentage_24h < 0 ?
                                            (<TrendingDownRoundedIcon style={textSize} />) : (<TrendingUpRoundedIcon style={textSize} />)
                                        }
                                    </div>
                                </div>
                            </td>

                            <Tooltip title={"Current Price"}>
                                <td>
                                    <div className={coin.market_cap_change_percentage_24h < 0 ? ("current-price-red current-price-red-mob") : ("current-price current-price-mob")}>
                                        <p style={textBolder}>
                                            ${coin.current_price.toLocaleString()}
                                        </p>
                                    </div>
                                </td>
                            </Tooltip>

                            <Tooltip title={"Total Volume"}>
                                <td>
                                    <p style={textBolder} className='window-width'>
                                        ${coin.total_volume.toLocaleString()}
                                    </p>
                                    <p style={textBolder} className='mob-width'>
                                        ${volume}
                                    </p>
                                </td>
                            </Tooltip>

                            <Tooltip title={"Market Cap"}>
                                <td>
                                    <p style={textBolder} className='window-width'>
                                        ${coin.market_cap.toLocaleString()}
                                    </p>
                                    <p style={textBolder} className='mob-width'>
                                        ${cap}
                                    </p>
                                </td>
                            </Tooltip>
                            

                            
      
                        </tr>


                </table>
            )}
        </div>

    )
}

export default CoinPageListItem




{/* <tr>
                    <Tooltip title={"Coin Logo"}>
                        <td>
                            <div className="logo-img">
                                <img
                                    src={coin.image}
                                />
                            </div>
                        </td>
                    </Tooltip>

                    <Tooltip title={"Coin Name"}>
                        <td>
                            <div className="name-symbol">
                                <h3 style={capText}>
                                    {coin.symbol}-usd
                                </h3>
                                <p>
                                    {coin.name}
                                </p>
                            </div>
                        </td>
                    </Tooltip>

                    <td>
                        <div className="percentage-trending">
                            <div className={coin.market_cap_change_percentage_24h < 0 ? ("percentage-red") : ("percentage")}>
                                <p style={textBolder}>
                                    {coin.market_cap_change_percentage_24h < 0 ? (coin.market_cap_change_percentage_24h.toFixed(2)) : (`+${coin.market_cap_change_percentage_24h.toFixed(2)}`)}%
                                </p>
                            </div>
                            <div className={coin.market_cap_change_percentage_24h < 0 ? ("trending-status-red") : ("trending-status")}>
                                {coin.market_cap_change_percentage_24h < 0 ?
                                    (<TrendingDownRoundedIcon style={textSize} />) : (<TrendingUpRoundedIcon style={textSize} />)
                                }
                            </div>
                        </div>
                    </td>

                    <Tooltip title={"Current Price"}>
                        <td>
                            <div className={coin.market_cap_change_percentage_24h < 0 ? ("current-price-red") : ("current-price")}>
                                <p style={textBolder}>
                                    ${coin.current_price.toLocaleString()}
                                </p>
                            </div>
                        </td>
                    </Tooltip>

                    <Tooltip title={"Total Volume"}>
                        <td>
                            <p style={textBolder} className='window-width'>
                                ${coin.total_volume.toLocaleString()}
                            </p>
                            <p style={textBolder} className='mob-width'>
                                ${volume}
                            </p>
                        </td>
                    </Tooltip>

                    <Tooltip title={"Market Cap"}>
                        <td>
                            <p style={textBolder} className='window-width'>
                                ${coin.market_cap.toLocaleString()}
                            </p>
                            <p style={textBolder} className='mob-width'>
                                ${cap}
                            </p>
                        </td>
                    </Tooltip>
                </tr> */}