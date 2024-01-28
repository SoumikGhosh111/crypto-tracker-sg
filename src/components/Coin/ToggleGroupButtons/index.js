import React, {useState} from 'react';
import "./styles.css"; 
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ToggleGroupButtons({type, handleChangeTypes}) {
  

  const stylesForToggleGroup = { 
    "&.Mui-selected": { 
        color: "var(--white) !important", 
    }, 
    ".css-ueukts-MuiButtonBase-root-MuiToggleButton-root.Mui-selected ": {
      color: "#87CEEB",
      backgroundColor: "rgba(0, 0, 0, 0.08)",
  },
    borderColor: "var(--blue)", 
    border: "unset !important", 
    "& .MuiToggleButtonGroup-grouped": { 
        border: "1px solid  !important", 
        borderColor: "unset", 
        color: "var(--blue)", 
    }, 
    "& .MuiToggleButton-standard": { 
        color: "var(--blue)", 
    },
  }
  console.log(type); 
  return (
    <div className='select-type'>
        <ToggleButtonGroup
      value={type}
      exclusive
      onChange={ handleChangeTypes}
      aria-label="text alignment"
      sx={stylesForToggleGroup}
      className='select-grp'
    >
      <ToggleButton value="prices" className='select-value'>
        Price
      </ToggleButton>
      <ToggleButton value="market_caps" className='select-value'>
        Market Cap
      </ToggleButton>
      <ToggleButton value="total_volumes" className='select-value'>
        Total Volume
      </ToggleButton>
      
    </ToggleButtonGroup>
    </div>
    
  );
}
