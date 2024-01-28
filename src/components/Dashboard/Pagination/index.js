import React, {useState} from 'react';
import Pagination from '@mui/material/Pagination';
import "./styles.css"; 
// import Typography from '@mui/material/Typography';
// import Stack from '@mui/material/Stack';

export default function Paginationcomp({pageNum, handlePageChange}) {
  const paginationStyles = { 
    color: "var(--white)", 
    "& .Mui-selected ": { 
        backgroundColor: "var(--blue) !important", 
        color: "#fff !important", 
        borderColor:"var(--blue)    !important", 

    }, 
    "& .MuiPaginationItem-ellipsis": { 
        border: "0px solid var(--grey) !important", 

    }, 
    "& .MuiPaginationItem-text":{ 
        color: "var(--white)", 
        border: "1px solid var(--grey)", 
    }, 
  }
  return (
    <div className='pagination-flex'>
        <Pagination count={10} page={pageNum} onChange={(event, value)=>handlePageChange(event, value)} color="primary" sx={paginationStyles}/>
    </div>
      
  );
}