import React from 'react'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import "./styles.css"
function Searchcomp({search, onSearchChange}) {

    const textSize = { 
        fontSize: "2rem"
    }
    return (
        <div className='search-box'>
            <div className='search-flex'>
                <SearchRoundedIcon style={textSize}/>
                <input
                    type='text'
                    placeholder='Search'
                    value={search}
                    onChange={(e)=> onSearchChange(e)}
                />
            </div>
        </div>
    )
}

export default Searchcomp