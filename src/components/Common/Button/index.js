import React from 'react'; 
import './styles.css'; 

function Button({text, onClick, outLined}){ 
    return ( 
       <div className={outLined? "outline-btn":"btn"} onClick={onClick()}  >
        {text}
       </div>
    ); 
}

export default Button; 