import React, {useState, useEffect} from 'react'
import NorthRoundedIcon from '@mui/icons-material/NorthRounded';
import { motion } from 'framer-motion';
import "./styles.css"

function BackToTop() {

  const [showBtn, setBtn] = useState(false); 


  useEffect(()=> { 
    window.addEventListener("scroll", ()=> { 
      if(window.scrollY > 100){ 
        setBtn(true); 
      }else{ 
        setBtn(false); 
      }
    }); 
  }, []); 

   const topFunction = () => { 
    window.scrollTo({ 
        top: 0, 
        behavior: "smooth", 
    })
  }

  

  return (
    <>
      {showBtn && ( 
        <motion.div className='back-to-top' id="myBtn"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          whileTap={{ scale: 0.8, }}
          style={{zIndex: 1}}
          onClick={topFunction}
          
        >
          <NorthRoundedIcon />
        </motion.div>
      )}
    </>
    
  )
}

export default BackToTop; 

    // <div  className="back-to-top" id="myBtn"  onClick={() => topFunction()}>
    //     <NorthRoundedIcon />
    // </div>





// let mybutton = document.querySelector(".back-to-top");

//   // When the user scrolls down 20px from the top of the document, show the button
//   window.onscroll = function() {scrollFunction()};
  
//   function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//       mybutton.style.display = "flex";
//     } else {
//       mybutton.style.display = "none";
//     }
//   }
  
//   // When the user clicks on the button, scroll to the top of the document
//   function topFunction() {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
//   }