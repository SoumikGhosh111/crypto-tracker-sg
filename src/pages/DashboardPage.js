import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import Tabscomponent from "../components/Dashboard/Tabs";
import { motion } from "framer-motion";
import axios from 'axios';
import Searchcomp from "../components/Dashboard/Searchcomp";
import Paginationcomp from "../components/Dashboard/Pagination";
import Loader from "../components/Common/Loader";
import BackToTop from "../components/Common/BackToTop";
function Dashboardpage() {

    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en";

    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");
    const [pageNum, setPageNum] = useState(1);
    const [isLoading, setLoading] = useState(true);
    const [filteredCoins, setFilteredCoins] = useState([]);

    useEffect(() => {
        if (search) {
            setFilteredCoins(coins.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()) || item.symbol.toLowerCase().includes(search.toLowerCase())));
        } else {
            setFilteredCoins(coins.slice((pageNum - 1) * 10, (pageNum - 1) * 10 + 10));
        }
    }, [search])

    function onSearchChange(e) {
        setSearch(e.target.value);
    }

    const handlePageChange = (event, value) => {
        setPageNum(value);
        setFilteredCoins(coins.slice((value - 1) * 10, (value - 1) * 10 + 10));
    };


    useEffect(() => {
        axios.get(url, { crossDomain: true })
            .then((response) => {
                console.log("this is response>>>", response);
                setCoins(response.data);
                setFilteredCoins(response.data.slice((pageNum - 1) * 10, (pageNum - 1) * 10 + 10));
                setLoading(false);
            })
            .catch((error) => {
                console.log("this is the error>>> ", error);
            });
    }, [])

    return (
        <div>
            <Header />
            {isLoading ? (<Loader />) : (
                <>
                    <Searchcomp search={search} onSearchChange={onSearchChange} />
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25 }}
                    ><Tabscomponent coins={filteredCoins} /> </motion.div>
                    {
                        !search && (
                            <Paginationcomp pageNum={pageNum} handlePageChange={handlePageChange} />
                        )
                    }
                    <BackToTop />
                </>
            )}

        </div>
    )
}
export default Dashboardpage;


// useEffect(() => {
//     axios.get(url, { crossDomain: true })
//         .then((response) => {
//             console.log("this is response>>>", response);
//             setCoins(response.data);
//             setFilteredCoins(response.data.slice((pageNum - 1) * 10, (pageNum - 1) * 10 + 10));
//             setLoading(false);
//         })
//         .catch((error) => {
//             console.log("this is the error>>> ", error);
//         });
// }, [])

