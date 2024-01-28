import React, { useState } from 'react'
import { motion } from 'framer-motion';
import "./styles.css";
function CoinInfo({ heading, desc }) {
    const shortDesc = desc.slice(0, 400) + " <span style='color: var(--grey); cursor: pointer'> Read More...</span>"
    const longDesc = desc + "<span style='color: var(--grey); cursor: pointer'> Read Less...</span>"
    const [isClick, setClick] = useState(false);

    return (

        <motion.div className='coin-wrapper'
        initial = {{ opacity: 0, y: 50 }}
        whileInView = {{ opacity: 1, y: 0 }}
        viewport = {{ once: false }}
        transition = {{ type: "spring", duration: 0.0001}}
        
        >
            <h2>{heading}</h2>
            {desc.length > 400 ? <p onClick={() => setClick(!isClick)} dangerouslySetInnerHTML={{ __html: !isClick ? shortDesc : longDesc }} /> :
                < p dangerouslySetInnerHTML={{ __html: desc }} />
            }
        </motion.div>
    )
}

export default CoinInfo;

// initial = {{ opacity: 0, y: 50 }}
// whileInView = {{ opacity: 1, y: 0 }}
// viewport = {{ once: false }}
// transition = {{ type: "spring", duration: 0.0001, delay: Random }}