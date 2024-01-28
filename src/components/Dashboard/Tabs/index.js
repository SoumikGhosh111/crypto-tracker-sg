import React, {useState} from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { createTheme, ThemeProvider } from '@mui/material';
import Gridcomp from '../Grid';
import Searchcomp from '../Searchcomp';
import Listcomp from '../Listcomp';
import { Link } from 'react-router-dom';
import "./styles.css"; 

export default function Tabscomponent({ coins }) {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const tabStyle = { 
    color: "var(--white)", 
    fontSize: "1.2rem", 
    fontFamily: "inter",
    fontWeight: "600", 
  }

  const tabTheme = createTheme({ 
    palette:{ 
        primary:{ 
            main:"#3a80e9", 
        }
    }
  })
  return (
    <ThemeProvider theme={tabTheme}>
      <TabContext value={value}>
        <div >
          <TabList onChange={handleChange} variant="fullWidth">
            <Tab label="Grid" value="1"  sx={tabStyle}/>
            <Tab label="List" value="2" sx={tabStyle}/>
            {/* <Tab label="Item Three" value="3" /> */}
          </TabList>
        </div>
        <TabPanel value="1">
         <div className="grid-flex">
         {coins.map((coin, i)=> { 
            return <Gridcomp coin={coin} key={i}/> 
          })}
         </div>
        </TabPanel>
        <TabPanel value="2">
          <div className='table-flex'>
          <table>
            {coins.map((coin, i)=> { 
              return <Listcomp coin={coin} key={i} />
            })}
          </table>
          </div>
        </TabPanel>
        {/* <TabPanel value="3">Item Three</TabPanel> */}
      </TabContext>
    </ThemeProvider>
  );
}
