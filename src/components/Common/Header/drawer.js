import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import SwitchModes from '../SwitchModes';
import { IconButton } from '@mui/material';
import {Switch} from '@mui/material';

export default function TemporaryDrawer() {
    let [isOpen, setOpen] = useState(false);
    const setDark = () => { 
        localStorage.setItem("theme", "dark"); 
        document.documentElement.setAttribute("data-theme", "dark"); 
    }
    const setLight = () => { 
        localStorage.setItem("theme", "light"); 
        document.documentElement.setAttribute("data-theme", "light"); 
    }
    const storedTheme = localStorage.getItem("theme"); 

    const preferDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches; 

    const defaultDark = storedTheme === "dark" || (storedTheme === null && preferDark); 

    const [darkTheme, setDarkTheme] = useState(
        defaultDark == "dark" ? true : false
    )


    if(defaultDark){ 
        setDark(); 
    }


    const toggleTheme = (e) => {
        if (!darkTheme) {
          setDark();
        } else {
          setLight();
        }
        setDarkTheme(!darkTheme);
      };

    return (
        <div>

            <IconButton onClick={() => setOpen(true)}><MenuRoundedIcon className='link'/></IconButton>
            <Drawer
                anchor={"right"}    
                open={isOpen}
                onClose={() => setOpen(false)}
            >
                <div className='drawer-div'>
                    <a href='/' className='link'><p>Home</p></a>
                    <a href='/compare' className='link'><p>Compare</p></a>
                    <a href='/dashboard' className='link'><p>Dashboard</p></a>
                    <a href='/watchlist' className='link'><p>Watchlist</p></a>
                   <SwitchModes />
                </div>
            </Drawer>
        </div>
    );
}