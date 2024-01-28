import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import "./styles.css"; 

export default function SelectDaysInfo({days, handleDaysChange}) {
 
  const stylesForSelector = { 
    height: "2.5rem", 
    color: "var(--white)", 
    "& .MuiOutlinedInput-notchedOutline": { 
        borderColor: "var(--white)", 
    }, 
    "& .MuiSvgIcon-root": { 
        color: "var(--white)", 
    }, 
    "&:hover":{
        "&& fieldset":{ 
            borderColor: "#3a80e9", 
        }, 
    }, 
  }
  return (
    <div sx={{ minWidth: 120 }} className='select-days'>
        <p>Price Change in the last </p>
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={days}
          onChange={(e)=> handleDaysChange(e)}
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
  );
}
