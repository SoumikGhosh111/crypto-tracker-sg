import React, {useState} from "react";
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import { IconButton } from "@mui/material";
import { addToWatchList } from "../../../functions/addToWatchList";
import { removeFromWatchList } from "../../../functions/removeFromWatchList";
import { alreadyInWatchList } from "../../../functions/alreadyInWatchList";
import "./styles.css";

function Gridcomp({ coin }) {
    const [isAdded, setAdded] = useState(alreadyInWatchList(coin.id)); 
    const capText = {
        textTransform: "uppercase"
    }
    const textSize = {
        fontSize: " 1.5rem"
    }
    const textBolder = {
        fontWeight: "600"
    }
    let Random = Math.random() * 0.5;

    function handleIconButtonClicked(e){ 
        e.preventDefault(); 
        if(isAdded){ 
            removeFromWatchList(coin.id); 
            console.log("I am removed"); 
            setAdded(!isAdded); 
        }else{ 
            addToWatchList(coin.id); 
            console.log("I am Added"); 
            setAdded(!isAdded); 
        }
    }
    return (
        <Link to={`/coin/${coin.id}` } >    
            <motion.div className={coin.market_cap_change_percentage_24h < 0 ? ("grid-container-red") : ("grid-container")}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ type: "spring", duration: 0.0001, delay: Random }}



            >
                <div className="add-to-list-button">
                    <IconButton onClick={(e)=> handleIconButtonClicked(e)} className="ico">
                        {isAdded ? (
                            <StarRateRoundedIcon className="add-to-list-button-inner-fill"/>
                        ):( 
                            <StarOutlineRoundedIcon className="add-to-list-button-inner"/>
                        )}
                    </IconButton>
                </div>
                <div className="image-name-symbol">
                    <div className="logo-img">
                        <img
                            src={coin.image}
                        />
                    </div>
                    <div className="name-symbol">
                        <h3 style={capText}>
                            {coin.symbol}-usd
                        </h3>
                        <p>
                            {coin.name}
                        </p>
                    </div>
                </div>
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
                <div className={coin.market_cap_change_percentage_24h < 0 ? ("current-price-red") : ("current-price")}>
                    <p style={textBolder}>
                        ${coin.current_price.toLocaleString()}
                    </p>
                </div>
                <div className="volume-cap">
                    <p style={textBolder}>
                        Total Volume: {coin.total_volume.toLocaleString()}
                    </p>
                    <p style={textBolder}>
                        Market Cap: {coin.market_cap.toLocaleString()}
                    </p>
                </div>
            </motion.div>
        </Link>
    )
}
export default Gridcomp;

// initial={{ scale: 0 }}
//   animate={{ rotate: 180, scale: 1 }}
//   transition={{
//     type: "spring",
//     stiffness: 260,
//     damping: 20
//   }}