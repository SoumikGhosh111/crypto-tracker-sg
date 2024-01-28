import React, {useEffect, useState} from 'react'
import './styles.css'
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import NightsStayRoundedIcon from '@mui/icons-material/NightsStayRounded';
function SwitchModes() {
  const [checked, setChecked] = useState(()=> { 
    const savedTheme = sessionStorage.getItem("theme"); 
    return savedTheme === "dark"; 
  })


  useEffect(()=> {
    checkStoredTheme(); 
  }, [])


  useEffect(()=> { 
    toggleTheme(); 
    sessionStorage.setItem('theme', checked ? 'dark' : 'light');
  }, [checked])


  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  }

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  }
  
  const storedTheme = localStorage.getItem("theme");

  function checkStoredTheme(){ 
    if(storedTheme === "dark"){ 
      setChecked(false); 
    }

    if(storedTheme === "light"){ 
      setChecked(true); 
    }

    
  }


  function toggleTheme (){ 
    if(checked){ 
      setLight(); 
    }else{ 
      setDark()
    }
  }

  console.log(checked)



  return (
    <label className='label-for-switch'>
      <input type='checkbox' checked={checked} onChange={(e)=> setChecked(!checked)}/>
      <span className='span-1'>
        {checked ? (
          <NightsStayRoundedIcon sx={{width: "15px", height: "15px"}}/>
          ):(
          <WbSunnyOutlinedIcon sx={{width: "15px", height: "15px"}}/>
        )}
      </span>
      {!checked && (
      <span className='span-2'></span>
      )}
    </label>
  )
}

export default SwitchModes





