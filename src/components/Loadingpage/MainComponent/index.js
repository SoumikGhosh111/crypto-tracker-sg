import React from "react";
import "./styles.css";
import Button from "../../Common/Button";
import phone from "../../../assets/phone 1.png";
import gradient from "../../../assets/gradient 1.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { RWebShare } from "react-web-share";
import { WhatsappShareButton } from 'react-share'; 

function MainComponent() {

    const APP_URL = "https://crypto-tracker-sg.vercel.app/";
    return (
        <div className="flex-info">
            <div className="text-paras">
                <motion.h1 className="text-effect"

                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                >
                    Track Crypto
                </motion.h1>

                <motion.h1 className="heading"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: 0.25 }}
                >
                    Real Time.
                </motion.h1>
                <motion.p className="paragraph"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: 0.5 }}
                >
                    Track crypto through a public api in real time. Visit the dashboard to do so!
                </motion.p>


                <div className="buttons">
                    <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.25, delay: 0.75 }}> <Link to='/dashboard' className="link"> <Button text={"Dashboard"} outLined={false} onClick={() => console.log("i am dashboard")} /> </Link></motion.div>
                    <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.25, delay: 1 }}
                        
                    >
                        
                            
                      <WhatsappShareButton url={APP_URL}>
                        <Button text={"Share"} outLined={true} onClick={() => console.log("shared successfully!")}/>
                      </WhatsappShareButton>
                    </motion.div>
                </div>
            </div>
            <motion.div className="phone-images"
                initial={{ opacity: 0, y: 30, x: 30 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.25 }}
            >
                <motion.img

                    src={phone}
                    alt="Phone Image"
                    className="phone"
                    initial={{ y: -15 }}
                    animate={{ y: 15 }}
                    transition={{ type: "smooth", repeatType: "mirror", duration: 2, repeat: Infinity }}
                />
                <img
                    src={gradient}
                    alt="Background Image"
                    className="bg"
                />
            </motion.div>

        </div>
    );
}

export default MainComponent;


{/**/ }
