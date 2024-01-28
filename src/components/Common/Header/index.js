import React, { useState } from 'react'; 
import './styles.css'; 
import TemporaryDrawer from './drawer';
import Button from '../Button';
import { Link } from 'react-router-dom';
import SwitchModes from '../SwitchModes';
import { Switch } from '@mui/material';


function Header(){ 
    return ( 
        <div className='navbar'>
            <h1 className='logo'>CryptoTracker<span style={{color: "var(--blue)"}}>.</span></h1>
            <div className='links'>
                <SwitchModes/>
                <Link to='/' className='link'><p>Home</p></Link>
                <Link to='/compare' className='link'><p>Compare</p></Link>
                <Link to='/watchlist' className='link'><p>Watchlist</p></Link>
                <Link to='/dashboard' className='link'>
                <Button text={"Dashboard"}
                        onClick={()=> console.log("hi")}
                        // outLined={false}
                />
                </Link>
                
            </div>
            <div className='mobile-drawer'>
                <TemporaryDrawer />
            </div>
        </div>
    )
}
export default Header; 